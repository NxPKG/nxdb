import type {
    RxPlugin
} from '../../types/index.d.ts';
import { addPipeline } from './rx-pipeline.ts';

export type * from './types.ts';
export * from './flagged-functions.ts';
export * from './rx-pipeline.ts';

export const NxDBPipelinePlugin: RxPlugin = {
    name: 'pipeline',
    nxdb: true,
    prototypes: {
        RxCollection(proto: any) {
            proto.addPipeline = addPipeline;
        }
    }
};
