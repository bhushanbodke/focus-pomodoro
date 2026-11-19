const { app, BrowserWindow, Menu, shell } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1180,
    height: 820,
    minWidth: 900,
    minHeight: 640,
    title: "Focusly — Pomodoro",
    icon: path.join(__dirname, "icon.png"),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js")
    },
    backgroundColor: "#0d0f14"
  });

  mainWindow.loadFile(path.join(__dirname, "index.html"));

  // external links open in the OS browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/.test(url)) shell.openExternal(url);
    return { action: "deny" };
  });

  mainWindow.on("closed", () => { mainWindow = null; });
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});

app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });

// Minimal application menu
const template = [
  {
    label: "File",
    submenu: [
      { label: "Reload", accelerator: "CmdOrCtrl+R", click: () => mainWindow && mainWindow.reload() },
      { type: "separator" },
      { label: "Quit", accelerator: "CmdOrCtrl+Q", click: () => app.quit() }
    ]
  },
  {
    label: "View",
    submenu: [
      { role: "togglefullscreen" },
      { role: "toggleDevTools" }
    ]
  }
];
Menu.setApplicationMenu(Menu.buildFromTemplate(template));
