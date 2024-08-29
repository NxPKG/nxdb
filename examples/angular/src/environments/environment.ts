import { EnvironmentParams } from './environment.d';
import {
  getRxStorageDexie
} from 'nxdb/plugins/storage-dexie';
import { wrappedValidateAjvStorage } from 'nxdb/plugins/validate-ajv';
import {
  SYNC_PORT,
  DATABASE_NAME
} from '../shared';
import { addRxPlugin } from 'nxdb';
import { NxDBLeaderElectionPlugin } from 'nxdb/plugins/leader-election';
import {
  NxDBDevModePlugin
} from 'nxdb/plugins/dev-mode';

export const environment: EnvironmentParams = {
  name: 'web-dev',
  production: false,
  isCapacitor: false,
  isServerSideRendering: false,
  multiInstance: true,
  nxdbSyncUrl: 'http://' + window.location.hostname + ':' + SYNC_PORT + '/' + DATABASE_NAME,
  addNxDBPlugins() {
    addRxPlugin(NxDBDevModePlugin);
    addRxPlugin(NxDBLeaderElectionPlugin);
  },
  getRxStorage() {
    return wrappedValidateAjvStorage({
      storage: getRxStorageDexie()
    });
  },
};
