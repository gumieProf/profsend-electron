const builder = require('electron-builder');

builder.build({
    config: {
        "appId": "net.gumieprof.profsend",
        "files": [
          "index.js"
        ],
        "mac": {
          "target": "dmg",
          "icon": "icon.icns"
        },
        "win": {
          "target": "nsis",
          "icon": "icon.ico"
        },
        "nsis": {
          "oneClick": false,
          "allowToChangeInstallationDirectory": true
        }
        }
});
