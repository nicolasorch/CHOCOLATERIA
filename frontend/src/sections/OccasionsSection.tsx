import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { occasions } from "../data/occasions";

export function OccasionsSection() {
  return (
    <section id="ocasiones" className="bg-cocoa/40 py-24">
      <Container>
        <SectionHeading
          eyebrow="Momentos clave"
          title="Presente en cada celebración importante"
          description="Diseñamos campañas y colecciones para conquistar, reconquistar, agradecer y celebrar logros familiares en Pereira."
          align="center"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {occasions.map((occasion) => (
            <article
              key={occasion.id}
              className="h-full rounded-3xl border border-champagne/15 bg-ebony/70 p-8 shadow-xl shadow-black/30"
            >
              <h3 className="font-serif text-2xl text-champagne">{occasion.title}</h3>
              <p className="mt-4 text-sm text-champagne/75">{occasion.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
