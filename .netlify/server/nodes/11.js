import * as server from '../entries/pages/modal/_page.server.ts.js';

export const index = 11;
export const component = async () => (await import('../entries/pages/modal/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/modal/+page.server.ts";
export const imports = ["_app/immutable/nodes/11.8cdef278.js","_app/immutable/chunks/index.c67bcef0.js","_app/immutable/chunks/Button.4a8467ef.js","_app/immutable/chunks/utils.ff385083.js","_app/immutable/chunks/Input.09a10bb4.js","_app/immutable/chunks/config-cd32070b.58ca9258.js","_app/immutable/chunks/stores.18e93b2a.js","_app/immutable/chunks/singletons.3c9d2ac4.js","_app/immutable/chunks/index.d930aa68.js"];
export const stylesheets = ["_app/immutable/assets/11.71c57134.css","_app/immutable/assets/Offcanvas.60614438.css"];
export const fonts = [];
