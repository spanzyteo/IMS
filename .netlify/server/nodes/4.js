import * as server from '../entries/pages/Earn/_page.server.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/Earn/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/Earn/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.8232d2e8.js","_app/immutable/chunks/index.c67bcef0.js"];
export const stylesheets = [];
export const fonts = [];
