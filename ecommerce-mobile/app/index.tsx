import { FlatList } from "react-native";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";

export default function Home() {
  return (
    <FlatList
      data={products}
      numColumns={2}
      key={`flatlist-${2}`}
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
}
