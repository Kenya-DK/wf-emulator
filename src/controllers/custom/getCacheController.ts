import { RequestHandler } from "express";
import { getEnglishString } from "@/src/services/itemDataService";
import {
    ExportArcanes,
    ExportGear,
    ExportResources,
    ExportUpgrades,
    ExportWarframes,
    ExportWeapons
} from "warframe-public-export-plus";

interface ListedItem {
    uniqueName: string;
    name: string;
    maxRank?: number;
}

const getCacheController: RequestHandler = (_req, res) => {
    let weapons: ListedItem[] = [];
    let items: ListedItem[] = [];
    const mods: ListedItem[] = [];
    for (const [uniqueName, item] of Object.entries(ExportWeapons)) {
        if (item.productCategory !== "OperatorAmps") {
            if (item.totalDamage !== 0) {
                weapons.push({
                    uniqueName,
                    name: getEnglishString(item.name)
                });
            } else if (!item.excludeFromCodex) {
                items.push({
                    uniqueName: "MiscItems:" + uniqueName,
                    name: getEnglishString(item.name)
                });
            }
        }
    }

    for (const [uniqueName, item] of Object.entries(ExportResources)) {
        items.push({
            uniqueName: "MiscItems:" + uniqueName,
            name: getEnglishString(item.name)
        });
    }

    for (const [uniqueName, item] of Object.entries(ExportGear)) {
        items.push({
            uniqueName: "Consumables:" + uniqueName,
            name: getEnglishString(item.name)
        });
    }

    const badItems: Record<string, boolean> = {};
    for (const [uniqueName, upgrade] of Object.entries(ExportUpgrades)) {
        mods.push({
            uniqueName,
            name: getEnglishString(upgrade.name),
            maxRank: upgrade.fusionLimit
        });
        if (upgrade.isStarter || upgrade.isFrivolous || upgrade.upgradeEntries) {
            badItems[uniqueName] = true;
        }
    }
    for (const [uniqueName, arcane] of Object.entries(ExportArcanes)) {
        mods.push({
            uniqueName,
            name: getEnglishString(arcane.name)
        });
    }
    let frames: ListedItem[] = Object.entries(ExportWarframes).filter(([_uniqueName, warframe]) => warframe.productCategory == "Suits")
        .map(([uniqueName, warframe]) => {
            return {
                uniqueName,
                name: getEnglishString(warframe.name)
            };
        });
    res.json({
        weapons: weapons,
        items: items,
        mods,
        frames,
        badItems
    });
};

export { getCacheController };
