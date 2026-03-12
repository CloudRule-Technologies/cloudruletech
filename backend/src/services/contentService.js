import { pool } from "../config/db.js";
import { defaultContent } from "../content/defaultContent.js";

export async function ensureDefaultContent() {
  const keys = Object.keys(defaultContent);
  for (const key of keys) {
    await pool.query(
      `INSERT INTO site_content (section_key, json_data)
       SELECT ?, ?
       WHERE NOT EXISTS (
         SELECT 1 FROM site_content WHERE section_key = ?
       )`,
      [key, JSON.stringify(defaultContent[key]), key],
    );
  }
}

export async function getSection(sectionKey) {
  const [rows] = await pool.query(
    "SELECT section_key, json_data, updated_at FROM site_content WHERE section_key = ?",
    [sectionKey],
  );

  if (rows.length === 0) {
    return null;
  }

  return {
    sectionKey: rows[0].section_key,
    data: rows[0].json_data,
    updatedAt: rows[0].updated_at,
  };
}

export async function upsertSection(sectionKey, jsonData, updatedBy) {
  await pool.query(
    `INSERT INTO site_content (section_key, json_data, updated_by)
     VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE
       json_data = VALUES(json_data),
       updated_by = VALUES(updated_by),
       updated_at = CURRENT_TIMESTAMP`,
    [sectionKey, JSON.stringify(jsonData), updatedBy || null],
  );
}

export async function getAllSections() {
  const [rows] = await pool.query(
    "SELECT section_key, json_data, updated_at FROM site_content ORDER BY section_key ASC",
  );

  return rows.map((row) => ({
    sectionKey: row.section_key,
    data: row.json_data,
    updatedAt: row.updated_at,
  }));
}
