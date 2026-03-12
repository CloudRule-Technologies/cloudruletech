import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import {
  ensureDatabaseReady,
  ensureLockedAdminAccount,
  testDbConnection,
} from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import contentRoutes from "./routes/contentRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import publicRoutes from "./routes/publicRoutes.js";
import { ensureDefaultContent } from "./services/contentService.js";

const app = express();

app.use(
  cors({
    origin: env.corsOrigin,
    credentials: true,
  }),
);
app.use(express.json({ limit: "1mb" }));

app.get("/", (_req, res) => {
  res.status(200).json({
    message: "CloudRule backend is running",
    health: "/api/health",
    frontend: "http://localhost:5173",
  });
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "cloudruletech-backend" });
});

app.use("/api/auth", authRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/public", publicRoutes);
app.use("/api/admin", adminRoutes);

function listenOnPort(port) {
  return new Promise((resolve, reject) => {
    const server = app.listen(port);

    const onError = (error) => {
      reject(error);
    };

    const onListening = () => {
      server.removeListener("error", onError);
      resolve({ server, port });
    };

    server.once("error", onError);
    server.once("listening", onListening);
  });
}

async function isCloudRuleBackendRunning(port) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1200);
    const response = await fetch(`http://localhost:${port}/api/health`, {
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!response.ok) return false;
    const data = await response.json();
    return data?.service === "cloudruletech-backend";
  } catch {
    return false;
  }
}

async function start() {
  try {
    await ensureDatabaseReady();
    await ensureLockedAdminAccount();
    await testDbConnection();
    await ensureDefaultContent();

    try {
      await listenOnPort(env.port);
      console.log(`Backend running on http://localhost:${env.port}`);
      return;
    } catch (error) {
      if (error.code !== "EADDRINUSE") {
        throw error;
      }
    }

    const alreadyRunning = await isCloudRuleBackendRunning(env.port);
    if (alreadyRunning) {
      console.log(`Backend already running on http://localhost:${env.port}`);
      return;
    }

    const maxPortOffset = 20;
    for (let offset = 1; offset <= maxPortOffset; offset += 1) {
      const nextPort = env.port + offset;
      try {
        await listenOnPort(nextPort);
        console.log(
          `Port ${env.port} is in use. Backend running on http://localhost:${nextPort}`,
        );
        return;
      } catch (error) {
        if (error.code !== "EADDRINUSE") {
          throw error;
        }
      }
    }

    throw new Error(
      `Could not start backend. Ports ${env.port}-${env.port + maxPortOffset} are unavailable.`,
    );
  } catch (error) {
    console.error("Failed to start backend:", error.message);
    process.exit(1);
  }
}

start();
