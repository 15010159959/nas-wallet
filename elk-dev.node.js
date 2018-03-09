
var electron = require("electron"),
    path = require("path"),
    url = require("url"),
    app = electron.app, // Module to control application life.
    BrowserWindow = electron.BrowserWindow, // Module to create native browser window.
    mainWindow;

app.on("activate", onActivate);
app.on("ready", createWindow);
app.on("window-all-closed", onWindowAllClosed);

function onActivate() {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null)
        createWindow();
}

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        height: 600,
        webPreferences: { nodeIntegration: false },
        width: 800
    });

    // and load the index.html of the app.
    mainWindow.loadURL("http://localhost:8080");

    // https://stackoverflow.com/questions/40763427/electron-does-not-listen-keydown-event
    const electronLocalshortcut = require("electron-localshortcut");
    electronLocalshortcut.register(mainWindow, "Ctrl+F12", () => {
        // Open DevTools
        mainWindow.webContents.toggleDevTools();
    });

    // Emitted when the window is closed.
    mainWindow.on("closed", onClosed);

    function onClosed() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    }
}

function onWindowAllClosed() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin")
        app.quit();
}
