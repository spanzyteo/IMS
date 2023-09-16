import * as server from '../entries/pages/invoices/create-invoice/_page.server.ts.js';

export const index = 10;
export const component = async () => (await import('../entries/pages/invoices/create-invoice/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/invoices/create-invoice/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.275ac4ec.js","_app/immutable/chunks/index.c67bcef0.js","_app/immutable/chunks/Button.4a8467ef.js","_app/immutable/chunks/utils.ff385083.js","_app/immutable/chunks/Container.6dd6405b.js","_app/immutable/chunks/Spinner.1eaff1aa.js","_app/immutable/chunks/navigation.a2bb3fc6.js","_app/immutable/chunks/singletons.3c9d2ac4.js","_app/immutable/chunks/index.d930aa68.js","_app/immutable/chunks/forms.8ffc7b80.js","_app/immutable/chunks/parse.bee59afc.js"];
export const stylesheets = ["_app/immutable/assets/10.f6bb27b4.css","_app/immutable/assets/Offcanvas.60614438.css","_app/immutable/assets/Spinner.d557e3df.css"];
export const fonts = [];
