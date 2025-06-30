import { View, Text, FlatList, Image } from "react-native";
import products from "../assets/products.json";

export default function Home() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View>
          <Image
            source={{ uri: item.image }}
            style={{ width: 100, height: 100 }}
          />
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
      )}
    />
  );
}
