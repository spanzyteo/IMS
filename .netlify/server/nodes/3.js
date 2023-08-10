import * as server from '../entries/pages/Banking/_page.server.ts.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/Banking/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/Banking/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.1e44a0d8.js","_app/immutable/chunks/index.59c20f45.js","_app/immutable/chunks/Sidebar.306a54dd.js","_app/immutable/chunks/Spinner.cb103618.js","_app/immutable/chunks/Container.c7c83151.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.6be543ae.js","_app/immutable/chunks/stores.32631caf.js","_app/immutable/chunks/singletons.5743a098.js","_app/immutable/chunks/index.f921ae3d.js","_app/immutable/chunks/navigation.667a0ae4.js","_app/immutable/chunks/stores.2d565e65.js","_app/immutable/chunks/authorise.52ff5040.js"];
export const stylesheets = ["_app/immutable/assets/Sidebar.01f70a3d.css","_app/immutable/assets/Spinner.c97558af.css","_app/immutable/assets/Offcanvas.60614438.css"];
export const fonts = [];
