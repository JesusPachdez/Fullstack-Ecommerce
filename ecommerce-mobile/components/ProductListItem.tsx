import { View, Text, Image } from "react-native";

export default function ProductListItem({
  product,
}: {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}) {
  return (
    <View>
      <Image
        source={{ uri: product.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text style={{ fontSize: 16, fontWeight: "500" }}>{product.name}</Text>
      <Text style={{ fontSize: 16, fontWeight: "500" }}>{product.price}</Text>
    </View>
  );
}
