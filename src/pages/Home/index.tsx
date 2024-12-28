import { JSX } from "preact/jsx-runtime";
import FfMap from "../../assets/maps/2025_FF44_MAP_NEW_DAY1.jpg";
import style from "./style.module.css";
import { useEffect, useRef, useState } from "preact/hooks";
import { ImageSize } from "../../types/ImageSize";
import { TargetingBoxDimension } from "../../types/TargetingBoxDimension";

export function Home() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [targetingBoxDimension, setTargetingBoxDimension] =
    useState<TargetingBoxDimension>({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (imgRef.current) {
      const targetingBoxRelativeDimension: TargetingBoxDimension =
        getTargetingBoxRelativeDimension(
          {
            width: imgRef.current.naturalWidth,
            height: imgRef.current.naturalHeight,
          },
          { width: imgRef.current.width, height: imgRef.current.height },

          {
            x: 1609,
            y: 1080,
            width: 41,
            height: 51,
          },
        );

      setTargetingBoxDimension(targetingBoxRelativeDimension);
    }
  }, [imgRef.current]);

  const FfImage = (): JSX.Element => (
    <img
      ref={imgRef}
      src={FfMap}
      alt="Fancy Frontier Map"
      height="100%"
      width="100%"
    ></img>
  );

  const TargetingBox = (): JSX.Element => (
    <a href={"https://www.google.com"}>
      <div
        class={style.targetingBox}
        style={{
          left: targetingBoxDimension.x,
          top: targetingBoxDimension.y,
          width: targetingBoxDimension.width,
          height: targetingBoxDimension.height,
        }}
      />
    </a>
  );

  return (
    <div className={style.container}>
      <TargetingBox />
      <FfImage />
    </div>
  );
}

function getTargetingBoxRelativeDimension(
  imageAbsoluteSize: ImageSize,
  imageCurrentSize: ImageSize,
  targetingBoxAbsoluteDimension: TargetingBoxDimension,
): TargetingBoxDimension {
  // do not proceed if absolute size is 0
  if (imageAbsoluteSize.width === 0 || imageAbsoluteSize.height === 0) {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
  }

  // Calculate scaling factors for both width and height
  const scaleX = imageCurrentSize.width / imageAbsoluteSize.width;
  const scaleY = imageCurrentSize.height / imageAbsoluteSize.height;

  // Scale the targeting box dimensions based on the image's scaling
  const scaledX = targetingBoxAbsoluteDimension.x * scaleX;
  const scaledY = targetingBoxAbsoluteDimension.y * scaleY;
  const scaledWidth = targetingBoxAbsoluteDimension.width * scaleX;
  const scaledHeight = targetingBoxAbsoluteDimension.height * scaleY;

  // Return the scaled targeting box as the result
  return {
    x: scaledX,
    y: scaledY,
    width: scaledWidth,
    height: scaledHeight,
  };
}
