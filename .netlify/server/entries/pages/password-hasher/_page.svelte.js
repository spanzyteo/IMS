import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index.js";
import { I as Input } from "../../../chunks/Input.js";
/* empty css                                                       */import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<body><form action="?/hashit" method="post">${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      name: "pass",
      placeholder: "input password to hash"
    },
    {},
    {}
  )}</form>
	<p>${escape(form?.hashed)}</p>
	<p>${escape(form?.compared.toLocaleString())}</p></body>`;
});
export {
  Page as default
};
