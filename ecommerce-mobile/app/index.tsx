import { FlatList } from "react-native";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";

export default function Home() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
}
