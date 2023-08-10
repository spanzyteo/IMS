import * as server from '../entries/pages/Login/_page.server.ts.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/Login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/Login/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.284b468a.js","_app/immutable/chunks/index.59c20f45.js","_app/immutable/chunks/navigation.667a0ae4.js","_app/immutable/chunks/singletons.5743a098.js","_app/immutable/chunks/index.f921ae3d.js","_app/immutable/chunks/authorise.52ff5040.js","_app/immutable/chunks/stores.32631caf.js","_app/immutable/chunks/client.b4418e6c.js"];
export const stylesheets = ["_app/immutable/assets/5.2ac8cb99.css"];
export const fonts = [];
