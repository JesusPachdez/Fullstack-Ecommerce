import { Text } from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  return <Text>Product Details {id}</Text>;
}
