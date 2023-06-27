import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index3.js";
import { S as Spinner } from "../../chunks/Spinner.js";
/* empty css                                                  */import { i as isLoggedIn } from "../../chunks/stores2.js";
/* empty css                                                    *//* empty css                                                */import { p as page } from "../../chunks/stores.js";
import "devalue";
import "../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media print{#fixed.svelte-1smv3c8{display:none}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isLoggedIn;
  let $$unsubscribe_page;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  new FormData();
  $$result.css.add(css);
  $$unsubscribe_isLoggedIn();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-d1tvej_START -->${$$result.title = `<title>Los Angis - Home</title>`, ""}<meta name="description" content="Best Inventory Management System For Small And Large Scale Businesses Worldwide"><meta name="keywords" content="Inventory Management System Home Page"><meta name="author" content="E-Hub Digital Services"><!-- HEAD_svelte-d1tvej_END -->`, ""}

<body>${`${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}
</body>`;
});
export {
  Page as default
};
