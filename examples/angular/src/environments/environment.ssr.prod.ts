import { EnvironmentParams } from './environment.d';
import {
    getRxStorageMemory
} from 'nxdb/plugins/storage-memory';
import {
    SYNC_PORT,
    DATABASE_NAME
} from '../shared';

export const environment: EnvironmentParams = {
    name: 'ssr-prod',
    production: true,
    isCapacitor: false,
    isServerSideRendering: true,
    multiInstance: false,
    nxdbSyncUrl: 'http://localhost:' + SYNC_PORT + '/' + DATABASE_NAME,
    addNxDBPlugins() { },
    getRxStorage() {
        return getRxStorageMemory();
    },
};
