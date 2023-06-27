import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape } from "../../../chunks/index3.js";
import "../../../chunks/index2.js";
import "devalue";
import { p as page } from "../../../chunks/stores.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const goto = /* @__PURE__ */ client_method("goto");
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body.svelte-18x4jrt{height:100vh;background-image:url('../../assets/bg.png');background-size:cover;background-position:center;background-repeat:no-repeat}form.svelte-18x4jrt{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);background:rgba(19, 19, 19, 0.65);border-radius:16px;box-shadow:0 4px 30px rgba(0, 0, 0, 0.1);backdrop-filter:blur(6.8px);-webkit-backdrop-filter:blur(6.8px);border:1px solid rgba(19, 19, 19, 0.39)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { form } = $$props;
  let details = { email: "", password: "" };
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  {
    {
      if (form?.success) {
        alert("Login Successful");
        goto("/");
      }
    }
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1bel8ov_START -->${$$result.title = `<title>Login</title>`, ""}<!-- HEAD_svelte-1bel8ov_END -->`, ""}
<body class="page svelte-18x4jrt"><div class="login-container w-2/4"><div class="login-container"><form action="?/login" method="post" class="svelte-18x4jrt"><div class="text-center p-[5rem] rounded-xl shadow-slate-700"><h3 class="text-3xl text-[rgb(87,242,135)] font-bold pb-3">Login Your Account</h3>
					<div class="form__group field mb-3"><input type="email" name="email" class="form__field" placeholder="Enter Email Address"${add_attribute("value", details.email, 0)}>

						<label for="email" class="form__label"><img src="./assets/mail.svg" alt="email-icon" width="30" class="text-[#57F287] float-left mr-2 icon">${escape("")} Enter Email Address
						</label></div>
					<div class="form__group field"><input type="password" name="password" class="form__field" placeholder="Enter Password"${add_attribute("value", details.password, 0)}>
						<label for="password" class="form__label"><img src="./assets/lock.svg" alt="passkey" width="30" class="float-left mr-2 icon">
							${escape("")}
							Enter Password</label></div>
					<button class="button w-[10rem] px-10 py-2 mt-5 border-[#57F287] font-bold">Log In</button>
					<br><br>
					<p class="font-bold text-xl text-black">Don&#39;t have an account? <a href="/Signup" class="text-blue-400">Signup</a></p></div></form></div></div></body>`;
});
export {
  Page as default
};
