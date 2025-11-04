import { useState } from "react";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { faqs } from "../data/faqs";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ebony py-24">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Preguntas frecuentes"
          description="Resolvemos las dudas más comunes sobre envíos, pagos y personalización para que compres con total seguridad."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-champagne/15 rounded-3xl border border-champagne/20 bg-cocoa/60">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={faq.question}
                className="w-full text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex items-center justify-between gap-4 px-8 py-6">
                  <span className="font-medium text-champagne">{faq.question}</span>
                  <span className="text-gold">{isOpen ? "−" : "+"}</span>
                </div>
                {isOpen && (
                  <p className="px-8 pb-6 text-sm text-champagne/80">{faq.answer}</p>
                )}
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
