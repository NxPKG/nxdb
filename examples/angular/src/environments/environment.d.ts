import type { RxStorage } from 'nxdb';

export type EnvironmentParams = {
    // identifier so we can check the logs to see if the correct environment was loaded
    name: string;
    isCapacitor: boolean;
    production: boolean;
    isServerSideRendering: boolean;
    nxdbSyncUrl: string;

    // NxDB database settings
    multiInstance: boolean,
    addNxDBPlugins: () => void;
    getRxStorage: () => RxStorage<any, any>;
}
