import { RequestHandler } from "express";
import { getAccountIdForRequest } from "@/src/services/loginService";
import { Inventory } from "@/src/models/inventoryModels/inventoryModel";
import { config } from "@/src/services/configService";
import { IInventoryDatabase } from "@/src/types/inventoryTypes/inventoryTypes";
import { Account } from "@/src/models/loginModel";

const getUserWeaponsController: RequestHandler = async (_req, res) => {
    res.status(400).json({ error: "not implemented" });
};

export { getUserWeaponsController };
