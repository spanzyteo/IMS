import * as server from '../entries/pages/modal/_page.server.ts.js';

export const index = 10;
export const component = async () => (await import('../entries/pages/modal/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/modal/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.89cd8c6f.js","_app/immutable/chunks/index.c67bcef0.js","_app/immutable/chunks/Button.4a8467ef.js","_app/immutable/chunks/utils.ff385083.js","_app/immutable/chunks/Input.09a10bb4.js","_app/immutable/chunks/config-cd32070b.58ca9258.js","_app/immutable/chunks/stores.ab5c77f9.js","_app/immutable/chunks/singletons.33a38163.js","_app/immutable/chunks/index.d930aa68.js"];
export const stylesheets = ["_app/immutable/assets/10.742e09a2.css","_app/immutable/assets/Offcanvas.60614438.css"];
export const fonts = [];
