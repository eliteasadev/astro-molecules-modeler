/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_DVWVKbJz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './_id__BkPrzih3.mjs';

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Acerca de</h1> ` })}`;
}, "/home/elite/Dev/astro-molecules-modeler/src/pages/about.astro", void 0);

const $$file = "/home/elite/Dev/astro-molecules-modeler/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
