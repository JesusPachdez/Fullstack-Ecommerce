import {
  ActivityIndicator,
  FlatList,
  Text,
  useWindowDimensions,
} from "react-native";
import { memo } from "react";
import ProductListItem from "../components/ProductListItem";
import { listProducts } from "@/api/products";
import { useQuery } from "@tanstack/react-query";

export default memo(function Home() {
  const { width } = useWindowDimensions();
  const numberOfColumns =
    width > 1200 ? 4 : width > 850 ? 3 : width > 400 ? 2 : 1;

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: listProducts,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <FlatList
      key={numberOfColumns}
      data={data}
      numColumns={numberOfColumns}
      contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
      {...(numberOfColumns > 1 && { columnWrapperClassName: "gap-2" })}
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
});
