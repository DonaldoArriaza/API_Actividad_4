const { app, BrowserWindow } = require('electron');

let ventana;

function createWindow() {
    ventana = new BrowserWindow({
        width: 900,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    ventana.loadFile('index.html')
}

app.whenReady().then(createWindow);