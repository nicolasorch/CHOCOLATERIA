import { PrimaryButton } from "./PrimaryButton";

export type Product = {
  id: string;
  name: string;
  description: string;
  priceNote: string;
  imageAlt: string;
  imageSrc: string;
};

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-3xl border border-champagne/20 bg-cocoa/60 p-8 shadow-2xl shadow-black/40 transition hover:-translate-y-1 hover:shadow-black/60">
      <div className="space-y-4">
        <div className="overflow-hidden rounded-2xl border border-champagne/20 bg-ebony/80">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-60 w-full object-cover"
            loading="lazy"
          />
        </div>
        <h3 className="font-serif text-2xl text-champagne">{product.name}</h3>
        <p className="text-sm text-champagne/80">{product.description}</p>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm font-medium text-gold">{product.priceNote}</span>
        <PrimaryButton href="#contacto" variant="secondary">
          Ordenar ahora
        </PrimaryButton>
      </div>
    </article>
  );
}
