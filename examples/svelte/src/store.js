import { writable } from 'svelte/store';
import { createRxDatabase, addRxPlugin } from 'nxdb';
import { getRxStorageDexie } from 'nxdb/plugins/storage-dexie';

import { NxDBQueryBuilderPlugin } from 'nxdb/plugins/query-builder';
import { wrappedValidateAjvStorage } from 'nxdb/plugins/validate-ajv';
import noteSchema from './schema';

/**
 * NxDB ========================================================================
 */

addRxPlugin(NxDBQueryBuilderPlugin);

let dbPromise;

const _create = async () => {
  const db = await createRxDatabase({
    name: 'nxdbdemo',
    storage: wrappedValidateAjvStorage({
      storage: getRxStorageDexie(),
    }),
    ignoreDuplicate: true
  });
  await db.addCollections({ notes: { schema: noteSchema } });
  dbPromise = db;
  return db;
};

export const db = () => dbPromise ? dbPromise : _create();

/**
 * Svelte Writables ============================================================
 */

export const noteList = writable([]);
export const selectedNote = writable({});
export const name = writable('');
export const body = writable('');
