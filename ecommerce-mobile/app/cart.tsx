import { useCart } from "@/store/cartStore";
import { FlatList } from "react-native";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";

export default function CartScreen() {
  const cartItems = useCart((state) => state.items);

  console.log(JSON.stringify(cartItems, null, 2));

  return (
    <FlatList
      data={cartItems}
      contentContainerClassName="gap-2 max-w-[960px] w-full mx-auto"
      renderItem={({ item }) => (
        <HStack className="bg-white p-3">
          <VStack space="sm">
            <Text bold>{item.product.name}</Text>
            <Text>{item.product.price}</Text>
          </VStack>
          <Text className="ml-auto">{item.quantity}</Text>
        </HStack>
      )}
    />
  );
}
