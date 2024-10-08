import type { RxPlugin } from './types/index.d.ts';
/**
 * Add a plugin to the NxDB library.
 * Plugins are added globally and cannot be removed.
 */
export declare function addRxPlugin(plugin: RxPlugin): void;
