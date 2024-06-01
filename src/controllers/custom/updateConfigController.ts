import { RequestHandler } from "express";
import { updateConfig } from "@/src/services/configService";
const updateConfigController: RequestHandler = async (req, res) => {

  try {
    // Not if it see some validation here
    const newConfig = JSON.parse(req.body);
    updateConfig(newConfig, true);
    res.json(newConfig);
  } catch {
    res.status(400).json({ error: "Invalid config" });
  }
};

export { updateConfigController };
