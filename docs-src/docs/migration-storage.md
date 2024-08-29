---
title: Migration Storage
slug: migration-storage.html
---

# Storage Migration

The storage migration plugin can be used to migrate all data from one existing RxStorage into another. This is useful when:

- You want to migration from one [RxStorage](./rx-storage.md) to another one.
- You want to migrate to a new major NxDB version while keeping the previous saved data. This function only works from the previous major version upwards. Do not use it to migrate like nxdb v9 to v14.

<!-- TODO this was inherited from PouchDB, we should remove this in the future and also migrate deleted documents. -->
The storage migration **drops deleted documents** and filters them out during the migration.


## Usage

Lets say you want to migrate from LokiJs to the [Dexie.js](./rx-storage-dexie.md) RxStorage.

```ts
import { migrateStorage } from 'nxdb/plugins/migration-storage';
import {
    getRxStorageLoki
} from 'nxdb/plugins/storage-loki';
import { getRxStorageDexie } from 'nxdb/plugins/storage-dexie';

// create the new RxDatabase
const db = await createRxDatabase({
    name: dbLocation,
    storage: getRxStorageDexie(),
    multiInstance: false
});

await migrateStorage({
    database: db as any,
    /**
     * Name of the old database,
     * using the storage migration requires that the
     * new database has a different name.
     */
    oldDatabaseName: 'myOldDatabaseName',
    oldStorage: getRxStorageLoki(), // RxStorage of the old database
    batchSize: 500, // batch size
    parallel: false, // <- true if it should migrate all collections in parallel. False (default) if should migrate in serial
    afterMigrateBatch: (input: AfterMigrateBatchHandlerInput) => {
        console.log('storage migration: batch processed');
    }
});
```


## Migrate from a previous NxDB major version

To migrate from a previous NxDB major version, you have to install the 'old' NxDB in the `package.json`

```json
{
    "dependencies": {
        "nxdb-old": "npm:nxdb@14.17.1",
    }
}
```

The you can run the migration by providing the old storage:

```ts
/* ... */
import { migrateStorage } from 'nxdb/plugins/migration-storage';
import {
    getRxStorageLoki
} from 'nxdb-old/plugins/storage-loki'; // <- import from the old NxDB version

await migrateStorage({
    database: db as any,
    /**
     * Name of the old database,
     * using the storage migration requires that the
     * new database has a different name.
     */
    oldDatabaseName: 'myOldDatabaseName',
    oldStorage: getRxStorageLoki(), // RxStorage of the old database
    batchSize: 500, // batch size
    parallel: false,
    afterMigrateBatch: (input: AfterMigrateBatchHandlerInput) => {
        console.log('storage migration: batch processed');
    }
});
/* ... */
```

## Disable Version Check on [NxDB Premium 👑](/premium)

RxDb Premium has a check in place that ensures that you do not accidentally use the wrong NxDB core and 👑 Premium version together which could break your database state. 
This can be a problem during migrations where you have multiple versions of NxDB in use and it will throw the error `Version mismatch detected`.
You can disable that check by importing and running the `disableVersionCheck()` function from NxDB Premium.

```ts
// NxDB Premium v15 or newer:
import {
    disableVersionCheck
} from 'nxdb-premium-old/plugins/shared';
disableVersionCheck();


// NxDB Premium v14:

// for esm
import {
    disableVersionCheck
} from 'nxdb-premium-old/dist/es/shared/version-check.js';
disableVersionCheck();

// for cjs
import {
    disableVersionCheck
} from 'nxdb-premium-old/dist/lib/shared/version-check.js';
disableVersionCheck();




``````
