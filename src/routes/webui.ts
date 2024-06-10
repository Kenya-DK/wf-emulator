import express from "express";
import path from "path";

const webuiRouter = express.Router();
const rootDir = path.join(__dirname, "../..");
const repoDir = path.basename(rootDir) == "build" ? path.join(rootDir, "..") : rootDir;

// Redirect / to /webui/
webuiRouter.get("/", (_req, res) => {
    res.redirect("/webui/");
});

// Redirect /webui to /webui/
webuiRouter.use("/webui", (req, res, next) => {
    if (req.originalUrl === "/") {
        return res.redirect("/webui/");
    }
    next();
});

// Serve static files
webuiRouter.use((req, res, next) => {
    // If the request starts with /api, we don't want to serve index.html
    // because it's an API request. We want to serve the API response.
    if (!req.path.startsWith("/webui") ||
        /(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
        next();
    } else {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        res.sendFile(path.join(rootDir, 'static/webreactui/dist', 'index.html'));
    }
});
webuiRouter.use(express.static(path.join(rootDir, 'static/webreactui/dist')));
// webuiRouter.use("/webui", express.static(path.join(rootDir, "static/webui")));

// Serve warframe-riven-info
webuiRouter.get("/webui/riven-tool/", (_req, res) => {
    res.sendFile(path.join(repoDir, "node_modules/warframe-riven-info/index.html"));
});
webuiRouter.get("/webui/riven-tool/RivenParser.js", (_req, res) => {
    res.sendFile(path.join(repoDir, "node_modules/warframe-riven-info/RivenParser.js"));
});

export { webuiRouter };
