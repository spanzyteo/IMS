import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.1ba5f0ac.js","_app/immutable/chunks/index.8b941a8b.js","_app/immutable/chunks/Spinner.0c03673b.js","_app/immutable/chunks/Sidebar.7c8d1676.js","_app/immutable/chunks/stores.fde2b7b3.js","_app/immutable/chunks/index.e586407d.js","_app/immutable/chunks/Button.ad22b6c0.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.c305bccb.js","_app/immutable/chunks/stores.9bb34be0.js","_app/immutable/chunks/singletons.0502b1ed.js","_app/immutable/chunks/forms.090fd4ce.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/navigation.6e68b0c1.js","_app/immutable/chunks/authorise.e3ae3c01.js","_app/immutable/chunks/index.8d4c3149.js","_app/immutable/chunks/control.f2d6eca3.js"];
export const stylesheets = ["_app/immutable/assets/2.ac332c19.css","_app/immutable/assets/Login.c7d39318.css","_app/immutable/assets/Spinner.c97558af.css","_app/immutable/assets/Sidebar.01f70a3d.css","_app/immutable/assets/Offcanvas.60614438.css"];
export const fonts = [];
