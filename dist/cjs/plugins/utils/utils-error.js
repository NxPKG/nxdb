"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorToPlainJson = errorToPlainJson;
exports.pluginMissing = pluginMissing;
var _utilsString = require("./utils-string.js");
/**
 * Returns an error that indicates that a plugin is missing
 * We do not throw a RxError because this should not be handled
 * programmatically but by using the correct import
 */
function pluginMissing(pluginKey) {
  var keyParts = pluginKey.split('-');
  var pluginName = 'NxDB';
  keyParts.forEach(part => {
    pluginName += (0, _utilsString.ucfirst)(part);
  });
  pluginName += 'Plugin';
  return new Error("You are using a function which must be overwritten by a plugin.\n        You should either prevent the usage of this function or add the plugin via:\n            import { " + pluginName + " } from 'nxdb/plugins/" + pluginKey + "';\n            addRxPlugin(" + pluginName + ");\n        ");
}
function errorToPlainJson(err) {
  var ret = {
    name: err.name,
    message: err.message,
    nxdb: err.nxdb,
    parameters: err.parameters,
    extensions: err.extensions,
    code: err.code,
    url: err.url,
    /**
     * stack must be last to make it easier to read the json in a console.
     * Also we ensure that each linebreak is spaced so that the chrome devtools
     * shows urls to the source code that can be clicked to inspect
     * the correct place in the code.
     */
    stack: !err.stack ? undefined : err.stack.replace(/\n/g, ' \n ')
  };
  return ret;
}
//# sourceMappingURL=utils-error.js.map