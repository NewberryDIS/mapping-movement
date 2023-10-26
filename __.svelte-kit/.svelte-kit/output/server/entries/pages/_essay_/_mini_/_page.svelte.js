import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, v as validate_component, m as missing_component } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import { S as Selgal } from "../../../../chunks/selgal.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mini;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  ({ mini } = $page.data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-10k32nd_START -->${$$result.title = `<title>${escape(mini.meta.miniessaytitle)}</title>`, ""}<meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", mini.meta.miniessaytitle, 0)}><!-- HEAD_svelte-10k32nd_END -->`, ""}

${validate_component(mini.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}

<div id="gallery-anchor">${validate_component(Selgal, "SelGal").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
