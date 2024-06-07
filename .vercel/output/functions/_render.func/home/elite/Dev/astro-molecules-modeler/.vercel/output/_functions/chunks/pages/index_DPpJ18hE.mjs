/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_DVWVKbJz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './_id__dxBZl8Oe.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "FESA Molecule modeler - Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center"> <h1 class="mt-14 text-5xl font-bold text-pretty max-w-screen-sm text-center text-white">
Modela moleculas de manera intuitiva y fácil.
</h1> <h2 class="mt-6 text-xl font-light text-pretty max-w-lg text-center text-white">
Modela, utiliza y comparte tus modelos con FESA Molecule. Una aplicación
      de creación de modelos moleculares por y para estudiantes.
</h2> <a class="btn btn-accent mt-3" href="/modeler">Modela</a> <img src="/modeler.png" alt="modeler" class="mt-14 max-w-lg rounded-md"> </div> ` })}`;
}, "/home/elite/Dev/astro-molecules-modeler/src/pages/index.astro", void 0);

const $$file = "/home/elite/Dev/astro-molecules-modeler/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
