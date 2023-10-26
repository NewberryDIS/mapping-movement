import { c as create_ssr_component, a as subscribe, e as escape, k as set_store_value, v as validate_component, l as null_to_empty, d as each } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import { I as Image, a as Icon } from "../../chunks/image.js";
import { b as base } from "../../chunks/paths.js";
import { w as writable } from "../../chunks/index.js";
const openProps_min = "";
const normalize_min = "";
const main = "";
const showSidebar = writable(false);
const y = writable(0);
const x = writable(0);
const maxX = writable(0);
const scrollPoint = writable(0);
const newberry_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".n-wrapper.svelte-m77pq6{margin:0;padding:0 20px 0 4px;border:0;background:transparent}.logo-wrapper.svelte-m77pq6,.n-wrapper.svelte-m77pq6{height:50px;display:flex;justify-content:flex-start;align-items:center}.logo-svg.svelte-m77pq6,img.svelte-m77pq6{height:40px}",
  map: null
};
const Newberry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $x, $$unsubscribe_x;
  $$unsubscribe_x = subscribe(x, (value) => $x = value);
  $$result.css.add(css$5);
  $$unsubscribe_x();
  return `${$x < 1e3 ? `<button class="n-wrapper svelte-m77pq6"><img src="${escape(base, true) + "/NewberryN-Logo.svg"}" alt="" class="svelte-m77pq6"></button>` : `<div class="logo-wrapper svelte-m77pq6"><svg width="275" height="55" viewBox="0 0 275 55" fill="var(--brand)" class="logo-svg svelte-m77pq6"><path d="M 0,34.509067 V 13.462578 L 9.8888888,7.8812455 19.777778,2.2999131 20,5.359409 l 0.222222,3.0594961 6.959745,-4.2211792 6.959744,-4.221179 9.4847,6.1470333 9.4847,6.1470328 0.116271,17.42025 0.116267,17.420249 2.5504,0.0089 2.550395,0.0089 L 54,51.321788 l -4.444445,4.192809 -8.111111,0.02044 -8.111111,0.02052 V 34.031574 12.507591 L 29.95371,10.401164 C 26.632228,8.3309753 26.553856,8.3075807 25.398154,9.0412945 24.751391,9.4519011 23.272426,10.335585 22.111563,11.005037 L 20.000903,12.222223 20.000452,33.88889 20,55.555557 H 10 0 Z M 76.444444,30.692222 V 24.000001 H 73.555555 70.666666 V 22.211728 20.423455 L 78.333333,20.545061 86,20.666667 l 0.137942,1.666667 0.137938,1.666667 h -2.903836 -2.903835 l -0.122996,6.555555 -0.122991,6.555556 -1.888889,0.136666 -1.888889,0.136666 z m 12.197369,6.069943 c -0.120547,-0.314144 -0.164271,-4.064144 -0.09716,-8.333334 l 0.122017,-7.762164 1.86892,-0.13569 1.868925,-0.13569 0.131075,3.246801 0.13108,3.246802 3.444445,0.129806 3.444444,0.129806 v -3.352028 -3.352029 h 2.000001 2 v 8.444445 8.444444 h -2 -2.000001 V 34.000001 30.666667 H 96 92.444444 v 3.333334 3.333333 H 90.65272 c -1.049511,0 -1.882525,-0.236605 -2.010907,-0.571169 z M 107.55556,28.88889 V 20.444445 H 114 h 6.44444 v 1.777778 1.777778 H 116 111.55556 v 1.555555 1.555556 h 3.33333 3.33333 v 1.777778 1.777777 h -3.33333 -3.33333 v 1.555556 1.555556 h 4.88888 4.88889 v 1.777777 1.777778 h -6.88889 -6.88888 z m 22.66666,0.02556 v -8.47 h 2.21228 2.21229 l 3.23216,4.777778 3.23216,4.777778 0.12615,-4.777778 0.12614,-4.777778 h 1.76275 1.76274 v 8.444445 8.444444 h -1.51298 c -1.42948,0 -1.723,-0.298323 -5.3186,-5.405609 l -3.80563,-5.40561 -0.12584,5.294499 -0.12584,5.294498 -1.88889,0.136666 -1.88889,0.136666 v -8.47 z m 19.11111,-0.02618 v -8.46823 l 6.33334,0.123313 L 162,20.666668 v 1.555555 1.555556 l -4.33333,0.127205 -4.33334,0.127206 v 1.539461 1.539461 h 3.11111 3.11111 v 1.777778 1.777778 h -3.11111 -3.11111 v 1.555556 1.555555 h 4.91572 4.91572 l -0.13794,1.666667 -0.13794,1.666666 -6.77778,0.122687 -6.77778,0.122687 v -8.468223 z m 19.76855,7.889516 c -0.37474,-1.022746 -4.65744,-15.838406 -4.65744,-16.112039 0,-0.148499 0.93601,-0.20904 2.08001,-0.134535 l 2.08002,0.135462 1.40396,5.111111 c 0.92502,3.367535 1.49332,4.807881 1.66588,4.222223 0.14406,-0.488889 0.80641,-2.848916 1.47191,-5.244504 l 1.20998,-4.355615 1.78735,0.133393 c 1.98883,0.148427 1.76701,-0.252402 3.88612,7.022281 l 0.971,3.333334 1.38855,-5.111112 1.38856,-5.111111 1.90395,-0.137402 c 1.79384,-0.129455 1.8889,-0.07804 1.64355,0.888889 -0.14322,0.56446 -1.2,4.326291 -2.3484,8.359625 l -2.08799,7.333333 -1.86232,0.135368 -1.86232,0.135367 -1.38481,-4.579812 c -0.76165,-2.518897 -1.49624,-4.879812 -1.63243,-5.246479 -0.1421,-0.382568 -0.58132,0.469727 -1.03068,2 -2.54402,8.663419 -2.08277,7.777778 -4.0507,7.777778 -1.0033,0 -1.84773,-0.238894 -1.96375,-0.555555 z m 21.12034,-7.844256 v -8.489078 l 5,7.11e-4 c 5.64362,8e-4 7.68309,0.65565 8.698,2.792914 0.72222,1.520915 0.32151,3.653344 -0.8393,4.466405 -0.82416,0.577263 -0.8178,0.623465 0.21981,1.598255 1.37317,1.290019 1.75224,2.853435 1.14096,4.705637 -0.84932,2.573461 -2.15633,3.070541 -8.5528,3.252794 l -5.66667,0.161439 z m 10.13358,3.47288 c 0.19742,-1.698297 -0.79334,-2.250285 -3.76275,-2.096367 L 194,30.444445 l -0.13913,1.686703 -0.13914,1.686704 3.25025,-0.131148 c 3.1254,-0.12611 3.25537,-0.175288 3.38382,-1.280301 z m -0.61065,-5.992823 c 0.5246,-0.524594 0.58438,-0.908958 0.24114,-1.550307 -0.54867,-1.025201 -1.91219,-1.418948 -4.25088,-1.227533 -1.42645,0.116751 -1.76145,0.325825 -1.88167,1.174361 -0.27253,1.923562 0.1814,2.301011 2.76723,2.301011 1.61215,0 2.66077,-0.234125 3.12418,-0.697532 z M 208,28.88889 v -8.444445 h 6.44444 6.44445 v 1.777778 1.777778 H 216.44444 212 v 1.555555 1.555556 h 3.33333 3.33334 v 1.777778 1.777777 H 215.33333 212 v 1.555556 1.555556 h 4.88889 4.88889 v 1.777777 1.777778 H 214.88889 208 Z m 16.88889,0 v -8.444445 l 4.55555,0.0025 c 7.12416,0.0039 9.06861,0.888309 9.53093,4.335138 0.27439,2.04571 -0.7302,4.343027 -2.08753,4.773828 -0.85071,0.270005 -0.78853,0.489469 1.14223,4.031497 l 2.04192,3.745937 -2.14711,-0.01031 -2.1471,-0.0103 -2,-3.43414 c -1.8913,-3.247482 -2.08455,-3.43414 -3.55556,-3.43414 h -1.55555 l -0.12981,3.444445 -0.12981,3.444444 h -1.75908 -1.75908 z m 9.79298,-2.695077 c 0.82965,-1.550217 -0.16867,-2.193812 -3.40296,-2.193812 -2.81606,0 -2.83447,0.0082 -2.83447,1.259259 0,0.692593 0.13334,1.392593 0.2963,1.555555 0.16296,0.162963 1.45593,0.296297 2.87325,0.296297 2.14869,0 2.65854,-0.152446 3.06788,-0.917299 z m 7.9848,2.695077 v -8.444445 h 4.90316 c 7.32222,0 9.27873,1.058517 9.30492,5.034188 0.0119,1.803964 -0.19926,2.358701 -1.32709,3.486532 l -1.34124,1.341232 1.78568,3.23485 c 0.98212,1.779168 1.78568,3.360229 1.78568,3.513469 0,0.15324 -0.89463,0.278618 -1.98806,0.278618 h -1.98805 l -2.05085,-3.555555 c -1.9318,-3.349171 -2.13887,-3.555556 -3.5675,-3.555556 h -1.51665 v 3.555556 3.555555 h -2 -2 z m 9.92801,-2.740524 c 0.84512,-1.346204 -0.39293,-2.148365 -3.31577,-2.148365 h -2.61224 v 1.576763 1.576763 l 2.73156,-0.132319 c 1.96283,-0.09508 2.8624,-0.340722 3.19645,-0.872842 z m 12.14606,10.888672 c -0.16296,-0.162963 -0.2963,-1.771995 -0.2963,-3.575627 0,-3.178107 -0.066,-3.378172 -2.13848,-6.481481 -1.17617,-1.761184 -2.59248,-3.952152 -3.14736,-4.868818 l -1.00888,-1.666667 h 2.47382 2.47381 l 1.83775,2.909871 c 1.01076,1.600429 1.90961,2.838013 1.99743,2.750187 0.0878,-0.08783 0.95958,-1.397268 1.93722,-2.909871 1.74708,-2.703082 1.81195,-2.750187 3.78722,-2.750187 1.10534,0 2.0097,0.154064 2.0097,0.342365 0,0.188302 -1.3,2.434237 -2.88889,4.990968 l -2.88889,4.648603 v 3.453477 3.453476 h -1.92593 c -1.05926,0 -2.05926,-0.133333 -2.22222,-0.296296 z" id="path231"></path></svg></div>`}`;
});
const header_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "header.svelte-l8x4hq.svelte-l8x4hq{position:fixed;top:0;left:0;right:0;height:64px;padding-right:8px;display:flex;align-items:center;justify-content:space-between;transition:100ms}.backup-title.svelte-l8x4hq.svelte-l8x4hq{width:300px;height:65px;padding-left:20px;justify-content:center;align-items:center}.backup-title.lg.svelte-l8x4hq.svelte-l8x4hq{display:flex}.backup-title.svelte-l8x4hq a.svelte-l8x4hq{margin:0}.shadow.svelte-l8x4hq.svelte-l8x4hq{box-shadow:var(--shadow-3)}@media(max-width: 999px){.sm.backup-title.svelte-l8x4hq.svelte-l8x4hq{display:none}}@media(min-width: 1000px){.sm.backup-title.svelte-l8x4hq.svelte-l8x4hq{display:flex}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sc;
  let $scrollPoint, $$unsubscribe_scrollPoint;
  let $y, $$unsubscribe_y;
  let $maxX, $$unsubscribe_maxX;
  let $$unsubscribe_x;
  let $page, $$unsubscribe_page;
  $$unsubscribe_scrollPoint = subscribe(scrollPoint, (value) => $scrollPoint = value);
  $$unsubscribe_y = subscribe(y, (value) => $y = value);
  $$unsubscribe_maxX = subscribe(maxX, (value) => $maxX = value);
  $$unsubscribe_x = subscribe(x, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$4);
  set_store_value(scrollPoint, $scrollPoint = $maxX * 0.6, $scrollPoint);
  sc = $y < $scrollPoint ? "lg" : "sm";
  $$unsubscribe_scrollPoint();
  $$unsubscribe_y();
  $$unsubscribe_maxX();
  $$unsubscribe_x();
  $$unsubscribe_page();
  return `
<header class="${"wedgie " + escape($y > 45 ? "shadow" : "", true) + " svelte-l8x4hq"}"><div class="logo"><a href="https://www.newberry.org" target="_blank" class="linklogo">${validate_component(Newberry, "Newberry").$$render($$result, {}, {}, {})}</a></div>
    ${$page.url.pathname !== `${base}/` ? `<h2 class="${"backup-title linklogo " + escape(sc, true) + " svelte-l8x4hq"}"><a href="${escape(base, true) + "/"}" class="no-lines svelte-l8x4hq">Mapping Movement</a></h2>` : ``}</header>

`;
});
const sidebar_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".bar.svelte-1oeavll.svelte-1oeavll{list-style-type:none;overflow:auto;padding:0 0 32px 0;margin:0;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.side.svelte-1oeavll.svelte-1oeavll{position:sticky;top:65px;height:calc(100vh - 65px)}.bar.svelte-1oeavll a.svelte-1oeavll{width:calc(100% - 18px);margin:4px;padding:4px;border:1px solid transparent;color:var(--brand)}.bar.svelte-1oeavll a.svelte-1oeavll:hover,.active.svelte-1oeavll.svelte-1oeavll{border-color:var(--brand) !important}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { toc = [
    { essayslug: "asdf", essaytitle: "qwer" },
    {
      essayslug: "asssdf",
      essaytitle: "qwsser"
    }
  ] } = $$props;
  if ($$props.toc === void 0 && $$bindings.toc && toc !== void 0)
    $$bindings.toc(toc);
  $$result.css.add(css$3);
  $$unsubscribe_page();
  return `<ul class="side bar svelte-1oeavll"><a href="${escape(base, true) + "/"}" class="${escape(
    null_to_empty($page.url.pathname == `${base}/` ? "active no-lines" : "no-lines"),
    true
  ) + " svelte-1oeavll"}">Home
    </a>
    ${each(toc, (c) => {
    return `<a href="${escape(base, true) + "/" + escape(c.essayslug, true)}" class="${escape(
      null_to_empty($page.url.pathname !== "/" && $page.url.pathname.indexOf(c.essayslug) > -1 ? "active no-lines" : "no-lines"),
      true
    ) + " svelte-1oeavll"}">${escape(c.essaytitle)}
        </a>`;
  })}
</ul>`;
});
const footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "footer.svelte-1ym28mq.svelte-1ym28mq{position:absolute;bottom:0;left:0;right:0;width:100%;min-height:50px;background-color:var(--granite)}.flex-wrapper.svelte-1ym28mq.svelte-1ym28mq{display:flex;flex-direction:column;align-items:center;justify-content:space-between;margin:auto}.left-border.svelte-1ym28mq.svelte-1ym28mq{border-left:1px solid rgba(var(--midnight-rgb), 0.5);padding-left:8px}.left.svelte-1ym28mq.svelte-1ym28mq,.right.svelte-1ym28mq.svelte-1ym28mq{margin-block:4px}.left.svelte-1ym28mq.svelte-1ym28mq{flex:1;display:flex;align-items:center;justify-content:center}.right.svelte-1ym28mq.svelte-1ym28mq{flex:3;padding-left:11px}footer.svelte-1ym28mq.svelte-1ym28mq,footer.svelte-1ym28mq a.svelte-1ym28mq{line-height:13px;font-family:'styrene';padding-block:0;font-size:11px;color:rgba(var(--midnight-rgb), 0.5);text-decoration:none;transition:100ms}a.svelte-1ym28mq.svelte-1ym28mq:visited{color:rgba(var(--sapphire-rgb), 0.75)}a.svelte-1ym28mq.svelte-1ym28mq:hover,a.svelte-1ym28mq.svelte-1ym28mq:active{color:rgba(var(--mulberry-rgb), 0.75)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="svelte-1ym28mq"><div class="flex-wrapper svelte-1ym28mq"><div class="left svelte-1ym28mq"><a href="https://www.newberry.org/" target="_blank" class="svelte-1ym28mq">The Newberry</a>
			<a href="https://www.newberry.org/contact-librarian" class="left-border svelte-1ym28mq" target="_blank">Contact Us
			</a></div>
		<div class="right svelte-1ym28mq">Except where otherwise noted, contextual content on this site is made available under a
			<a href="https://creativecommons.org/share-your-work/public-domain/cc0/" target="_blank" class="llines svelte-1ym28mq">Creative Commons Public Domain license
			</a>. Digitized images and other media from the Newberry&#39;s collections are made available for
			any lawful purpose, commercial or non-commercial, without licensing or permission fees to the
			library, subject to the following terms and conditions:
			<a href="https://www.newberry.org/policies#open-access" target="_blank" class="llines svelte-1ym28mq">Newberry Open Access Policy
			</a>.
		</div></div>
</footer>`;
});
const title_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".titlebar.svelte-stg5hk{transition:font-size 200ms;transform-origin:top left;margin-block:16px}h1.svelte-stg5hk{font-size:30px}h3.svelte-stg5hk{font-size:20px}.title.svelte-stg5hk,.home.svelte-stg5hk{padding-block:4px;position:sticky;top:0}.sub.svelte-stg5hk{font-size:20px;position:sticky;top:36px}.nobg.lg.svelte-stg5hk{text-align:center}.titlebar.sm.svelte-stg5hk{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.home.sm.svelte-stg5hk{height:65px;display:flex;justify-content:flex-start;align-items:center}em.svelte-stg5hk{font-weight:400;margin-right:8px}.shadow-text.svelte-stg5hk{color:rgba(0, 0, 0, 0);font-size:40px;padding:10px}.lg.shadow-text.svelte-stg5hk{scale:2}.sm.shadow-text.svelte-stg5hk{scale:0.5}@media only screen and (min-width: 600px){.titlebar.svelte-stg5hk{max-inline-size:none}.titlebar.sm.svelte-stg5hk{max-inline-size:calc(100vw - 100px)}h1.lg.svelte-stg5hk{font-size:80px}h1.sm.svelte-stg5hk{font-size:30px}h3.lg.svelte-stg5hk{font-size:40px}h3.sm.svelte-stg5hk{font-size:20px}}@media(min-width: 1000px){.titlebar.sm.svelte-stg5hk{max-inline-size:calc(100vw - 600px)}}",
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sm;
  let lg;
  let sc;
  let mini;
  let $page, $$unsubscribe_page;
  let $y, $$unsubscribe_y;
  let $scrollPoint, $$unsubscribe_scrollPoint;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_y = subscribe(y, (value) => $y = value);
  $$unsubscribe_scrollPoint = subscribe(scrollPoint, (value) => $scrollPoint = value);
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$1);
  sm = $y > $scrollPoint && "sm";
  lg = $y < 200 && "lg";
  sc = sm || lg || "";
  mini = !!$page.params.mini;
  $$unsubscribe_page();
  $$unsubscribe_y();
  $$unsubscribe_scrollPoint();
  return `<h1 class="${escape(sc, true) + " titlebar " + escape(title.title === "Mapping Movement" ? "home" : "title", true) + " svelte-stg5hk"}">${escape(title.title)}</h1>
${title.line2 ? `<h3 class="titlebar sub svelte-stg5hk">${escape(title.line2)}</h3>` : ``}
${title.line3 ? `<h3 class="${escape(sc, true) + " " + escape($y > 300 && title.line2 ? "wedgie" : "nobg", true) + " titlebar sub svelte-stg5hk"}"><em class="svelte-stg5hk">${mini ? `from:` : `by:`}
		</em>${escape(title.line3)}</h3>` : ``}`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1csfp38{margin-top:64px;padding-bottom:50px;display:grid;gap:10px;grid-template-columns:242px 1fr;width:calc(100vw + 250px);left:-250px;position:relative;transition:all 200ms}.visible.svelte-1csfp38{width:100vw;left:0}nav.svelte-1csfp38{height:100%}.sidebar-button.svelte-1csfp38{left:2px;bottom:2px;z-index:var(--layer-5);position:fixed;background:none;padding:4px;margin:4px}@media(max-width: 1000px){.sidebar-button.svelte-1csfp38{display:block}}@media(min-width: 1001px){.sidebar-button.svelte-1csfp38{display:none}}.core.svelte-1csfp38{padding-inline:50px}article.svelte-1csfp38{margin-top:8px;padding-bottom:32px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let visible;
  let essay;
  let mini;
  let title;
  let $page, $$unsubscribe_page;
  let $showSidebar, $$unsubscribe_showSidebar;
  let $x, $$unsubscribe_x;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_showSidebar = subscribe(showSidebar, (value) => $showSidebar = value);
  $$unsubscribe_x = subscribe(x, (value) => $x = value);
  let { data } = $$props;
  const { toc } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  visible = $x > 1e3 || $showSidebar;
  essay = $page.data.essay || { meta: { essaytitle: "Mapping Movement" } };
  mini = $page.data.mini || false;
  title = {
    title: mini ? mini.meta.minititle : essay.meta.essaytitle,
    line2: essay.meta.essaysubtitle && essay.meta.essaysubtitle !== "null" ? essay.meta.essaysubtitle : null,
    line3: mini ? mini.meta.essaytitle : essay.meta.author || null
  };
  $$unsubscribe_page();
  $$unsubscribe_showSidebar();
  $$unsubscribe_x();
  return `${$$result.head += `<!-- HEAD_svelte-1kvsbg4_START -->${$$result.title = `<title>
		${escape(title.title || "Mapping Movement")}
	</title>`, ""}<!-- HEAD_svelte-1kvsbg4_END -->`, ""}

<div id="top"></div>

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${["svelte-1csfp38", visible ? "visible" : ""].join(" ").trim()}"><nav class="svelte-1csfp38">${validate_component(Sidebar, "Sidebar").$$render($$result, { toc }, {}, {})}</nav>
	<article class="core svelte-1csfp38">${validate_component(Image, "Image").$$render($$result, { home: $page.url.pathname === "/" }, {}, {})}
		${validate_component(Title, "Title").$$render($$result, { title }, {}, {})}
		<div class="prose">${slots.default ? slots.default({}) : ``}</div></article></main>

<button class="sidebar-button svelte-1csfp38">${validate_component(Icon, "Icon").$$render($$result, { icon: "gg:menu-round", width: 32 }, {}, {})}</button>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
