import { Container } from "../components/Container";
import { ProductCard } from "../components/ProductCard";
import { SectionHeading } from "../components/SectionHeading";
import { products } from "../data/products";

export function CatalogSection() {
  return (
    <section id="catalogo" className="bg-ebony py-24">
      <Container>
        <SectionHeading
          eyebrow="Colección premium"
          title="Cada detalle cuenta: regalos que emocionan, impactan y conquistan"
          description="Elige entre nuestras combinaciones exclusivas de orquídeas, anturios, bromelias y chocolates artesanales para cada ocasión especial."
          align="center"
        />
        <div className="mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
