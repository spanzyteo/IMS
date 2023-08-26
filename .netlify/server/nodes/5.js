import * as server from '../entries/pages/Login/_page.server.ts.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/Login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/Login/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.a92c50aa.js","_app/immutable/chunks/index.c67bcef0.js","_app/immutable/chunks/singletons.33a38163.js","_app/immutable/chunks/index.d930aa68.js","_app/immutable/chunks/authorise.52ff5040.js","_app/immutable/chunks/forms.00c19be7.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/navigation.84bf43ae.js","_app/immutable/chunks/config-cd32070b.58ca9258.js"];
export const stylesheets = ["_app/immutable/assets/5.72a5867c.css"];
export const fonts = [];
