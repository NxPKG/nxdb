import type { RxPlugin, RxCollection } from '../../types/index.ts';
import { RxMigrationState } from './rx-migration-state.ts';
export declare const DATA_MIGRATOR_BY_COLLECTION: WeakMap<RxCollection, RxMigrationState>;
export declare const NxDBMigrationPlugin: RxPlugin;
export declare const NxDBMigrationSchemaPlugin: RxPlugin;
export * from './rx-migration-state.ts';
export * from './migration-helpers.ts';
export * from './migration-types.ts';
