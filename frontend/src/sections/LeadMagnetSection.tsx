import { FormEvent, useState } from "react";
import { Container } from "../components/Container";
import { PrimaryButton } from "../components/PrimaryButton";
import { SectionHeading } from "../components/SectionHeading";

export function LeadMagnetSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="descuento" className="bg-ebony py-24">
      <Container className="rounded-[3rem] border border-champagne/20 bg-gradient-to-br from-cocoa/70 via-ebony to-cocoa/70 p-12 text-center shadow-2xl shadow-black/40">
        <SectionHeading
          eyebrow="Bienvenida"
          title="Recibe un 10% de descuento en tu primer pedido"
          description="Déjanos tu correo y recibe inspiración, recordatorios de fechas clave y acceso anticipado a colecciones limitadas."
          align="center"
        />
        <form
          className="mx-auto mt-12 flex max-w-2xl flex-col gap-4 sm:flex-row"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            required
            placeholder="Tu correo electrónico"
            className="w-full flex-1 rounded-full border border-champagne/40 bg-ebony/80 px-6 py-3 text-sm text-champagne outline-none transition focus:border-gold"
          />
          <PrimaryButton as="button" type="submit" className="whitespace-nowrap">
            Quiero mi descuento
          </PrimaryButton>
        </form>
        <p className="mt-4 text-xs text-champagne/60">
          Al registrarte aceptas recibir comunicaciones sobre colecciones premium y fechas especiales. Puedes cancelar cuando
          quieras.
        </p>
        {submitted && (
          <p className="mt-6 text-sm text-gold">
            ¡Gracias! Te enviaremos novedades y tu código de bienvenida muy pronto.
          </p>
        )}
      </Container>
    </section>
  );
}
