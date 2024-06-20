import { RequestHandler } from "express";
import { MinItem, MinWeapon, warframes, items, getEnglishString } from "@/src/services/itemDataService";
import badItems from "@/static/json/exclude-mods.json";
import { ExportArcanes, ExportWeapons } from "warframe-public-export-plus";

interface ListedItem {
    uniqueName: string;
    name: string;
    fusionLimit?: number;
}

function reduceItems(items: MinItem[]): ListedItem[] {
    return items.map((item: MinItem): ListedItem => {
        return {
            uniqueName: item.uniqueName,
            name: item.name,
            fusionLimit: (item as any).fusionLimit
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

    for (const [uniqueName, arcane] of Object.entries(ExportArcanes)) {
        mods.push({
            uniqueName: uniqueName,
            name: getEnglishString(arcane.name)
        });
    }
    res.json({
        riven_tags: rivenUpgrades,
        warframes: reduceItems(warframes),
        weapons: Object.entries(ExportWeapons)
            .filter(([_uniqueName, weapon]) => weapon.productCategory !== "OperatorAmps" && weapon.totalDamage !== 0)
            .map(([uniqueName, weapon]) => {
                return {
                    uniqueName,
                    name: getEnglishString(weapon.name)
                };
            }),
        miscitems: reduceItems(
            items.filter(
                item =>
                    item.category == "Misc" ||
                    item.category == "Resources" ||
                    item.category == "Fish" ||
                    ((item as any).productCategory == "Pistols" && (item as MinWeapon).totalDamage == 0)
            )
        ),
        mods,
        badItems
    });
};

export { getCacheController };
