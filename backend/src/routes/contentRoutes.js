import { Router } from "express";
import { defaultContent } from "../content/defaultContent.js";
import { getAllSections, getSection } from "../services/contentService.js";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const sections = await getAllSections();
    const response = {};
    for (const section of sections) {
      response[section.sectionKey] = section.data;
    }

    return res.json({ content: { ...defaultContent, ...response } });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/:sectionKey", async (req, res) => {
  try {
    const { sectionKey } = req.params;
    const section = await getSection(sectionKey);
    if (!section) {
      return res.json({ sectionKey, data: defaultContent[sectionKey] || null });
    }

    return res.json(section);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
