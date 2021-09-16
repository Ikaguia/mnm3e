import * as initHooks from "../hooks/init.mjs"
import * as readyHooks from "../hooks/ready.mjs"
import * as handlebarHelpers from "../hooks/handlebarHelpers.mjs"

export function registerHooks() {
    initHooks.default();
    readyHooks.default();
    handlebarHelpers.default();
}
