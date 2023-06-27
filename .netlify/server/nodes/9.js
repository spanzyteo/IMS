import * as server from '../entries/pages/invoices/create-invoice/_page.server.ts.js';

export const index = 9;
export const component = async () => (await import('../entries/pages/invoices/create-invoice/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/invoices/create-invoice/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.15db5e2b.js","_app/immutable/chunks/index.8b941a8b.js","_app/immutable/chunks/index.8d4c3149.js","_app/immutable/chunks/control.f2d6eca3.js","_app/immutable/chunks/Button.ad22b6c0.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.c305bccb.js","_app/immutable/chunks/Container.65dccf01.js","_app/immutable/chunks/Spinner.0c03673b.js","_app/immutable/chunks/navigation.6e68b0c1.js","_app/immutable/chunks/singletons.0502b1ed.js","_app/immutable/chunks/index.e586407d.js","_app/immutable/chunks/forms.090fd4ce.js","_app/immutable/chunks/parse.bee59afc.js"];
export const stylesheets = ["_app/immutable/assets/9.f6bb27b4.css","_app/immutable/assets/Offcanvas.60614438.css","_app/immutable/assets/Spinner.c97558af.css"];
export const fonts = [];
