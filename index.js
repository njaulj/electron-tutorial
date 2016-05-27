// In the main process.
const {BrowserWindow} = require('electron');

// Or in the renderer process.
const {BrowserWindow} = require('electron').remote;

let win = new BrowserWindow({width: 800, height: 600, show: false});
win.on('closed', () => {
  win = null;
});

win.loadURL('https://github.com');
win.show();