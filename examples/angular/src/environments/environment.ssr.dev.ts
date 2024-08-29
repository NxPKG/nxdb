import { EnvironmentParams } from './environment.d';
import {
    getRxStorageMemory
} from 'nxdb/plugins/storage-memory';
import { wrappedValidateAjvStorage } from 'nxdb/plugins/validate-ajv';
import {
    SYNC_PORT,
    DATABASE_NAME
} from '../shared';
import {
    NxDBDevModePlugin
} from 'nxdb/plugins/dev-mode';
import {
    addRxPlugin
} from 'nxdb';


export const environment: EnvironmentParams = {
    name: 'ssr-dev',
    production: false,
    isCapacitor: false,
    isServerSideRendering: true,
    multiInstance: false,
    nxdbSyncUrl: 'http://localhost:' + SYNC_PORT + '/' + DATABASE_NAME,
    addNxDBPlugins() {
        addRxPlugin(NxDBDevModePlugin);
    },
    getRxStorage() {
        return wrappedValidateAjvStorage({
            storage: getRxStorageMemory()
        });
    },
};
