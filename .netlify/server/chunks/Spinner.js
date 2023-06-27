import { c as create_ssr_component } from "./index3.js";
const Spinner_svelte_svelte_type_style_lang = "";
const css = {
  code: "body.svelte-10cz5pj{height:100%}.spinner-container.svelte-10cz5pj{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%)}.spinner.svelte-10cz5pj{display:inline-block;width:40px;height:40px;border-radius:50%;border:4px solid lime;border-top-color:#fff;animation:svelte-10cz5pj-spinner 0.8s ease-in-out infinite}@keyframes svelte-10cz5pj-spinner{to{transform:rotate(360deg)}}",
  map: null
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-10cz5pj"><div class="spinner-container svelte-10cz5pj"><div class="flex"><div class="spinner svelte-10cz5pj"></div>
			<p class="p-2 font-extrabold">Loading...</p></div></div>
</body>`;
});
export {
  Spinner as S
};
