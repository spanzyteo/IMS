import * as server from '../entries/pages/invoices/_invoiceId_/_page.server.ts.js';

export const index = 8;
export const component = async () => (await import('../entries/pages/invoices/_invoiceId_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/invoices/[invoiceId]/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.46b5f2b6.js","_app/immutable/chunks/index.8b941a8b.js","_app/immutable/chunks/stores.fde2b7b3.js","_app/immutable/chunks/index.e586407d.js","_app/immutable/chunks/Button.ad22b6c0.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.c305bccb.js","_app/immutable/chunks/Container.65dccf01.js","_app/immutable/chunks/Spinner.0c03673b.js"];
export const stylesheets = ["_app/immutable/assets/Invoice.27a9c43e.css","_app/immutable/assets/Login.c7d39318.css","_app/immutable/assets/Offcanvas.60614438.css","_app/immutable/assets/Spinner.c97558af.css"];
export const fonts = [];
