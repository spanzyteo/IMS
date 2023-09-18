import * as server from '../entries/pages/Login/_page.server.ts.js';

export const index = 6;
export const component = async () => (await import('../entries/pages/Login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/Login/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.7796b746.js","_app/immutable/chunks/index.c67bcef0.js","_app/immutable/chunks/singletons.3c9d2ac4.js","_app/immutable/chunks/index.d930aa68.js","_app/immutable/chunks/authorise.52ff5040.js","_app/immutable/chunks/forms.8ffc7b80.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/navigation.a2bb3fc6.js","_app/immutable/chunks/config-cd32070b.58ca9258.js"];
export const stylesheets = ["_app/immutable/assets/6.72a5867c.css"];
export const fonts = [];
