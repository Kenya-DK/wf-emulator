import { RequestHandler } from "express";
import { updateConfig } from "@/src/services/configService";
import { config } from "@/src/services/configService";
const updateConfigController: RequestHandler = async (req, res) => {

  const newConfig = JSON.parse(req.body);
  updateConfig(newConfig);

  res.json({
    app_info: {
      name: "Open WF Gui",
      version: "0.1.0",
    }, config
  });
};

export { updateConfigController };
