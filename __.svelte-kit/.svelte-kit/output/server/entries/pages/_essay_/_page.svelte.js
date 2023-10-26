import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, v as validate_component, m as missing_component } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
import { S as Selgal } from "../../../chunks/selgal.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let essay;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  ({ essay } = $page.data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1evlvva_START -->${$$result.title = `<title>${escape(essay.meta.essaytitle)}</title>`, ""}<meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", essay.meta.essaytitle, 0)}><!-- HEAD_svelte-1evlvva_END -->`, ""}

${validate_component(essay.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}

<div id="gallery-anchor">${validate_component(Selgal, "SelGal").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
