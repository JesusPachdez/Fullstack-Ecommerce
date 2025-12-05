const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function listProducts() {
  const response = await fetch(`${API_URL}/products`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Error fetching products");
  }

  return data;
}

export async function fetchProductById(id: number) {
  const response = await fetch(`${API_URL}/products/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Error fetching product");
  }

  return data;
}
