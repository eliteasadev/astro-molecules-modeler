/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as addAttribute, g as renderHead, h as renderSlot } from '../astro_DVWVKbJz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx } from 'react/jsx-runtime';

function HomeIcon() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: "w-6 h-6",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        }
      )
    }
  );
}

const $$Astro$2 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<div class="navbar bg-base-100"> <div class="flex-1"> <a class="btn btn-ghost text-xl" href="/">${renderComponent($$result, "HomeIcon", HomeIcon, {})} Inicio</a> </div> <div class="flex-none"> <ul class="menu menu-horizontal px-1"> <li><a href="/modeler">Modelador</a></li> <li><a href="/about">Acerca de</a></li> </ul> </div> </div>`;
}, "/home/elite/Dev/astro-molecules-modeler/src/modeler/components/ui/Navbar.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/elite/Dev/astro-molecules-modeler/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ModelerComponent", null, { "client:only": "react", "id": id, "client:component-hydration": "only", "client:component-path": "/home/elite/Dev/astro-molecules-modeler/src/modeler/components/Modeler.jsx", "client:component-export": "default" })} ` })}`;
}, "/home/elite/Dev/astro-molecules-modeler/src/pages/modeler/[id].astro", void 0);

const $$file = "/home/elite/Dev/astro-molecules-modeler/src/pages/modeler/[id].astro";
const $$url = "/modeler/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _ };
