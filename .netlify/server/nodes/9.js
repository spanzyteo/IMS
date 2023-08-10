import * as server from '../entries/pages/invoices/create-invoice/_page.server.ts.js';

export const index = 9;
export const component = async () => (await import('../entries/pages/invoices/create-invoice/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/invoices/create-invoice/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.9acf4134.js","_app/immutable/chunks/index.59c20f45.js","_app/immutable/chunks/Button.d6fb963f.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.6be543ae.js","_app/immutable/chunks/Container.c7c83151.js","_app/immutable/chunks/Spinner.cb103618.js","_app/immutable/chunks/navigation.667a0ae4.js","_app/immutable/chunks/singletons.5743a098.js","_app/immutable/chunks/index.f921ae3d.js","_app/immutable/chunks/forms.ad03d527.js","_app/immutable/chunks/parse.bee59afc.js"];
export const stylesheets = ["_app/immutable/assets/9.f6bb27b4.css","_app/immutable/assets/Offcanvas.60614438.css","_app/immutable/assets/Spinner.c97558af.css"];
export const fonts = [];
