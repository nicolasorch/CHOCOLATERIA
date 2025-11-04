import { Container } from "../components/Container";
import { PrimaryButton } from "../components/PrimaryButton";

export function Footer() {
  return (
    <footer className="border-t border-champagne/10 bg-ebony py-12">
      <Container className="flex flex-col gap-6 text-sm text-champagne/70 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Chocolatería & Orquídeas Premium</p>
          <p className="mt-2 text-champagne/80">
            Transformamos la distancia en cercanía con flores exóticas y chocolates artesanales entregados en Pereira.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <PrimaryButton href="#inicio" variant="secondary">
            Volver arriba
          </PrimaryButton>
          <a href="https://wa.me/573001112233" className="text-champagne/70 hover:text-champagne">
            WhatsApp
          </a>
          <a href="mailto:contacto@tumarca.com" className="text-champagne/70 hover:text-champagne">
            contacto@tumarca.com
          </a>
        </div>
      </Container>
      <p className="mt-8 text-center text-xs text-champagne/40">
        © {new Date().getFullYear()} Chocolatería & Orquídeas Premium. Todos los derechos reservados.
      </p>
    </footer>
  );
}
