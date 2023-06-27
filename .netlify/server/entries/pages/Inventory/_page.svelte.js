import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../chunks/index3.js";
/* empty css                                                     */import { S as Spinner } from "../../../chunks/Spinner.js";
import "../../../chunks/stores2.js";
/* empty css                                                       *//* empty css                                                   */import "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "tr.svelte-1eo0xjm,td.svelte-1eo0xjm,thead.svelte-1eo0xjm{padding:20px}td.svelte-1eo0xjm,th.svelte-1eo0xjm{padding:20px;border-right:2px solid;border-left:2px solid;border-bottom:2px solid;width:200px}table.svelte-1eo0xjm{border-collapse:collapse}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  data.data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1puoqu_START -->${$$result.title = `<title>Inventory</title>`, ""}<meta name="description" content="Best Inventory Management System For Small And Large Scale Businesses Worldwide"><meta name="keywords" content="Inventory"><!-- HEAD_svelte-1puoqu_END -->`, ""}

${`${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
