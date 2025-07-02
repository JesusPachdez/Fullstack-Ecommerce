import { View, Text, FlatList, Image } from "react-native";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";
import { Button, ButtonText } from "@/components/ui/button";

export default function Home() {
  return (
    <Button>
      <ButtonText>Click me</ButtonText>
    </Button>
  );
  // return (
  //   <FlatList
  //     data={products}
  //     renderItem={({ item }) => <ProductListItem product={item} />}
  //   />
  // );
}
