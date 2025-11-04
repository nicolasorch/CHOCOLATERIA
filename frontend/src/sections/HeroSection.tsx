import { Container } from "../components/Container";
import { PrimaryButton } from "../components/PrimaryButton";

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ebony pb-24 pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blush blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-coral blur-3xl" />
      </div>
      <Container className="flex flex-col-reverse items-center gap-16 lg:flex-row lg:items-start">
        <div className="max-w-2xl space-y-8 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-gold">
            Chocolatería & Orquídeas Premium
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-champagne sm:text-5xl">
            Sorprende con elegancia desde EE.UU. hasta Pereira
          </h1>
          <p className="text-base text-champagne/85">
            Orquídeas cymbidium, anturios y bromelias únicas combinadas con chocolates artesanales de autor. El detalle perfecto
            para transmitir amor, gratitud o celebración, aunque estés lejos.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <PrimaryButton href="#contacto">Ordena tu regalo ahora</PrimaryButton>
            <PrimaryButton href="#catalogo" variant="secondary">
              Ver colección premium
            </PrimaryButton>
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-champagne/60">
            Entregas en todo Pereira · Pagos seguros desde EE.UU.
          </p>
        </div>
        <div className="relative w-full max-w-md overflow-hidden rounded-[3rem] border border-champagne/30 bg-cocoa/60 p-6 shadow-2xl shadow-black/50">
          <img
            src="https://images.unsplash.com/photo-1525253013412-55c1a69a5738?auto=format&fit=crop&w=900&q=80"
            alt="Arreglo floral de lujo con chocolates artesanales"
            className="rounded-2xl object-cover"
          />
          <div className="mt-6 space-y-3 rounded-2xl bg-ebony/70 p-5 text-left text-sm text-champagne/80">
            <p className="font-semibold text-champagne">Experiencia Premium Garantizada</p>
            <ul className="space-y-2">
              <li>✔ Seguimiento personalizado por WhatsApp</li>
              <li>✔ Fotografía del regalo al momento de la entrega</li>
              <li>✔ Garantía de frescura y satisfacción</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
