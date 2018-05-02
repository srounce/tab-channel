import { applyPolyfill } from "./applyPolyfill";
export { applyPolyfill };

const getGlobal = new Function("return this").bind(this);

applyPolyfill(getGlobal());
