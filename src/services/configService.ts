import rawConfig from "@/config.json";

interface IConfig {
    mongodbUrl: string;
    logger: ILoggerConfig;
    myAddress: string;
    httpPort?: number;
    httpsPort?: number;
    autoCreateAccount?: boolean;
    skipStoryModeChoice?: boolean;
    skipTutorial?: boolean;
    unlockAllScans?: boolean;
    unlockAllMissions?: boolean;
    unlockAllQuests?: boolean;
    infiniteResources?: boolean;
    unlockallShipFeatures?: boolean;
    unlockAllShipDecorations?: boolean;
    unlockAllFlavourItems?: boolean;
    unlockAllSkins?: boolean;
    spoofMasteryRank?: number;
}

interface ILoggerConfig {
    files: boolean;
    level: string; // "fatal" | "error" | "warn" | "info" | "http" | "debug" | "trace";
}

export const config: IConfig = rawConfig;


export const updateConfig = (newConfig: IConfig) => {
    Object.assign(config, newConfig);
    const fs = require("fs");
    fs.writeFileSync("config.json", JSON.stringify(config, null, 2));
}