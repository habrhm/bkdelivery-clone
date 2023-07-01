import { Box } from "@mui/material";
import Image from "next/image";
import * as React from "react";

import { useImageDimension } from "@/hooks/useImageDimension";

interface Props {
  url: string;
  alt: string;
}

export const ProductImage = React.memo(function ProductImage({
  url,
  alt,
}: Props) {
  const { containerRef, imageDimension } = useImageDimension({
    ratio: 22 / 30,
  });

  return (
    <Box sx={{ maxWidth: { xs: "290px", lg: "auto" } }} ref={containerRef}>
      <Image
        src={url}
        width={imageDimension.width}
        height={imageDimension.height}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
});
