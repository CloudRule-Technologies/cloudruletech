import nodemailer from "nodemailer";
import { env } from "../config/env.js";

let transporter = null;

const isMailConfigured = Boolean(env.smtpHost && env.smtpUser && env.smtpPass);
const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

function getTransporter() {
  if (!isMailConfigured) {
    return null;
  }
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: env.smtpHost,
      port: env.smtpPort,
      secure: env.smtpSecure,
      auth: {
        user: env.smtpUser,
        pass: env.smtpPass,
      },
    });
  }
  return transporter;
}

export async function sendMailSafe(payload) {
  try {
    const client = getTransporter();
    if (!client) {
      return { sent: false, reason: "mail_not_configured" };
    }
    await client.sendMail({
      from: env.mailFrom,
      ...payload,
    });
    return { sent: true };
  } catch (error) {
    console.error("[mail] Failed to send email:", error.message);
    return { sent: false, reason: "send_failed" };
  }
}

export function buildAdminEnquiryEmail({ name, email, service, message, role }) {
  const serviceText = service || "General enquiry";
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(serviceText);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>");
  const safeRole = role ? escapeHtml(role) : "";
  const roleLine = role ? `Role: ${role}\n` : "";
  const roleHtml = role ? `<p><strong>Role:</strong> ${safeRole}</p>` : "";
  return {
    to: env.adminNotificationEmail,
    subject: `New Enquiry Received: ${serviceText}`,
    text:
      `A new customer enquiry was submitted.\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Service: ${serviceText}\n` +
      roleLine +
      `Message:\n${message}\n`,
    html:
      `<h2>New Customer Enquiry</h2>` +
      `<p><strong>Name:</strong> ${safeName}</p>` +
      `<p><strong>Email:</strong> ${safeEmail}</p>` +
      `<p><strong>Service:</strong> ${safeService}</p>` +
      roleHtml +
      `<p><strong>Message:</strong><br/>${safeMessage}</p>`,
  };
}

export function buildUserEnquiryConfirmationEmail({ name, service }) {
  const serviceText = service || "your requested service";
  const safeName = escapeHtml(name);
  const safeService = escapeHtml(serviceText);
  return {
    to: undefined,
    subject: "Thank you for contacting CloudRule",
    text:
      `Hi ${name},\n\n` +
      `Thank you for your enquiry about ${serviceText}. ` +
      `Our team has received your request and will contact you soon.\n\n` +
      `Regards,\nCloudRule Team`,
    html:
      `<p>Hi ${safeName},</p>` +
      `<p>Thank you for your enquiry about <strong>${safeService}</strong>. ` +
      `Our team has received your request and will contact you soon.</p>` +
      `<p>Regards,<br/>CloudRule Team</p>`,
  };
}
