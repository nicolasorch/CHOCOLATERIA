import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { campaignCalendar } from "../data/campaignCalendar";

export function CalendarSection() {
  return (
    <section id="calendario" className="bg-ebony py-24">
      <Container>
        <SectionHeading
          eyebrow="Planificación"
          title="Calendario anual de campañas"
          description="Mantén un flujo constante de sorpresas premium durante todo el año. Estas son las temporadas de mayor impacto para tus clientes en Pereira."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {campaignCalendar.map((campaign) => (
            <article
              key={campaign.month}
              className="rounded-3xl border border-champagne/15 bg-cocoa/60 p-8 shadow-lg shadow-black/30"
            >
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">{campaign.month}</p>
                <span className="text-sm text-champagne/70">{campaign.focus}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-champagne/80">
                {campaign.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-gold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
