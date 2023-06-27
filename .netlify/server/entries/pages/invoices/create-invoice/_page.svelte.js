import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import "../../../../chunks/index2.js";
/* empty css                                                          */import { v4 } from "uuid";
import { S as Spinner } from "../../../../chunks/Spinner.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media print{h1.svelte-jir1t1,.add.svelte-jir1t1{text-align:center;margin-left:50px;font-size:20pt;page-break-inside:avoid;margin-top:0px}table.svelte-jir1t1{font-size:20pt;margin:0px;padding:0px}@page{font-size:20pt;text-align:center;size:A4;background-color:#f5f5f5;margin:1cm 0.5cm}}html.svelte-jir1t1{margin:0;padding:0}table.svelte-jir1t1{border-collapse:collapse}th.svelte-jir1t1,td.svelte-jir1t1{padding:8px;text-align:left;border-bottom:1px solid #ddd;font-size:large}th.svelte-jir1t1{background-color:#f2f2f2}input.svelte-jir1t1:focus{border:none}input.svelte-jir1t1{padding:5px;height:30px;font-size:medium}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let d = /* @__PURE__ */ new Date();
  let date = d.toDateString();
  console.log(date);
  v4().slice(0, 8);
  new FormData();
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-hdie13_START -->${$$result.title = `<title>Create Invoice</title>`, ""}<!-- HEAD_svelte-hdie13_END -->`, ""}

<html lang="en" class="svelte-jir1t1">${`${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}
</html>`;
});
export {
  Page as default
};
