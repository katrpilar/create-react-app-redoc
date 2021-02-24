// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-docs-api-js": () => import("./../../../src/pages/docs/api.js" /* webpackChunkName: "component---src-pages-docs-api-js" */),
  "component---src-pages-docs-booking-js": () => import("./../../../src/pages/docs/booking.js" /* webpackChunkName: "component---src-pages-docs-booking-js" */)
}

