app
===
	## app.on
	--------------------
	 - will-finish-launching
	 - ready
	 - window-all-closed
	 - before-quit
	 - will quit
	 - quit
	 - open-file[osx]
	 - open-url[osx]
	 - activate[osx]
	 - continue-activity[osx]
	 - browser-window-blur
	 - browser-window-focus
	 - browser-window-created
	 - certificate-error
	 - select-client-certificate
	 - login
	 - gpu-process-crashed

	## app.methods
	-------------------
	 - app.quit()->events Emit
	 	- before-quit
	 	- if all windows->closed ,will-quit
	 - app.exit()
	 - app.focus()
	 - app.hide()[osx]
	 - app.show()[osx]
	 - app.getAppPath()
	 - app.getPath(name)
	 - app.setPath(name,path)
	 - app.getVersion()
	 - app.getName()
	 - app.setNmae(name)
	 - app.getLocale()
	 - app.addRecentDocument(path)[osx,windows]
	 - app.clearRecentDocuments()[osx,windows]
	 - app.setAsDefaultProtocolClient[osx,windows]

autoUpdater
===
	## autoUpdater.on
	 > Enable apps to auto update themselves
	 - error
	 - checking-for-update
	 - update-available
	 - update-not-available
	 - update-downloaded

	## autoUpdater.methods
	 - autoUpdater.setFeedURL(url)
	 - autoUpdater.checkForUpdates()
	 - autoUpdater.quitAndInstall()

BrowserWindow
===
```JavaScript
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
```
	## BrowserWindow.on
		- page-title-updated
		- close
		- closed
		- unresponsive
		- responsive
		- blur
		- focus
		- show
		- hide
		- maximize
		- unmaximize
		- minimize
		- resore
		- resize
		- move
		- moved[osx]
		- enter-full-screen
		- leave-full-screen
		- enter-html-full-screen
		- leave-html-full-screen
		- app-command[windows]
		- scroll-touch-begin[osx]
		- scroll-touch-end[osx]
		- swipe[osx]

	## BrowserWindow.method
		- BrowserWindow.getAllWindows()
		- BrowserWindow.getFocusedWindow()
		- BrowserWindow.fromWebContents(webContents)
		- BrowserWindow.fromId(id)
		- BrowserWindow.addDevToolsExtension(path)
		- BrowserWindow.removeDevToolsExtension(name)

	## Instance Methods
		- win.destroy()
		- win.close()
		- win.focus()
		- win.blur()
		- win.isFocused()
		- win.show()
		- win.showInactive()
		- win.hide()
		- win.isVisible()
		- win.maximize()
		- win.unmaximize()
		- win.isMaximized()
		- win.minimize()
		- win.restore()
		- win.isMinimized()
		- win.setFullScreen(flag)
		- win.isFullScreen()
		- win.setAspectRatio(aspectRatio[,extraSize])
		- win.setBounds(options[,animate])
		- win.getBounds()
		- win.setSize(width,height[,animate])[animate is for osx]
		- win.getSize()



