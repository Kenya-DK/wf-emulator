import express from "express";
import { getUsersInfoController } from "@/src/controllers/custom/getUserInfoController";
import { getItemsController } from "@/src/controllers/custom/getItemsController";
import { createAccountController } from "@/src/controllers/custom/createAccountController";
// import { updateConfigController } from "@/src/controllers/custom/updateConfigController";
import { addItemController } from "@/src/controllers/custom/addItemController";

const customRouter = express.Router();

customRouter.get("/getItems", getItemsController);

customRouter.post("/createAccount", createAccountController);
// customRouter.get("/updateConfig", updateConfigController);
customRouter.get("/getUserInfo", getUsersInfoController);
customRouter.post("/addItem", addItemController);

export { customRouter };
