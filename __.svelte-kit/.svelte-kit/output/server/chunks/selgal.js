import { c as create_ssr_component, a as subscribe, d as each, e as escape } from "./index2.js";
import { p as page } from "./stores.js";
import { b as base } from "./paths.js";
const selgal_svelte_svelte_type_style_lang = "";
const css = {
  code: ".selgal.svelte-wzn6q.svelte-wzn6q{margin-block:16px 64px;display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:var(--size-2);list-style-type:none}.selgal.svelte-wzn6q a.svelte-wzn6q,.selgal.svelte-wzn6q div.svelte-wzn6q{border-radius:var(--radius-2);background-position:center;width:200px;height:200px;overflow:hidden;box-shadow:var(--shadow-4)}.selgal.svelte-wzn6q div.svelte-wzn6q{background-size:contain;cursor:not-allowed}.selgal.svelte-wzn6q a.svelte-wzn6q:hover{box-shadow:var(--shadow-6)}.selgal.svelte-wzn6q a.svelte-wzn6q,.selgal.svelte-wzn6q li.svelte-wzn6q{transition:200ms;padding:0;margin:0}.selgal.svelte-wzn6q li.svelte-wzn6q{background:rgba(255, 255, 255, 0.8);height:100%;width:100%;display:flex;justify-content:center;align-items:center;color:inherit;text-decoration:none}span.svelte-wzn6q.svelte-wzn6q{padding:8px;font-size:var(--size-3);text-align:center}",
  map: null
};
const Selgal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let minis;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  ({ minis } = $page.data);
  $$unsubscribe_page();
  return `${minis.length > 0 ? `<details open><summary>Essay Gallery </summary>
        <ul class="selgal svelte-wzn6q">${each(minis, (g, idx) => {
    return `${g.manifest && g.imageiiifid ? `<a id="${escape(g.essayno, true) + "-" + escape(g.minino, true)}" href="${escape(base, true) + "/" + escape(g.essayslug, true) + "/" + escape(g.minislug, true) + "#top"}" class="no-lines svelte-wzn6q" style="${"background-image: url('" + escape(base, true) + "/600/" + escape(g.imageiiifid, true) + "_600w.webp');"}"><li class="svelte-wzn6q"><span class="svelte-wzn6q">${escape(g.minititle)}
                            </span></li>
                    </a>` : `<div style="background-image: url('jordan-peele-nope.jpg');" class="svelte-wzn6q"><li class="svelte-wzn6q"><span class="svelte-wzn6q">${escape(g.minititle)}
                            </span></li>
                    </div>`}`;
  })}</ul></details>` : ``}`;
});
export {
  Selgal as S
};
