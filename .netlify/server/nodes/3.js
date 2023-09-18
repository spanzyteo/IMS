import * as server from '../entries/pages/Banking/_page.server.ts.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/Banking/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/Banking/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.4f8e8dc2.js","_app/immutable/chunks/index.c67bcef0.js","_app/immutable/chunks/Sidebar.a83dd6c2.js","_app/immutable/chunks/Spinner.1eaff1aa.js","_app/immutable/chunks/Container.6dd6405b.js","_app/immutable/chunks/utils.ff385083.js","_app/immutable/chunks/stores.18e93b2a.js","_app/immutable/chunks/singletons.3c9d2ac4.js","_app/immutable/chunks/index.d930aa68.js","_app/immutable/chunks/navigation.a2bb3fc6.js","_app/immutable/chunks/stores.f1b72631.js","_app/immutable/chunks/authorise.52ff5040.js"];
export const stylesheets = ["_app/immutable/assets/Offcanvas.60614438.css","_app/immutable/assets/Sidebar.2a7ab42b.css","_app/immutable/assets/Spinner.d557e3df.css"];
export const fonts = [];
