import { ensureRxStorageInstanceParamsAreCorrect } from "../../rx-storage-helper.js";
import { RX_STORAGE_NAME_MONGODB } from "./mongodb-helper.js";
import { createMongoDBStorageInstance } from "./rx-storage-instance-mongodb.js";
import { NXDB_VERSION } from "../utils/utils-nxdb-version.js";
export var RxStorageMongoDB = /*#__PURE__*/function () {
  function RxStorageMongoDB(databaseSettings) {
    this.name = RX_STORAGE_NAME_MONGODB;
    this.nxdbVersion = NXDB_VERSION;
    this.databaseSettings = databaseSettings;
  }
  var _proto = RxStorageMongoDB.prototype;
  _proto.createStorageInstance = function createStorageInstance(params) {
    ensureRxStorageInstanceParamsAreCorrect(params);
    return createMongoDBStorageInstance(this, params, this.databaseSettings);
  };
  return RxStorageMongoDB;
}();
export function getRxStorageMongoDB(databaseSettings) {
  var storage = new RxStorageMongoDB(databaseSettings);
  return storage;
}
//# sourceMappingURL=rx-storage-mongodb.js.map