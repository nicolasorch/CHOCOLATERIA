export type Occasion = {
  id: string;
  title: string;
  description: string;
};

export const occasions: Occasion[] = [
  {
    id: "madre",
    title: "Día de la Madre",
    description:
      "El momento más emotivo del año. Sorprende a mamá en Pereira con orquídeas de lujo y chocolates creados especialmente para ella.",
  },
  {
    id: "san-valentin",
    title: "San Valentín & Aniversarios",
    description:
      "Celebra el amor sin fronteras con arreglos románticos y chocolates que conquistan desde el primer bocado.",
  },
  {
    id: "grados",
    title: "Grados & Logros Académicos",
    description:
      "Reconoce su esfuerzo con un bouquet tropical vibrante y una selección gourmet que celebra sus metas.",
  },
  {
    id: "matrimonios",
    title: "Matrimonios & Bautizos",
    description:
      "Haz parte de los momentos solemnes con diseños elegantes, tonos cálidos y detalles que transmiten cercanía.",
  },
  {
    id: "conquista",
    title: "Conquista & Reconquista",
    description:
      "Cuando las palabras no bastan, un arreglo con orquídeas cymbidium y chocolates artesanales habla por ti.",
  },
  {
    id: "navidad",
    title: "Navidad & Fin de Año",
    description:
      "Colecciones festivas con acentos dorados, orquídeas blancas y chocolates especiados para cerrar el año con estilo.",
  },
];
