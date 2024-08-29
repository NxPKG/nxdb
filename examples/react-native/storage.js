/**
 * The storage is defined in a separate file
 * so that it can be swapped out in the CI to test
 * different storages.
 */
import { getRxStorageMemory } from 'nxdb/plugins/storage-memory';
export const STORAGE = getRxStorageMemory();
