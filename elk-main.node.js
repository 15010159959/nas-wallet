
var path = require("path"),
    url = require("url"),
    electron = require("electron"),
    electronLocalshortcut = require("electron-localshortcut"),
    app = electron.app, // Module to control application life.
    mainWindow, // global ref to prevent gc
    gMode = process.argv.indexOf("--dev") == -1 ? "prod" : "dev",
    gBwOpt = {
        height: 700,
        webPreferences: {
            nodeIntegration: false,
            preload: path.resolve(__dirname, "./elk-preload.js")
        },
        width: 1200
    };

if (gMode == "dev") {
} else {
}

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
    mainWindow = new electron.BrowserWindow(gBwOpt);

    // and load the index.html of the app.
    mainWindow.loadURL("http://localhost:8080");

    if (gMode == "dev") {
        // https://stackoverflow.com/questions/40763427/electron-does-not-listen-keydown-event
        mainWindow.webContents.openDevTools();

        electronLocalshortcut.register(mainWindow, "Ctrl+F12", () => {
            // Open DevTools
            mainWindow.webContents.toggleDevTools();
        });
    }

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
