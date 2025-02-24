import { getProducts } from "../../server/products";
import ProductCard from "@/components/product-card";

export default async function Home() {
  const products = await getProducts();
  return (
    <main className="flex flex-col gap-10 justify-center max-w-6xl mx-auto">
      <h1>Awesome products</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {
    products.map((product)=>(<ProductCard key={product.id} product={product}/>) )
  }
      
      </div>
    </main>
  );
}
