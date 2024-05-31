import { RequestHandler } from "express";
import { getAccountIdForRequest } from "@/src/services/loginService";
import { Inventory } from "@/src/models/inventoryModels/inventoryModel";
import { config } from "@/src/services/configService";
import { IInventoryDatabase } from "@/src/types/inventoryTypes/inventoryTypes";
import { Account } from "@/src/models/loginModel";

const getUserInfoController: RequestHandler = async (req, res) => {
    let accountId;
    try {
        accountId = await getAccountIdForRequest(req);
    } catch (e) {
        res.status(400).send("Log-in expired");
        return;
    }
    const account = await Account.findById(accountId);
    if (!account) {
        res.status(400).json({ error: "account was undefined" });
        return;
    }
    const inventory = await Inventory.findOne({ accountOwnerId: accountId });

    if (!inventory) {
        res.status(400).json({ error: "inventory was undefined" });
        return;
    }
    const inventoryJSON = inventory.toJSON() as IInventoryDatabase;
    const userInformation = {
        user_name: account.DisplayName,
        regular_credits: config.infiniteResources ? 999999999 : inventoryJSON.RegularCredits,
        trades_remaining: config.infiniteResources ? 999999999 : inventoryJSON.TradesRemaining,
        premium_credits_free: config.infiniteResources ? 999999999 : inventoryJSON.PremiumCreditsFree,
        premium_credits: config.infiniteResources ? 999999999 : inventoryJSON.PremiumCredits,
    }
    res.json(userInformation);
};

export { getUserInfoController as getUsersInfoController };
