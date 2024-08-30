import { PREMIUM_FLAG_HASH, NXDB_UTILS_GLOBAL, NXDB_VERSION, defaultHashSha256 } from "../utils/index.js";
var iframeShown = false;

/**
 * Adds an iframe to track the results of marketing efforts.
 */
export async function addDevModeTrackingIframe(db) {
  /**
   * Only run this in browser AND localhost AND dev-mode.
   * Make sure this is never used in production by someone.
   */
  if (iframeShown || typeof window === 'undefined' || typeof location === 'undefined'
  // !isLocalHost()
  ) {
    return;
  }

  // do not show if premium flag is set.
  if (NXDB_UTILS_GLOBAL.premium && typeof NXDB_UTILS_GLOBAL.premium === 'string' && (await defaultHashSha256(NXDB_UTILS_GLOBAL.premium)) === PREMIUM_FLAG_HASH) {
    return;
  }
  iframeShown = true;
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = 'https://nxdb.nxpkg.github.io/html/dev-mode-iframe.html?version=' + NXDB_VERSION;
  document.body.appendChild(iframe);
}
function isLocalHost() {
  return location.hostname === 'localhost' || location.hostname.includes('localhost') || location.hostname === '127.0.0.1' || location.hostname === '0.0.0.0' || location.hostname === '[::1]' // IPv6
  ;
}
//# sourceMappingURL=dev-mode-tracking.js.map