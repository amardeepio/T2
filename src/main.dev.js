const { app, ipcMain, Menu, BrowserWindow, protocol } = require('electron');
const os = require('os');

const { helpUrl } = require('./config.json');

const openCustomProtocol = (url, appWindow) => {
    const currentURL = appWindow.webContents.getURL().match(/#(\/\w+\/?\w+)/);

    if (!currentURL) {
        return;
    }

    if (currentURL[1] === '/login') {
        appWindow.webContents.send('login', 'Please open a wallet to continue', url); // TODO: localization
        return;
    }

    if (currentURL[1] === '/home/main') {
        appWindow.webContents.send('wallet', url);
    }
};

ipcMain.on('os-platform', (event) => {
    event.returnValue = os.platform();
});

ipcMain.on('wallet', (event, data) => {
    event.sender.send('wallet', data);
});

let mainWindow = null;

if (process.env.NODE_ENV === 'production') {
    const sourceMapSupport = require('source-map-support');
    sourceMapSupport.install();
}

const isMac = process.platform === 'darwin';
const isDevelopment = process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDevelopment) {
    require('electron-debug')();
}

const installExtensions = async () => {
    const installer = require('electron-devtools-installer');
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

    return Promise.all(extensions.map((name) => installer.default(installer[name], forceDownload))).catch();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
    // Respect the OSX convention of having the application in memory even
    // after all windows have been closed
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('open-url', (event, url) => {
    // Protocol handler for osx
    event.preventDefault();
    openCustomProtocol(url, mainWindow);
});

app.setAsDefaultProtocolClient('galleon');
app.setAsDefaultProtocolClient('tezori');
app.setAsDefaultProtocolClient('tezos');

app.on('ready', async () => {
    if (isDevelopment) {
        await installExtensions();
    }

    let menuTemplate = [];
    if (isMac) {
        menuTemplate.push({
            label: app.name,
            submenu: [
                { role: 'about' },
                { type: 'separator' },
                { role: 'services' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'hideothers' },
                { role: 'unhide' },
                { type: 'separator' },
                { role: 'quit' },
            ],
        });
    }

    menuTemplate.push({ label: '&File', submenu: [isMac ? { role: 'close' } : { role: 'quit' }] });

    menuTemplate.push({
        label: '&Edit',
        submenu: [{ role: 'undo' }, { role: 'redo' }, { type: 'separator' }, { role: 'cut' }, { role: 'copy' }, { role: 'paste' }, { role: 'delete' }],
    });

    if (isDevelopment) {
        menuTemplate.push({
            label: '&View',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { role: 'toggleDevTools' },
                { type: 'separator' },
                { role: 'resetZoom' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                { type: 'separator' },
                { role: 'togglefullscreen' },
            ],
        });
    }

    menuTemplate.push({
        label: '&Window',
        submenu: [
            { role: 'minimize' },
            { role: 'zoom' },
            ...(isMac ? [{ type: 'separator' }, { role: 'front' }, { type: 'separator' }, { role: 'window' }] : [{ role: 'close' }]),
        ],
    });

    let helpSubmenu = [];

    if (!isMac) {
        helpSubmenu.push({ role: 'about' });
    }

    menuTemplate.push({
        role: 'help',
        submenu: [
            ...helpSubmenu,
            {
                label: 'Learn More',
                click: async () => {
                    if (!helpUrl.startsWith('https://')) {
                        throw new Error('Invalid URL provided, only https scheme is accepted');
                    }
                    await electron.shell.openExternal(helpUrl);
                },
            },
        ],
    });

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);

    mainWindow = new BrowserWindow({
        height: 768,
        minHeight: 768,
        minWidth: 1024,
        show: false,
        title: 'Tezori',
        webPreferences: { nodeIntegration: true, devTools: isDevelopment },
        width: 1120,
    });

    mainWindow.loadURL(`file://${__dirname}/app.html`);

    // @TODO: Use 'ready-to-show' event
    //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
    mainWindow.webContents.on('did-finish-load', () => {
        if (!mainWindow) {
            throw new Error('"mainWindow" is not defined');
        }

        if (process.env.START_MINIMIZED) {
            mainWindow.minimize();
        } else {
            mainWindow.show();
            mainWindow.focus();
        }
    });

    if (process.platform === 'win32') {
        openCustomProtocol(process.argv.slice(1), mainWindow);
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
