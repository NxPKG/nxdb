---
title: Electron Plugin
slug: electron.html
---



# Electron Plugin


## RxStorage Electron IpcRenderer & IpcMain


To use NxDB in [electron](./electron-database.md), it is recommended to run the RxStorage in the main process and the RxDatabase in the renderer processes. With the nxdb electron plugin you can create a remote RxStorage and consume it from the renderer process.

To do this in a convenient way, the NxDB electron plugin provides the helper functions `exposeIpcMainRxStorage` and `getRxStorageIpcRenderer`.
Similar to the [Worker RxStorage](./rx-storage-worker.md), these wrap any other [RxStorage](./rx-storage.md) once in the main process and once in each renderer process. In the renderer you can then use the storage to create a [RxDatabase](./rx-database.md) which communicates with the storage of the main process to store and query data.

:::note
`nodeIntegration` must be enabled in [Electron](https://www.electronjs.org/docs/latest/api/browser-window#new-browserwindowoptions).
:::

```ts
//  main.js
const { exposeIpcMainRxStorage } = require('nxdb/plugins/electron');
const { getRxStorageMemory } = require('nxdb/plugins/storage-memory');
app.on('ready', async function () {
    exposeIpcMainRxStorage({
        key: 'main-storage',
        storage: getRxStorageMemory(),
        ipcMain: electron.ipcMain
    });
});
```


```ts
//  renderer.js
const { getRxStorageIpcRenderer } = require('nxdb/plugins/electron');
const { getRxStorageMemory } = require('nxdb/plugins/storage-memory');

const db = await createRxDatabase({
    name,
    storage: getRxStorageIpcRenderer({
        key: 'main-storage',
        ipcRenderer: electron.ipcRenderer
    })
});
/* ... */
```


## Related

- [Comparison of Electron Databases](./electron-database.md)
