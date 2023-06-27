import * as server from '../entries/pages/Login/_page.server.ts.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/Login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/Login/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.2636bd8d.js","_app/immutable/chunks/index.8b941a8b.js","_app/immutable/chunks/navigation.6e68b0c1.js","_app/immutable/chunks/singletons.0502b1ed.js","_app/immutable/chunks/index.e586407d.js","_app/immutable/chunks/authorise.e3ae3c01.js","_app/immutable/chunks/index.8d4c3149.js","_app/immutable/chunks/control.f2d6eca3.js","_app/immutable/chunks/stores.9bb34be0.js"];
export const stylesheets = ["_app/immutable/assets/5.fddfab2a.css"];
export const fonts = [];
