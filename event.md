# app.on
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

# app.methods
 - app.quit()->events Emit
 	- before-quit
 	- if all windows->closed ,will-quit

 -app.exit()
 -app.focus()
 -app.hide()[osx]
 -app.show()[osx]
 -app.getAppPath()
 -app.getPath(name)
 -app.setPath(name,path)
 -app.getVersion()
 -app.getName()
 -app.setNmae(name)
 -app.getLocale()
 -app.addRecentDocument(path)[osx,windows]
 -app.clearRecentDocuments()[osx,windows]
 -app.setAsDefaultProtocolClient[osx,windows]


