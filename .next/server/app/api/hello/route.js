"use strict";
(() => {
var exports = {};
exports.id = 234;
exports.ids = [234];
exports.modules = {

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 5547:
/***/ ((module) => {

module.exports = require("next/dist/compiled/bytes");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 4929:
/***/ ((module) => {

module.exports = require("next/dist/compiled/content-type");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 7664:
/***/ ((module) => {

module.exports = require("next/dist/compiled/fresh");

/***/ }),

/***/ 5644:
/***/ ((module) => {

module.exports = require("next/dist/compiled/jsonwebtoken");

/***/ }),

/***/ 7798:
/***/ ((module) => {

module.exports = require("next/dist/compiled/raw-body");

/***/ }),

/***/ 9491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 3477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 6224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 6417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/hello/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "GET": () => (GET),
  "POST": () => (POST)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.3.0_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(1430);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.3.0_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(3652);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.3.0_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(1556);
// EXTERNAL MODULE: ./node_modules/.pnpm/axios@1.3.5/node_modules/axios/dist/node/axios.cjs
var axios = __webpack_require__(7649);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/app/api/hello/route.ts


async function GET(request) {
    return new Response("Hello, Next.js!");
}
async function POST(request) {
    try {
        // const body = await request.json()
        const res = await axios_default().post("https://api.openai.com/v1/chat/completions", {
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "user",
                    "content": "你好"
                }
            ],
            "temperature": 0.7
        }, {
            headers: {
                Authorization: "Bearer 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"
            }
        });
        return next_response/* default.json */.Z.json(res.data);
    } catch (err) {
        console.log(err);
        return next_response/* default.json */.Z.json({
            code: 1
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.3.0_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fhello%2Froute&name=app%2Fapi%2Fhello%2Froute&pagePath=private-next-app-dir%2Fapi%2Fhello%2Froute.ts&appDir=%2FUsers%2Fxmw%2Fmy-project%2Fchat-gpt%2Fsrc%2Fapp&appPaths=%2Fapi%2Fhello%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&assetPrefix=&nextConfigOutput=!

    

    

    

    const routeModule = new app_route_module/* default */.ZP({
    userland: route_namespaceObject,
    pathname: "/api/hello",
    resolvedPagePath: "/Users/xmw/my-project/chat-gpt/src/app/api/hello/route.ts",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [592,718,150], () => (__webpack_exec__(6417)));
module.exports = __webpack_exports__;

})();