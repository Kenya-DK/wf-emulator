import express from "express";

import { getItemListsController } from "@/src/controllers/custom/getItemListsController";
import { pushArchonCrystalUpgradeController } from "@/src/controllers/custom/pushArchonCrystalUpgradeController";
import { popArchonCrystalUpgradeController } from "@/src/controllers/custom/popArchonCrystalUpgradeController";

import { initializeController } from "@/src/controllers/custom/initializeController";
import { getCacheController } from "@/src/controllers/custom/getCacheController";
import { createAccountController } from "@/src/controllers/custom/createAccountController";
import { updateConfigController } from "@/src/controllers/custom/updateConfigController";
import { addItemController } from "@/src/controllers/custom/addItemController";

import { getConfigDataController } from "@/src/controllers/custom/getConfigDataController";
import { updateConfigDataController } from "@/src/controllers/custom/updateConfigDataController";

const customRouter = express.Router();

customRouter.get("/getItemLists", getItemListsController);
customRouter.get("/pushArchonCrystalUpgrade", pushArchonCrystalUpgradeController);
customRouter.get("/popArchonCrystalUpgrade", popArchonCrystalUpgradeController);
customRouter.get("/initialize", initializeController);
customRouter.get("/cache", getCacheController);

customRouter.post("/createAccount", createAccountController);
customRouter.put("/updateConfig", updateConfigController);
customRouter.post("/addItem", addItemController);

customRouter.get("/config", getConfigDataController);
customRouter.post("/config", updateConfigDataController);

export { customRouter };
