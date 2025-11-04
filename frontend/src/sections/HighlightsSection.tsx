import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { highlights } from "../data/highlights";

export function HighlightsSection() {
  return (
    <section className="bg-cocoa/40 py-20" id="beneficios">
      <Container>
        <SectionHeading
          eyebrow="Exclusividad"
          title="Exclusividad que se siente en cada detalle"
          description="Seleccionamos flores exóticas, chocolates de autor y empaques de lujo para crear experiencias que enamoran a primera vista."
          align="center"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-champagne/20 bg-ebony/80 p-8 text-center shadow-xl shadow-black/40"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="mt-4 font-serif text-2xl text-champagne">{item.title}</h3>
              <p className="mt-3 text-sm text-champagne/75">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
