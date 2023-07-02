import { Link as MaterialLink, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { useImageDimension } from "@/hooks/useImageDimension";

interface Props {
  img: string;
  url: string;
  isDragging: boolean;
}

export const NewsItem = React.memo(function NewsItem({
  img,
  url,
  isDragging,
}: Props) {
  const { containerRef, imageDimension } = useImageDimension({ ratio: 16 / 5 });

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (isDragging) {
        e.preventDefault();
      }
    },
    [isDragging]
  );

  return (
    <Stack ref={containerRef} width="100%">
      <Link href={url} passHref legacyBehavior>
        <MaterialLink onClick={handleClick} underline="none">
          <Image
            src={img}
            width={imageDimension.width}
            height={imageDimension.height}
            alt="a"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </MaterialLink>
      </Link>
    </Stack>
  );
});
