import { createRxDatabase, addRxPlugin } from 'nxdb';
import { getRxStorageDexie } from 'nxdb/plugins/storage-dexie';
import { wrappedKeyCompressionStorage } from 'nxdb/plugins/key-compression';
import { NxDBQueryBuilderPlugin } from 'nxdb/plugins/query-builder';
import { wrappedKeyEncryptionCryptoJsStorage } from 'nxdb/plugins/encryption-crypto-js';
import { HeroSchema, MyDatabaseCollections } from './schema';

addRxPlugin(NxDBQueryBuilderPlugin);

const _create = async () => {
  const database = await createRxDatabase<MyDatabaseCollections>({
    name: 'nxdbdemo',
    storage: wrappedKeyEncryptionCryptoJsStorage({
      storage: wrappedKeyCompressionStorage({
        storage: getRxStorageDexie(),
      }),
    }),
    password: 'foooooobaaaaar',
    multiInstance: true,
    ignoreDuplicate: true,
  });
  await database.addCollections({ heroes: { schema: HeroSchema } });
  return database;
};

export const db = () => _create();
