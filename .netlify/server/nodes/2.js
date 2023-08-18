import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.4df00d81.js","_app/immutable/chunks/index.59c20f45.js","_app/immutable/chunks/Spinner.cb103618.js","_app/immutable/chunks/Sidebar.306a54dd.js","_app/immutable/chunks/stores.2d565e65.js","_app/immutable/chunks/index.f921ae3d.js","_app/immutable/chunks/Button.d6fb963f.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.6be543ae.js","_app/immutable/chunks/stores.32631caf.js","_app/immutable/chunks/singletons.5743a098.js","_app/immutable/chunks/forms.ad03d527.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/navigation.667a0ae4.js","_app/immutable/chunks/authorise.52ff5040.js"];
export const stylesheets = ["_app/immutable/assets/2.ac332c19.css","_app/immutable/assets/Login.c7d39318.css","_app/immutable/assets/Spinner.c97558af.css","_app/immutable/assets/Sidebar.01f70a3d.css","_app/immutable/assets/Offcanvas.60614438.css"];
export const fonts = [];
