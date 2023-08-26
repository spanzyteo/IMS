import * as server from '../entries/pages/invoices/_invoiceId_/_page.server.ts.js';

export const index = 8;
export const component = async () => (await import('../entries/pages/invoices/_invoiceId_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/invoices/[invoiceId]/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.5882ce3d.js","_app/immutable/chunks/index.c67bcef0.js","_app/immutable/chunks/stores.f1b72631.js","_app/immutable/chunks/index.d930aa68.js","_app/immutable/chunks/Button.4a8467ef.js","_app/immutable/chunks/utils.ff385083.js","_app/immutable/chunks/Container.6dd6405b.js","_app/immutable/chunks/Spinner.1eaff1aa.js"];
export const stylesheets = ["_app/immutable/assets/Offcanvas.60614438.css","_app/immutable/assets/Invoice.27a9c43e.css","_app/immutable/assets/Login.c7d39318.css","_app/immutable/assets/Spinner.d557e3df.css"];
export const fonts = [];
