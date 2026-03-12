import { Router } from "express";
import bcrypt from "bcryptjs";
import { requireAuth } from "../middleware/auth.js";
import { defaultContent } from "../content/defaultContent.js";
import {
  getAllSections,
  getSection,
  upsertSection,
} from "../services/contentService.js";
import { pool } from "../config/db.js";

const router = Router();

router.use(requireAuth);
const SUBADMIN_EMAIL = "subadmincloud@gmail.com";
const allowedSubadminSection = "services";

const isSubadmin = (user) =>
  user?.role === "subadmin" || String(user?.email || "").toLowerCase() === SUBADMIN_EMAIL;

const isSuperAdmin = (user) =>
  user?.role === "superadmin" || String(user?.email || "").toLowerCase() === "admin@cloudrule.com";

const denyIfSubadmin = (req, res) => {
  if (isSubadmin(req.user)) {
    res.status(403).json({ message: "Subadmin access is limited to services content only" });
    return true;
  }
  return false;
};

router.get("/content", async (_req, res) => {
  try {
    const sections = await getAllSections();
    const response = {};
    for (const section of sections) {
      response[section.sectionKey] = section.data;
    }
    const merged = { ...defaultContent, ...response };
    if (isSubadmin(_req.user)) {
      return res.json({ content: { [allowedSubadminSection]: merged[allowedSubadminSection] } });
    }
    return res.json({ content: merged });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/content/:sectionKey", async (req, res) => {
  try {
    const { sectionKey } = req.params;
    if (isSubadmin(req.user) && sectionKey !== allowedSubadminSection) {
      return res.status(403).json({ message: "Subadmin can access only services content" });
    }
    const section = await getSection(sectionKey);
    return res.json({
      sectionKey,
      data: section?.data || defaultContent[sectionKey] || null,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.put("/content/:sectionKey", async (req, res) => {
  try {
    const { sectionKey } = req.params;
    if (isSubadmin(req.user) && sectionKey !== allowedSubadminSection) {
      return res.status(403).json({ message: "Subadmin can update only services content" });
    }
    const data = req.body?.data;

    if (!data || typeof data !== "object") {
      return res.status(400).json({ message: "Request must include object field: data" });
    }

    await upsertSection(sectionKey, data, req.user.id);
    return res.json({ message: "Content updated", sectionKey });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/contacts", async (_req, res) => {
  if (denyIfSubadmin(_req, res)) return;
  try {
    const [rows] = await pool.query(
      `SELECT id, name, email, role, message, created_at AS createdAt
       FROM contact_messages
       ORDER BY created_at DESC
       LIMIT 200`,
    );
    return res.json({ contacts: rows });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/testimonials", async (_req, res) => {
  if (denyIfSubadmin(_req, res)) return;
  try {
    const [rows] = await pool.query(
      `SELECT id,
              client_name AS clientName,
              client_role AS clientRole,
              message,
              rating,
              is_active AS isActive,
              updated_at AS updatedAt
       FROM testimonials
       ORDER BY updated_at DESC`,
    );
    return res.json({ testimonials: rows });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post("/testimonials", async (req, res) => {
  if (denyIfSubadmin(req, res)) return;
  try {
    const { clientName, clientRole, message, rating, isActive } = req.body || {};
    if (!clientName || !message) {
      return res.status(400).json({ message: "clientName and message are required" });
    }

    await pool.query(
      `INSERT INTO testimonials (client_name, client_role, message, rating, is_active)
       VALUES (?, ?, ?, ?, ?)`,
      [clientName, clientRole || null, message, rating || 5, isActive ?? true],
    );
    return res.status(201).json({ message: "Testimonial added" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.put("/testimonials/:id", async (req, res) => {
  if (denyIfSubadmin(req, res)) return;
  try {
    const { id } = req.params;
    const { clientName, clientRole, message, rating, isActive } = req.body || {};
    await pool.query(
      `UPDATE testimonials
       SET client_name = ?, client_role = ?, message = ?, rating = ?, is_active = ?
       WHERE id = ?`,
      [clientName, clientRole || null, message, rating || 5, isActive ?? true, id],
    );
    return res.json({ message: "Testimonial updated" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.delete("/testimonials/:id", async (req, res) => {
  if (denyIfSubadmin(req, res)) return;
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM testimonials WHERE id = ?", [id]);
    return res.json({ message: "Testimonial deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/seo/:pageKey", async (req, res) => {
  if (denyIfSubadmin(req, res)) return;
  try {
    const { pageKey } = req.params;
    const [rows] = await pool.query(
      "SELECT page_key AS pageKey, title, description, keywords FROM seo_settings WHERE page_key = ?",
      [pageKey],
    );
    return res.json({ seo: rows[0] || null });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.put("/seo/:pageKey", async (req, res) => {
  if (denyIfSubadmin(req, res)) return;
  try {
    const { pageKey } = req.params;
    const { title, description, keywords } = req.body || {};
    if (!title) {
      return res.status(400).json({ message: "title is required" });
    }
    await pool.query(
      `INSERT INTO seo_settings (page_key, title, description, keywords)
       VALUES (?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         title = VALUES(title),
         description = VALUES(description),
         keywords = VALUES(keywords)`,
      [pageKey, title, description || null, keywords || null],
    );
    return res.json({ message: "SEO settings saved" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/analytics/summary", async (_req, res) => {
  if (denyIfSubadmin(_req, res)) return;
  try {
    const [[totalViews]] = await pool.query(
      "SELECT COUNT(*) AS totalViews FROM page_view_events",
    );
    const [[todayViews]] = await pool.query(
      "SELECT COUNT(*) AS todayViews FROM page_view_events WHERE DATE(viewed_at) = CURDATE()",
    );
    const [topPages] = await pool.query(
      `SELECT path, COUNT(*) AS views
       FROM page_view_events
       GROUP BY path
       ORDER BY views DESC
       LIMIT 10`,
    );
    return res.json({
      summary: {
        totalViews: totalViews.totalViews,
        todayViews: todayViews.todayViews,
        topPages,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/enquiries", async (req, res) => {
  if (denyIfSubadmin(req, res)) return;
  try {
    const [rows] = await pool.query(
      `SELECT id, name, email, role, NULL AS service, message, created_at AS createdAt
       FROM contact_messages
       ORDER BY created_at DESC
       LIMIT 300`,
    );
    return res.json({ enquiries: rows });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/admins", async (req, res) => {
  if (!isSuperAdmin(req.user)) {
    return res.status(403).json({ message: "Only superadmin can access admin management" });
  }
  try {
    const [rows] = await pool.query(
      `SELECT id, name, email, role, created_at AS createdAt
       FROM admins
       ORDER BY created_at ASC`,
    );
    return res.json({ admins: rows });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post("/admins/subadmin", async (req, res) => {
  if (!isSuperAdmin(req.user)) {
    return res.status(403).json({ message: "Only superadmin can manage subadmin account" });
  }
  try {
    const { name, password } = req.body || {};
    if (!name || !password) {
      return res.status(400).json({ message: "name and password are required" });
    }
    const passwordHash = await bcrypt.hash(password, 12);

    await pool.query(
      `INSERT INTO admins (name, email, role, password_hash)
       VALUES (?, ?, 'subadmin', ?)
       ON DUPLICATE KEY UPDATE
         name = VALUES(name),
         role = 'subadmin',
         password_hash = VALUES(password_hash)`,
      [name, SUBADMIN_EMAIL, passwordHash],
    );

    return res.json({ message: "Subadmin account saved" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
