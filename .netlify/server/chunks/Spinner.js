import { c as create_ssr_component } from "./index.js";
const Spinner_svelte_svelte_type_style_lang = "";
const css = {
  code: ".loader.svelte-1prbr8h{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);--cell-size:52px;--cell-spacing:1px;--cells:3;--total-size:calc(var(--cells) * (var(--cell-size) + 2 * var(--cell-spacing)));display:flex;flex-wrap:wrap;width:var(--total-size);height:var(--total-size)}.bb.svelte-1prbr8h{background-color:black !important;width:100vw;height:100vh}.cell.svelte-1prbr8h{flex:0 0 var(--cell-size);margin:var(--cell-spacing);background-color:transparent;box-sizing:border-box;border-radius:4px;animation:1.5s svelte-1prbr8h-ripple ease infinite}.cell.d-1.svelte-1prbr8h{animation-delay:200ms}.cell.d-2.svelte-1prbr8h{animation-delay:300ms}.cell.d-3.svelte-1prbr8h{animation-delay:400ms}.cell.d-4.svelte-1prbr8h{animation-delay:500ms}.cell.svelte-1prbr8h:nth-child(1){--cell-color:#00ff87}.cell.svelte-1prbr8h:nth-child(2){--cell-color:#0cfd95}.cell.svelte-1prbr8h:nth-child(3){--cell-color:#17fba2}.cell.svelte-1prbr8h:nth-child(4){--cell-color:#23f9b2}.cell.svelte-1prbr8h:nth-child(5){--cell-color:#30f7c3}.cell.svelte-1prbr8h:nth-child(6){--cell-color:#3df5d4}.cell.svelte-1prbr8h:nth-child(7){--cell-color:#45f4de}.cell.svelte-1prbr8h:nth-child(8){--cell-color:#53f1f0}.cell.svelte-1prbr8h:nth-child(9){--cell-color:#60efff}@keyframes svelte-1prbr8h-ripple{0%{background-color:transparent}30%{background-color:var(--cell-color)}60%{background-color:transparent}100%{background-color:transparent}}",
  map: null
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body><div class="bb svelte-1prbr8h"><div class="loader svelte-1prbr8h"><div class="cell d-0 svelte-1prbr8h"></div>
			<div class="cell d-1 svelte-1prbr8h"></div>
			<div class="cell d-2 svelte-1prbr8h"></div>

			<div class="cell d-1 svelte-1prbr8h"></div>
			<div class="cell d-2 svelte-1prbr8h"></div>

			<div class="cell d-2 svelte-1prbr8h"></div>
			<div class="cell d-3 svelte-1prbr8h"></div>

			<div class="cell d-3 svelte-1prbr8h"></div>
			<div class="cell d-4 svelte-1prbr8h"></div></div></div>
</body>`;
});
export {
  Spinner as S
};
