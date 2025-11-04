import { FormEvent, useState } from "react";
import { Container } from "../components/Container";
import { PrimaryButton } from "../components/PrimaryButton";
import { SectionHeading } from "../components/SectionHeading";
import { submitLead } from "../lib/api";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    setFormState("loading");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      phone: formData.get("phone")?.toString().trim() || undefined,
      message: formData.get("message")?.toString().trim() || undefined,
      marketing_consent: formData.get("marketing") === "on",
    };

    try {
      await submitLead(payload);
      setFormState("success");
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setFormError("No pudimos enviar tu mensaje. Intenta nuevamente o escríbenos por WhatsApp.");
      setFormState("error");
    }
  }

  return (
    <section id="contacto" className="bg-ebony pb-24 pt-20">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Estamos aquí para ayudarte a sorprender"
            description="Nuestro equipo está listo para diseñar el detalle perfecto con orquídeas cymbidium, anturios y chocolates artesanales."
          >
            <div className="mt-8 space-y-4 text-sm text-champagne/80">
              <p>💬 WhatsApp: <a href="https://wa.me/573001112233">+57 300 111 2233</a></p>
              <p>📧 Email: <a href="mailto:contacto@tumarca.com">contacto@tumarca.com</a></p>
              <p>📍 Entregas en toda Pereira y municipios cercanos bajo solicitud.</p>
            </div>
          </SectionHeading>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-[3rem] border border-champagne/20 bg-cocoa/60 p-10 shadow-2xl shadow-black/40"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="flex flex-col text-sm text-champagne/70">
              Nombre completo
              <input
                name="name"
                required
                className="mt-2 rounded-full border border-champagne/30 bg-ebony/70 px-5 py-3 text-sm text-champagne outline-none focus:border-gold"
                placeholder="Andrea Gómez"
              />
            </label>
            <label className="flex flex-col text-sm text-champagne/70">
              Correo electrónico
              <input
                type="email"
                name="email"
                required
                className="mt-2 rounded-full border border-champagne/30 bg-ebony/70 px-5 py-3 text-sm text-champagne outline-none focus:border-gold"
                placeholder="andrea@example.com"
              />
            </label>
            <label className="flex flex-col text-sm text-champagne/70">
              Teléfono (opcional)
              <input
                name="phone"
                className="mt-2 rounded-full border border-champagne/30 bg-ebony/70 px-5 py-3 text-sm text-champagne outline-none focus:border-gold"
                placeholder="+1 305 555 0100"
              />
            </label>
            <label className="flex flex-col text-sm text-champagne/70 sm:col-span-2">
              Cuéntanos qué te gustaría enviar
              <textarea
                name="message"
                rows={4}
                className="mt-2 w-full rounded-3xl border border-champagne/30 bg-ebony/70 px-5 py-3 text-sm text-champagne outline-none focus:border-gold"
                placeholder="Flores para el cumpleaños de mi mamá, con chocolates de autor"
              />
            </label>
            <label className="flex items-start gap-3 text-xs text-champagne/60 sm:col-span-2">
              <input type="checkbox" name="marketing" className="mt-1 h-4 w-4 rounded border-champagne/40 bg-ebony/70" />
              Deseo recibir recordatorios de fechas especiales, colecciones limitadas y beneficios VIP.
            </label>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <PrimaryButton
              as="button"
              type="submit"
              disabled={formState === "loading"}
              className="w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
            >
              {formState === "loading" ? "Enviando..." : "Enviar mensaje"}
            </PrimaryButton>
            <p className="text-xs text-champagne/60">
              También puedes escribirnos directo a <a href="mailto:contacto@tumarca.com">contacto@tumarca.com</a>
            </p>
          </div>
          {formState === "success" && (
            <p className="mt-4 rounded-2xl border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold">
              ¡Gracias! Nuestro equipo se comunicará contigo en las próximas horas.
            </p>
          )}
          {formError && (
            <p className="mt-4 rounded-2xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {formError}
            </p>
          )}
        </form>
      </Container>
    </section>
  );
}
