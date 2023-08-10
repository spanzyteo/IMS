import * as server from '../entries/pages/invoices/_invoiceId_/_page.server.ts.js';

export const index = 8;
export const component = async () => (await import('../entries/pages/invoices/_invoiceId_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/invoices/[invoiceId]/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.44855af3.js","_app/immutable/chunks/index.59c20f45.js","_app/immutable/chunks/stores.2d565e65.js","_app/immutable/chunks/index.f921ae3d.js","_app/immutable/chunks/Button.d6fb963f.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.6be543ae.js","_app/immutable/chunks/Container.c7c83151.js","_app/immutable/chunks/Spinner.cb103618.js"];
export const stylesheets = ["_app/immutable/assets/Invoice.27a9c43e.css","_app/immutable/assets/Login.c7d39318.css","_app/immutable/assets/Offcanvas.60614438.css","_app/immutable/assets/Spinner.c97558af.css"];
export const fonts = [];
