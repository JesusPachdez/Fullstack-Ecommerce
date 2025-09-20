import { FlatList, useWindowDimensions } from "react-native";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";
import { Platform } from "react-native";

export default function Home() {
  const { width } = useWindowDimensions();
  const numberOfColumns = width > 700 ? 3 : 2;
  return (
    <FlatList
      key={numberOfColumns}
      data={products}
      numColumns={numberOfColumns}
      contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
      columnWrapperClassName="gap-2"
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
}
