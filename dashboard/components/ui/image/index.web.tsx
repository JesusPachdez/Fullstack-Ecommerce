import React from "react";
import { tva } from "@gluestack-ui/utils/nativewind-utils";
import type { VariantProps } from "@gluestack-ui/utils/nativewind-utils";

const imageStyle = tva({
  base: "max-w-full",
  variants: {
    size: {
      "2xs": "h-6 w-6",
      xs: "h-10 w-10",
      sm: "h-16 w-16",
      md: "h-20 w-20",
      lg: "h-24 w-24",
      xl: "h-32 w-32",
      "2xl": "h-64 w-64",
      full: "h-full w-full",
      none: "",
    },
  },
});

type ImageProps = VariantProps<typeof imageStyle> &
  React.ComponentPropsWithoutRef<"img"> & {
    source?: { uri: string };
    resizeMode?: "contain" | "cover" | "stretch" | "center";
  };

const Image = React.forwardRef<
  HTMLImageElement,
  ImageProps & { className?: string }
>(function Image(
  { size = "md", className, source, resizeMode, alt, ...props },
  ref
) {
  // Convert React Native style source prop to web src prop
  const src = source?.uri || (props as any).src;

  // Convert resizeMode to object-fit CSS
  const objectFit =
    resizeMode === "contain"
      ? "object-contain"
      : resizeMode === "cover"
      ? "object-cover"
      : resizeMode === "stretch"
      ? "object-fill"
      : "object-contain";

  return (
    <img
      src={src}
      alt={alt}
      className={`${imageStyle({ size, class: className })} ${objectFit}`}
      {...(props as any)}
      ref={ref}
    />
  );
});

Image.displayName = "Image";
export { Image };
