import * as React from "react";

interface Props {
  fixedHeight?: number;
  ratio?: number;
}

export const useImageDimension = ({ fixedHeight, ratio = 0.25 }: Props) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const [imageUrl, setImageUrl] = React.useState("");
  const [imageDimension, setImageDimension] = React.useState({
    width: 0,
    height: 0,
  });

  const handleResize = React.useCallback(() => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      const height = fixedHeight ?? Math.floor(width * ratio);

      setImageUrl(`https://placehold.co/${width}x${height}.png`);
      setImageDimension({ width, height });
    }
  }, [fixedHeight, ratio]);

  React.useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
  }, [handleResize]);

  return { containerRef, imageDimension, imageUrl };
};
