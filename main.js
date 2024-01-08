const { app, BrowserWindow, ipcMain} = require('electron')
const os = require("os");
const {environment} = require("./environments/environment");
const logger = require('./scripts/logger');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  ipcMain.on('close_app', () => app.quit());
  ipcMain.on('log', (event, message, logLevel) => logger.rendererProcessLog(message, logLevel))

  if (environment.production) {
    win.loadFile('web/dist/index.html')
  } else {
    const ngDev = require("./scripts/angular-dev");
    ngDev.runNgDev(win);
  }
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})



function initIpc() {

}

