import { RequestHandler } from "express";
import worldState from "@/static/fixed_responses/worldState.json";
import buildConfig from "@/static/data/buildConfig.json";

const worldStateController: RequestHandler = (_req, res) => {
    res.json({
        ...worldState,
        BuildLabel: buildConfig.buildLabel,
        // Add 1 hour to the current time to simulate the time passing
        Time: Math.round(Date.now() / 1000) + 3600,
    });
};

export { worldStateController };
