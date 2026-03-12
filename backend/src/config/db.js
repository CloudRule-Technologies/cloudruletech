import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import { env } from "./env.js";

const LOCKED_ADMIN_EMAIL = "admin@cloudrule.com";
const LOCKED_ADMIN_PASSWORD = "adminCloud";

export const pool = mysql.createPool({
  host: env.dbHost,
  port: env.dbPort,
  user: env.dbUser,
  password: env.dbPassword,
  database: env.dbName,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function testDbConnection() {
  const connection = await pool.getConnection();
  try {
    await connection.ping();
  } finally {
    connection.release();
  }
}

export async function ensureDatabaseReady() {
  // 1) Ensure the configured database exists.
  const bootstrap = await mysql.createConnection({
    host: env.dbHost,
    port: env.dbPort,
    user: env.dbUser,
    password: env.dbPassword,
  });

  try {
    await bootstrap.query(`CREATE DATABASE IF NOT EXISTS \`${env.dbName}\``);
  } finally {
    await bootstrap.end();
  }

  // 2) Ensure required tables exist.
  await pool.query(`
    CREATE TABLE IF NOT EXISTS admins (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(120) NOT NULL,
      email VARCHAR(190) NOT NULL UNIQUE,
      role VARCHAR(32) NOT NULL DEFAULT 'superadmin',
      password_hash VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const [roleColumnRows] = await pool.query(
    `SELECT COUNT(*) AS total
     FROM INFORMATION_SCHEMA.COLUMNS
     WHERE TABLE_SCHEMA = ?
       AND TABLE_NAME = 'admins'
       AND COLUMN_NAME = 'role'`,
    [env.dbName],
  );

  if ((roleColumnRows?.[0]?.total || 0) === 0) {
    await pool.query(
      "ALTER TABLE admins ADD COLUMN role VARCHAR(32) NOT NULL DEFAULT 'superadmin'",
    );
  }

  await pool.query(`
    CREATE TABLE IF NOT EXISTS site_content (
      id INT AUTO_INCREMENT PRIMARY KEY,
      section_key VARCHAR(120) NOT NULL UNIQUE,
      json_data JSON NOT NULL,
      updated_by INT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      CONSTRAINT fk_site_content_admin FOREIGN KEY (updated_by)
        REFERENCES admins(id)
        ON DELETE SET NULL
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(120) NOT NULL,
      email VARCHAR(190) NOT NULL UNIQUE,
      password_hash VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS user_login_events (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      login_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT fk_user_login_events_user FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(120) NOT NULL,
      email VARCHAR(190) NOT NULL,
      role VARCHAR(80) NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const [contactRoleColumnRows] = await pool.query(
    `SELECT COUNT(*) AS total
     FROM INFORMATION_SCHEMA.COLUMNS
     WHERE TABLE_SCHEMA = ?
       AND TABLE_NAME = 'contact_messages'
       AND COLUMN_NAME = 'role'`,
    [env.dbName],
  );

  if ((contactRoleColumnRows?.[0]?.total || 0) === 0) {
    await pool.query("ALTER TABLE contact_messages ADD COLUMN role VARCHAR(80) NULL");
  }

  await pool.query(`
    CREATE TABLE IF NOT EXISTS customer_enquiries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(120) NOT NULL,
      email VARCHAR(190) NOT NULL,
      service VARCHAR(190) NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS testimonials (
      id INT AUTO_INCREMENT PRIMARY KEY,
      client_name VARCHAR(120) NOT NULL,
      client_role VARCHAR(160) NULL,
      message TEXT NOT NULL,
      rating TINYINT DEFAULT 5,
      is_active BOOLEAN DEFAULT TRUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS seo_settings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      page_key VARCHAR(120) NOT NULL UNIQUE,
      title VARCHAR(255) NOT NULL,
      description TEXT NULL,
      keywords TEXT NULL,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS page_view_events (
      id INT AUTO_INCREMENT PRIMARY KEY,
      path VARCHAR(255) NOT NULL,
      user_agent VARCHAR(400) NULL,
      referrer VARCHAR(255) NULL,
      viewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

export async function ensureLockedAdminAccount() {
  const passwordHash = await bcrypt.hash(LOCKED_ADMIN_PASSWORD, 12);

  await pool.query(
    `INSERT INTO admins (name, email, role, password_hash)
     VALUES (?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       name = VALUES(name),
       role = VALUES(role),
       password_hash = VALUES(password_hash)`,
    ["CloudRule Admin", LOCKED_ADMIN_EMAIL, "superadmin", passwordHash],
  );
}
