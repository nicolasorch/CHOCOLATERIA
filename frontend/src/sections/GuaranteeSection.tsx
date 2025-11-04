import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";

export function GuaranteeSection() {
  return (
    <section id="garantia" className="bg-cocoa/40 py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Garantía"
            title="Tu tranquilidad es nuestra prioridad"
            description="Pagos seguros, coordinación personalizada y una promesa clara: entregamos emociones con la calidad que tus seres queridos merecen."
          >
            <ul className="mt-8 space-y-4 text-sm text-champagne/75">
              <li>✔ Pagos con Stripe o PayPal desde cualquier ciudad de Estados Unidos.</li>
              <li>✔ Confirmación por WhatsApp antes, durante y después de la entrega.</li>
              <li>✔ Política de reposición o reembolso si algo no cumple el estándar premium.</li>
            </ul>
          </SectionHeading>
        </div>
        <div className="rounded-[3rem] border border-champagne/15 bg-ebony/70 p-10 text-center shadow-2xl shadow-black/40">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Servicio 5 estrellas</p>
          <p className="mt-4 font-serif text-3xl text-champagne">100% Satisfacción Garantizada</p>
          <p className="mt-6 text-sm text-champagne/70">
            Si el arreglo no refleja el nivel de lujo prometido, repetimos la entrega o devolvemos tu dinero. Así de segura es la
            experiencia Chocolatería & Orquídeas.
          </p>
        </div>
      </Container>
    </section>
  );
}
