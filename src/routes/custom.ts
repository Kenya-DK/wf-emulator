import express from "express";
import { initializeController } from "@/src/controllers/custom/initializeController";
import { getCacheController } from "@/src/controllers/custom/getCacheController";
import { createAccountController } from "@/src/controllers/custom/createAccountController";
import { updateConfigController } from "@/src/controllers/custom/updateConfigController";
import { addItemController } from "@/src/controllers/custom/addItemController";

const customRouter = express.Router();

customRouter.get("/initialize", initializeController);
customRouter.get("/cache", getCacheController);

customRouter.post("/createAccount", createAccountController);
customRouter.put("/updateConfig", updateConfigController);
customRouter.post("/addItem", addItemController);

export { customRouter };
