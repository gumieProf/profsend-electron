const { app, BrowserWindow } = require("electron");

function createWindow() {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL("https://profsend.glitch.me/");
}

app.on("ready", createWindow);
