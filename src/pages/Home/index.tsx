import { JSX } from "preact/jsx-runtime";
import FfMap from "../../assets/maps/2025_FF44_MAP_NEW_DAY1.jpg";
import style from "./style.module.css";
import { useEffect, useRef, useState } from "preact/hooks";
import { ImageSize } from "../../types/ImageSize";
import {
  TargetingBoxDimension,
  TargetingBoxDimensionWithId,
} from "../../types/TargetingBoxDimension";
import { Ff44MapData } from "../../data/F444MapData";

export function Home() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [targetingBoxDimensionWithIdList, setTargetingBoxDimensionWithIdList] =
    useState<Array<TargetingBoxDimensionWithId>>([]);

  useEffect(() => {
    if (imgRef.current) {
      const imageAbsoluteSize: ImageSize = {
        width: imgRef.current.naturalWidth,
        height: imgRef.current.naturalHeight,
      };
      const imageCurrentSize: ImageSize = {
        width: imgRef.current.width,
        height: imgRef.current.height,
      };

      const targetingBoxRelativeDimensionWithIdList: Array<TargetingBoxDimensionWithId> =
        Ff44MapData.map((e) => {
          const targetingBoxRelativeDimension: TargetingBoxDimension =
            getTargetingBoxRelativeDimension(
              imageAbsoluteSize,
              imageCurrentSize,
              e.dimension,
            );

          return { ...targetingBoxRelativeDimension, id: e.id };
        });

      setTargetingBoxDimensionWithIdList(
        targetingBoxRelativeDimensionWithIdList,
      );
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

  const TargetingBoxes = (): Array<JSX.Element> =>
    Ff44MapData.map((ff44MapData) => {
      const targetingBoxDimensionWithId:
        | TargetingBoxDimensionWithId
        | undefined = targetingBoxDimensionWithIdList.find(
        (targetingBoxDimensionWithId) =>
          ff44MapData.id === targetingBoxDimensionWithId.id,
      );

      if (targetingBoxDimensionWithId == undefined) {
        return <></>;
      }

      return (
        <a href={ff44MapData.boothLink}>
          <div
            class={style.targetingBox}
            style={{
              left: targetingBoxDimensionWithId.x,
              top: targetingBoxDimensionWithId.y,
              width: targetingBoxDimensionWithId.width,
              height: targetingBoxDimensionWithId.height,
            }}
          />
        </a>
      );
    });

  return (
    <div className={style.container}>
      {TargetingBoxes()}
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
