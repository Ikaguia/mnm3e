import * as hotbarDropHooks from "../hooks/hotbarDrop.mjs"
import * as foundryOverrides from "../other/overrides.mjs";

/* -------------------------------------------- */
/*  Ready Hook                                  */
/* -------------------------------------------- */

export default function() {
  Hooks.once("ready", async function() {
    // Wait to register hotbar drop hook on ready so that modules could register earlier if they want to
    hotbarDropHooks.default();
    foundryOverrides.default();
  });
}
