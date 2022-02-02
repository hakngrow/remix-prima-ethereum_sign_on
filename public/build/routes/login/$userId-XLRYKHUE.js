import {
  require_db
} from "/_static/build/_shared/chunk-EVMALOKE.js";
import {
  useLoaderData
} from "/_static/build/_shared/chunk-SZLRGAFT.js";
import {
  React,
  __toModule,
  init_react
} from "/_static/build/_shared/chunk-YVIHDCKB.js";

// browser-route-module:C:\Users\howie.ng\Documents\projects\blockchain\sign-on-ethereum\app\routes\login\$userId.tsx?browser
init_react();

// app/routes/login/$userId.tsx
init_react();
var import_db = __toModule(require_db());
function userPage() {
  const user = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "gm"), /* @__PURE__ */ React.createElement("p", null, user.address));
}
export {
  userPage as default
};
//# sourceMappingURL=/_static/build/routes/login/$userId-XLRYKHUE.js.map
