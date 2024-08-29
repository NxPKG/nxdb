import {
    addRxPlugin,
    createRevision,
    createRxDatabase,
    parseRevision,
    RxStorage
} from 'nxdb';

import {
    getRxStorageDexie
} from 'nxdb/plugins/storage-dexie';
import {
    getRxStorageMemory
} from 'nxdb/plugins/storage-memory';
import { wrappedValidateAjvStorage } from 'nxdb/plugins/validate-ajv';
import { heroSchema } from './hero.schema';
import { RxHeroesCollections } from './types';

import {
    NxDBDevModePlugin
} from 'nxdb/plugins/dev-mode';
addRxPlugin(NxDBDevModePlugin); // TODO only add this in dev mode

import { NxDBLeaderElectionPlugin } from 'nxdb/plugins/leader-election';
import { conflictHandler } from './conflict-handler';
addRxPlugin(NxDBLeaderElectionPlugin);

export async function createDatabase() {
    const database = await createRxDatabase<RxHeroesCollections>({
        name: getDatabaseName(),
        storage: wrappedValidateAjvStorage({
            storage: getStorage()
        }),
        multiInstance: true
    });
    await database.addCollections({
        heroes: {
            schema: heroSchema,
            conflictHandler: conflictHandler
        }
    });

    /**
     * To make it possible to detect and resolve conflicts,
     * we use a custom field 'replicationRevision' that
     * works similar to the nxdb revision and will be automatically updated on each write.
     * @link https://nxpkg.github.io/transactions-conflicts-revisions.html
     */
    database.heroes.preInsert((docData) => {
        docData.replicationRevision = createRevision(
            database.token,
            docData as any
        );
        return docData;
    }, false);
    database.heroes.preRemove((docData) => {
        console.log(' PRE REMOVE !!');
        console.log(JSON.stringify(docData, null ,4));
        const oldRevHeight = parseRevision(docData.replicationRevision).height;
        docData.replicationRevision = (oldRevHeight + 1) + '-' + database.hashFunction(JSON.stringify(docData));
        console.log(JSON.stringify(docData, null ,4));
        return docData;
    }, false);
    database.heroes.preSave((docData) => {
        const oldRevHeight = parseRevision(docData.replicationRevision).height;
        docData.replicationRevision = (oldRevHeight + 1) + '-' + database.hashFunction(JSON.stringify(docData));
        return docData;
    }, false);

    return database;
}




function getStorageKey(): string {
    const url_string = window.location.href;
    const url = new URL(url_string);
    let storageKey = url.searchParams.get('storage');
    if (!storageKey) {
        storageKey = 'dexie';
    }
    return storageKey;
}

/**
 * Easy toggle of the storage engine via query parameter.
 */
function getStorage(): RxStorage<any, any> {
    const storageKey = getStorageKey();
    console.log('storageKey: ' + storageKey);

    if (storageKey === 'memory') {
        return getRxStorageMemory();
    } else if (storageKey === 'dexie') {
        return getRxStorageDexie();
    } else {
        throw new Error('storage key not defined ' + storageKey);
    }
}


/**
 * In the e2e-test we get the database-name from the get-parameter
 * In normal mode, the database name is 'heroesdb'
 */
function getDatabaseName() {
    const url_string = window.location.href;
    const url = new URL(url_string);
    const dbNameFromUrl = url.searchParams.get('database');

    let ret = 'supabase-heroesdb';
    if (dbNameFromUrl) {
        console.log('databaseName from url: ' + dbNameFromUrl);
        ret += dbNameFromUrl;
    }
    return ret;
}
