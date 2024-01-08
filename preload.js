const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  log: (message, logLevel) => ipcRenderer.send('log', message, logLevel),
  closeApp: () => ipcRenderer.send('close_app'),
})
