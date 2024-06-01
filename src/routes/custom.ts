import express from "express";
import { initializeController } from "@/src/controllers/custom/initializeController";
import { getUserInfoController } from "@/src/controllers/custom/getUserInfoController";
import { getItemsController } from "@/src/controllers/custom/getItemsController";
import { getUserModsController } from "@/src/controllers/custom/getUserModsController";
import { getUserItemsController } from "@/src/controllers/custom/getUserItemsController";
import { getUserWeaponsController } from "@/src/controllers/custom/getUserWeaponsController";
import { createAccountController } from "@/src/controllers/custom/createAccountController";
import { updateConfigController } from "@/src/controllers/custom/updateConfigController";
import { addItemController } from "@/src/controllers/custom/addItemController";

const customRouter = express.Router();

customRouter.get("/initialize", initializeController);
customRouter.get("/getItems", getItemsController);

customRouter.get("/getUserMods", getUserModsController);
customRouter.get("/getUserItems", getUserItemsController);
customRouter.get("/getUserWeapons", getUserWeaponsController);

customRouter.post("/createAccount", createAccountController);
customRouter.put("/updateConfig", updateConfigController);
customRouter.get("/getUserInfo", getUserInfoController);
customRouter.post("/addItem", addItemController);

export { customRouter };
