import { RequestHandler } from "express";
import { config } from "@/src/services/configService";

const initializeController: RequestHandler = async (_req, res) => {

  res.json({
    app_info: {
      name: "Open WF Gui",
      version: "0.1.0",
    },
    config
  });
};

export { initializeController };
