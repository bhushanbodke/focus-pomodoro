// Preload script — keep minimal; the app is fully self-contained in index.html.
const { contextBridge } = require("electron");
contextBridge.exposeInMainWorld("focusly", { platform: process.platform });
