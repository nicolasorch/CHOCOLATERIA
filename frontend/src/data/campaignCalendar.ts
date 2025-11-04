export type Campaign = {
  month: string;
  focus: string;
  highlights: string[];
};

export const campaignCalendar: Campaign[] = [
  {
    month: "Febrero",
    focus: "San Valentín & Aniversarios",
    highlights: [
      "Colección romántica con orquídeas cymbidium",
      "Mensajes personalizados en tarjeta premium",
      "Entrega misma semana con confirmación por WhatsApp",
    ],
  },
  {
    month: "Mayo",
    focus: "Día de la Madre",
    highlights: [
      "Campaña principal del año para sorprender a mamá",
      "Bundles con foto de entrega y mensaje en video opcional",
      "Descuento VIP para clientes recurrentes",
    ],
  },
  {
    month: "Junio",
    focus: "Grados y Logros Académicos",
    highlights: [
      "Bouquets tropicales llenos de color",
      "Chocolates personalizados con mensaje de felicitación",
      "Recordatorios automáticos por email y WhatsApp",
    ],
  },
  {
    month: "Septiembre",
    focus: "Amor y Amistad",
    highlights: [
      "Combos románticos y detalles para amigos cercanos",
      "Promociones temporales con disponibilidad limitada",
      "Contenido emocional destacando historias reales",
    ],
  },
  {
    month: "Noviembre",
    focus: "Acción de Gracias & Black Friday",
    highlights: [
      "Detalles de gratitud para familia y aliados",
      "Ofertas relámpago para adelantar Navidad",
      "Bundles exclusivos con chocolates especiados",
    ],
  },
  {
    month: "Diciembre",
    focus: "Navidad & Año Nuevo",
    highlights: [
      "Colecciones festivas con dorados y rojos",
      "Entrega garantizada antes de Nochebuena",
      "Mensajes de cierre de año para fidelización",
    ],
  },
];
