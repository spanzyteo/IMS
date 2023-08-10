import * as server from '../entries/pages/invoices/_page.server.ts.js';

export const index = 7;
export const component = async () => (await import('../entries/pages/invoices/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/invoices/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.b99c53d0.js","_app/immutable/chunks/index.59c20f45.js","_app/immutable/chunks/stores.2d565e65.js","_app/immutable/chunks/index.f921ae3d.js","_app/immutable/chunks/Button.d6fb963f.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.6be543ae.js","_app/immutable/chunks/Sidebar.306a54dd.js","_app/immutable/chunks/Spinner.cb103618.js","_app/immutable/chunks/authorise.52ff5040.js","_app/immutable/chunks/stores.32631caf.js","_app/immutable/chunks/singletons.5743a098.js"];
export const stylesheets = ["_app/immutable/assets/Login.c7d39318.css","_app/immutable/assets/Invoice.27a9c43e.css","_app/immutable/assets/Offcanvas.60614438.css","_app/immutable/assets/Sidebar.01f70a3d.css","_app/immutable/assets/Spinner.c97558af.css"];
export const fonts = [];
