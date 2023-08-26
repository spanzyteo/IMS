import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.0ba7148a.js","_app/immutable/chunks/index.c67bcef0.js","_app/immutable/chunks/Spinner.1eaff1aa.js","_app/immutable/chunks/Sidebar.b9ea28e2.js","_app/immutable/chunks/stores.f1b72631.js","_app/immutable/chunks/index.d930aa68.js","_app/immutable/chunks/stores.ab5c77f9.js","_app/immutable/chunks/singletons.33a38163.js","_app/immutable/chunks/forms.00c19be7.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/navigation.84bf43ae.js","_app/immutable/chunks/authorise.52ff5040.js"];
export const stylesheets = ["_app/immutable/assets/2.83ffebb9.css","_app/immutable/assets/Offcanvas.60614438.css","_app/immutable/assets/Login.c7d39318.css","_app/immutable/assets/Spinner.d557e3df.css","_app/immutable/assets/Sidebar.35fa3490.css"];
export const fonts = [];
