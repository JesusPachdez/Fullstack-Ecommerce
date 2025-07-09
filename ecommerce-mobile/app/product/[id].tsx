import { Text } from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";
import products from "@/assets/products.json";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return <Text>Product Details {product.name}</Text>;
}
