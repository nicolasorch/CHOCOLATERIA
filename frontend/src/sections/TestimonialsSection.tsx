import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { testimonials } from "../data/testimonials";

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-cocoa/40 py-24">
      <Container>
        <SectionHeading
          eyebrow="Confianza"
          title="Ellos ya sorprendieron a sus seres queridos"
          description="Historias reales de clientes que confiaron en nosotros para enviar amor, gratitud y celebración con un estándar premium."
          align="center"
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="rounded-3xl border border-champagne/15 bg-ebony/80 p-8 shadow-xl shadow-black/40"
            >
              <p className="text-sm text-champagne/80">“{testimonial.quote}”</p>
              <footer className="mt-6 text-sm font-semibold text-champagne">
                {testimonial.author} · <span className="text-champagne/70">{testimonial.location}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
