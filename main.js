const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 600,
        minWidth: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })

    const urlLocation = isDev ? 'http://localhost:8000' : 'myUrl'
    console.log(isDev)
    mainWindow.loadURL(urlLocation)
})