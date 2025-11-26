const API_URL = process.env.EXPO_PUBLIC_API_URL;
import { useAuth } from "@/store/authStore";

export async function createOrder(items: any[]) {
  const token = useAuth.getState().token;

  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ order: {}, items }),
  });
  const data = await response.json();
  if (!response.ok) {
    console.log(data);
    throw new Error("Failed to create order");
  }
  return data;
}
