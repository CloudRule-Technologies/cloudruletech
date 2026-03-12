import { Router } from "express";
import { pool } from "../config/db.js";
import {
  buildAdminEnquiryEmail,
  buildUserEnquiryConfirmationEmail,
  sendMailSafe,
} from "../services/mailService.js";

const router = Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, role, message } = req.body || {};
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ message: "Name, email, and message are required" });
    }

    await pool.query(
      "INSERT INTO contact_messages (name, email, role, message) VALUES (?, ?, ?, ?)",
      [name, email, role || null, message],
    );

    const adminMailPayload = buildAdminEnquiryEmail({
      name,
      email,
      service: "Reach Us",
      role,
      message,
    });
    const userMailPayload = {
      ...buildUserEnquiryConfirmationEmail({ name, service: "Reach Us" }),
      to: email,
    };

    const [adminMailResult, userMailResult] = await Promise.all([
      sendMailSafe(adminMailPayload),
      sendMailSafe(userMailPayload),
    ]);

    return res.status(201).json({
      message: "Message submitted successfully",
      confirmationMessage: "Thank you. Your message has been received. We will contact you soon.",
      notifications: {
        adminEmailSent: adminMailResult.sent,
        userEmailSent: userMailResult.sent,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post("/enquiry", async (req, res) => {
  try {
    const { name, email, service, message } = req.body || {};
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ message: "Name, email, and message are required" });
    }

    await pool.query(
      "INSERT INTO customer_enquiries (name, email, service, message) VALUES (?, ?, ?, ?)",
      [name, email, service || null, message],
    );

    const adminMailPayload = buildAdminEnquiryEmail({ name, email, service, message });
    const userMailPayload = {
      ...buildUserEnquiryConfirmationEmail({ name, service }),
      to: email,
    };

    const [adminMailResult, userMailResult] = await Promise.all([
      sendMailSafe(adminMailPayload),
      sendMailSafe(userMailPayload),
    ]);

    return res.status(201).json({
      message: "Enquiry submitted successfully",
      confirmationMessage: "Thank you. Your enquiry has been received. We will contact you soon.",
      notifications: {
        adminEmailSent: adminMailResult.sent,
        userEmailSent: userMailResult.sent,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/testimonials", async (_req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT id, client_name AS clientName, client_role AS clientRole, message, rating
       FROM testimonials
       WHERE is_active = TRUE
       ORDER BY updated_at DESC`,
    );
    return res.json({ testimonials: rows });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post("/testimonials", async (req, res) => {
  try {
    const { clientName, clientRole, message, rating } = req.body || {};
    if (!clientName || !message) {
      return res.status(400).json({ message: "clientName and message are required" });
    }

    const parsedRating = Number(rating);
    const safeRating = Number.isFinite(parsedRating)
      ? Math.max(1, Math.min(5, parsedRating))
      : 5;

    await pool.query(
      `INSERT INTO testimonials (client_name, client_role, message, rating, is_active)
       VALUES (?, ?, ?, ?, FALSE)`,
      [clientName, clientRole || null, message, safeRating],
    );

    return res.status(201).json({
      message: "Review submitted. It will appear after admin approval.",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/seo/:pageKey", async (req, res) => {
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

router.post("/analytics/pageview", async (req, res) => {
  try {
    const { path } = req.body || {};
    if (!path) {
      return res.status(400).json({ message: "path is required" });
    }
    await pool.query(
      "INSERT INTO page_view_events (path, user_agent, referrer) VALUES (?, ?, ?)",
      [path, req.headers["user-agent"] || null, req.headers.referer || null],
    );
    return res.status(201).json({ message: "Page view tracked" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
