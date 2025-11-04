export type Testimonial = {
  quote: string;
  author: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mi mamá en Pereira dijo que nunca había recibido un regalo tan elegante. Las orquídeas llegaron perfectas y los chocolates estaban exquisitos.",
    author: "Laura G.",
    location: "Miami, FL",
  },
  {
    quote:
      "Coordiné un bouquet para la graduación de mi hermana y me enviaron foto del momento. Fue como estar ahí. Servicio impecable.",
    author: "Andrés T.",
    location: "Houston, TX",
  },
  {
    quote:
      "El arreglo romántico superó mis expectativas. Me ayudaron a reconquistar con estilo. Comunicación constante por WhatsApp.",
    author: "Michael R.",
    location: "New York, NY",
  },
];
