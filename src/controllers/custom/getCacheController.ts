import { RequestHandler } from "express";
import { MinItem, MinWeapon, warframes, items, getEnglishString } from "@/src/services/itemDataService";
import badItems from "@/static/json/exclude-mods.json";
import { ExportArcanes, ExportWeapons } from "warframe-public-export-plus";

interface ListedItem {
    uniqueName: string;
    name: string;
    maxRank?: number;
}

function reduceItems(items: MinItem[]): ListedItem[] {
    return items.map((item: MinItem): ListedItem => {
        return {
            uniqueName: item.uniqueName,
            name: item.name,
            maxRank: (item as any).fusionLimit
        };
    });
}

const getCacheController: RequestHandler = (_req, res) => {
    const mods = reduceItems(items.filter(item => item.category == "Mods"));
    const getRivenMods = items.filter(mod => mod.uniqueName.includes("/Lotus/Upgrades/Mods/Randomized") && mod.category == "Mods") as any[];
    const rivenUpgrades: { [id: string]: any[] } = {};
    for (const mod of getRivenMods) {
        if (!mod.upgradeEntries)
            continue;
        for (const upgrade of mod.upgradeEntries) {
            if (!rivenUpgrades[mod.uniqueName])
                rivenUpgrades[mod.uniqueName] = [];

            const value = upgrade.upgradeValues?.[0];
            if (!value)
                continue;
            delete upgrade.upgradeValues;
            rivenUpgrades[mod.uniqueName].push({
                ...upgrade,
                value: value.value,
                locTag: value.locTag,
            });
        }
    }


    // Available items
    let availableItems: any = [];

    // Get all available arcanes
    for (const [uniqueName, arcane] of Object.entries(ExportArcanes)) {
        availableItems.push({
            uniqueName: uniqueName,
            name: getEnglishString(arcane.name)
        });
    }

    // Get all available mods
    availableItems = availableItems.concat(mods);

    // Get all available warframes
    availableItems = availableItems.concat(reduceItems(warframes));

    // Get all available weapons
    availableItems = availableItems.concat(Object.entries(ExportWeapons)
        .filter(([_uniqueName, weapon]) => weapon.productCategory !== "OperatorAmps" && weapon.totalDamage !== 0)
        .map(([uniqueName, weapon]) => {
            return {
                uniqueName,
                name: getEnglishString(weapon.name)
            };
        }));

    // Get all available misc items
    availableItems = availableItems.concat(reduceItems(
        items.filter(
            item =>
                item.category == "Misc" ||
                item.category == "Resources" ||
                item.category == "Fish" ||
                ((item as any).productCategory == "Pistols" && (item as MinWeapon).totalDamage == 0)
        )
    ));

    res.json({
        riven_tags: rivenUpgrades,
        items: availableItems,
        badItems
    });
};

export { getCacheController };
