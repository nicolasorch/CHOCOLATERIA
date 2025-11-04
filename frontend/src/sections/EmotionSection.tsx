import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";

export function EmotionSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.12),_transparent_70%)]" />
      <Container className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Conexión emocional"
            title="Aunque estés lejos, tu detalle llega con amor"
            description="Cuidamos cada pétalo, cada bombón y cada empaque para que tu regalo transmita cercanía, estilo y emociones inolvidables."
          >
            <ul className="mt-8 space-y-4 text-sm text-champagne/75">
              <li>
                <span className="font-semibold text-champagne">Seguimiento humano:</span> coordinación por WhatsApp desde el
                pedido hasta la entrega.
              </li>
              <li>
                <span className="font-semibold text-champagne">Experiencia sensorial:</span> flores de lujo y chocolates de autor
                inspirados en el Eje Cafetero.
              </li>
              <li>
                <span className="font-semibold text-champagne">Impacto garantizado:</span> fotografía del regalo entregado para que
                vivas el momento desde Estados Unidos.
              </li>
            </ul>
          </SectionHeading>
        </div>
        <div className="relative overflow-hidden rounded-[3rem] border border-champagne/20 bg-cocoa/80 p-6 shadow-2xl shadow-black/50">
          <img
            src="https://images.unsplash.com/photo-1520932305683-846eb5379934?auto=format&fit=crop&w=900&q=80"
            alt="Cliente sosteniendo flores y chocolates premium"
            className="rounded-2xl object-cover"
          />
          <div className="absolute right-6 top-6 rounded-2xl bg-ebony/80 px-5 py-4 text-right">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Entrega en Pereira</p>
            <p className="mt-2 font-serif text-xl text-champagne">"Se sintió como si yo estuviera allí"</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
