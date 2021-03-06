const { app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const url = require('url')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    maxWidth: 520,
    maxHeight: 680,
    minWidth: 520,
    minHeight: 680,
    webPreferences: {
    devTools:false,
    nodeIntegration:true,
    contextIsolation:true,
    }
  });
  //Parm for full page
    mainWindow.maximize(),
    mainWindow.show();

    mainWindow.setMenuBarVisibility(false);
  

  
  mainWindow.loadFile('src/index.html')
  mainWindow.webContents.on('render-process-gone', function (event, detailed) {
    //  logger.info("!crashed, reason: " + detailed.reason + ", exitCode = " + detailed.exitCode)
    if (detailed.reason == "crashed"){
        // relaunch app
        app.relaunch({ args: process.argv.slice(1).concat(['--relaunch']) })
        app.exit(0)
    }
  })



  // Open the DevTools.
  // //mainWindow.webContents.openDevTools(); 
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.