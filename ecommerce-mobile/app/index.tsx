import { FlatList, useWindowDimensions } from "react-native";
import { memo, useEffect, useState } from "react";
import ProductListItem from "../components/ProductListItem";
import { listProducts } from "@/api/products";

export default memo(function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await listProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  const { width } = useWindowDimensions();
  const numberOfColumns =
    width > 1200 ? 4 : width > 850 ? 3 : width > 400 ? 2 : 1;
  return (
    <FlatList
      key={numberOfColumns}
      data={products}
      numColumns={numberOfColumns}
      contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
      {...(numberOfColumns > 1 && { columnWrapperClassName: "gap-2" })}
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
});
