import { EnvironmentParams } from './environment.d';
import {
  getRxStorageDexie
} from 'nxdb/plugins/storage-dexie';
import {
  SYNC_PORT,
  DATABASE_NAME
} from '../shared';
import { addRxPlugin } from 'nxdb';
import { NxDBLeaderElectionPlugin } from 'nxdb/plugins/leader-election';

export const environment: EnvironmentParams = {
  name: 'web-prod',
  production: true,
  isCapacitor: false,
  isServerSideRendering: false,
  multiInstance: true,
  nxdbSyncUrl: 'http://' + window.location.hostname + ':' + SYNC_PORT + '/' + DATABASE_NAME,
  addNxDBPlugins() {
    addRxPlugin(NxDBLeaderElectionPlugin);
  },
  getRxStorage() {
    return getRxStorageDexie();
  },
};
