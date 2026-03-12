import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { pool } from "../config/db.js";
import { env } from "../config/env.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();
const LOCKED_ADMIN_EMAIL = "admin@cloudrule.com";
const SUBADMIN_EMAIL = "subadmincloud@gmail.com";

function createToken(admin) {
  return jwt.sign(
    { id: admin.id, email: admin.email, name: admin.name, role: admin.role },
    env.jwtSecret,
    { expiresIn: env.jwtExpiresIn },
  );
}

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body || {};
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required" });
    }

    if (email.toLowerCase() !== SUBADMIN_EMAIL) {
      return res.status(403).json({
        message: `Only subadmin email is allowed for admin registration: ${SUBADMIN_EMAIL}`,
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const [result] = await pool.query(
      `INSERT INTO admins (name, email, role, password_hash)
       VALUES (?, ?, 'subadmin', ?)
       ON DUPLICATE KEY UPDATE
         name = VALUES(name),
         role = 'subadmin',
         password_hash = VALUES(password_hash)`,
      [name, SUBADMIN_EMAIL, passwordHash],
    );

    return res.status(201).json({
      message: "Subadmin account registered successfully",
      admin: { id: result.insertId || null, name, email: SUBADMIN_EMAIL, role: "subadmin" },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const normalizedEmail = String(email).toLowerCase();
    if (![LOCKED_ADMIN_EMAIL, SUBADMIN_EMAIL].includes(normalizedEmail)) {
      return res.status(401).json({ message: "Only admin accounts are allowed here" });
    }

    const [rows] = await pool.query(
      "SELECT id, name, email, role, password_hash FROM admins WHERE email = ?",
      [normalizedEmail],
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const admin = rows[0];
    const valid = await bcrypt.compare(password, admin.password_hash);
    if (!valid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = createToken(admin);
    return res.json({
      admin: { id: admin.id, name: admin.name, email: admin.email, role: admin.role },
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post("/user/register", async (req, res) => {
  try {
    const { name, email, password } = req.body || {};
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required" });
    }

    const [existing] = await pool.query("SELECT id FROM users WHERE email = ?", [
      email,
    ]);
    if (existing.length > 0) {
      return res.status(409).json({ message: "User email already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const [result] = await pool.query(
      "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
      [name, email, passwordHash],
    );

    return res.status(201).json({
      message: "User registered successfully",
      user: { id: result.insertId, name, email },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post("/user/login", async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const [rows] = await pool.query(
      "SELECT id, name, email, password_hash FROM users WHERE email = ?",
      [email],
    );
    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid user credentials" });
    }

    const user = rows[0];
    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      return res.status(401).json({ message: "Invalid user credentials" });
    }

    await pool.query("INSERT INTO user_login_events (user_id) VALUES (?)", [user.id]);

    return res.json({
      message: "User login successful",
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/user-logins", requireAuth, async (_req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT u.name, u.email, e.login_at
       FROM user_login_events e
       JOIN users u ON u.id = e.user_id
       ORDER BY e.login_at DESC
       LIMIT 100`,
    );
    return res.json({ events: rows });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/me", requireAuth, async (req, res) => {
  return res.json({ admin: req.user });
});

export default router;
