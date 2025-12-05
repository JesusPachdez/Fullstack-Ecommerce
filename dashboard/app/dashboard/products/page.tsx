import { listProducts } from "@/api/products";

export default async function ProductsPage() {
  const products = await listProducts();
  const result = await products;
  return <h1>{JSON.stringify(result)}</h1>;
}
