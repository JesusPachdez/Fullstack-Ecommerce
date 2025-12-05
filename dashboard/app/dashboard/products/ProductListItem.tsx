import { Card } from "@/components/ui/card/index.web";
import { Text } from "@/components/ui/text/index.web";
import { Heading } from "@/components/ui/heading/index.web";
import { Image } from "@/components/ui/image/index.web";
import Link from "next/link";
import { memo } from "react";

export default memo(function ProductListItem({ product }: { product: any }) {
  return (
    <Link href={`/product/${product.id}`} className="flex flex-1 min-w-[300px]">
      <Card className="p-5 rounded-lg flex-1 bg-white w-full">
        <Image
          source={{
            uri: product.image,
          }}
          className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
          alt={`${product.name} image`}
          resizeMode="contain"
        />
        <Text className="text-sm font-normal mb-2 text-typography-700 text-black">
          {product.name}
        </Text>
        <Heading size="md" className="mb-4 text-black">
          {`$${product.price}`}
        </Heading>
      </Card>
    </Link>
  );
});
