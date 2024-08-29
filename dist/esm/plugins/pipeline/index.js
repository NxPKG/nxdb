import { addPipeline } from "./rx-pipeline.js";
export * from "./flagged-functions.js";
export * from "./rx-pipeline.js";
export var NxDBPipelinePlugin = {
  name: 'pipeline',
  nxdb: true,
  prototypes: {
    RxCollection(proto) {
      proto.addPipeline = addPipeline;
    }
  }
};
//# sourceMappingURL=index.js.map