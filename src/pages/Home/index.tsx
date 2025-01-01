import { JSX } from "preact";
import FfMapDay1 from "../../assets/maps/2025_FF44_MAP_NEW_DAY1.jpg";
import FfMapDay2 from "../../assets/maps/2025_FF44_MAP_NEW_DAY2.jpg";
import FfMapDay3 from "../../assets/maps/2025_FF44_MAP_NEW_DAY3.jpg";
import style from "./style.module.css";
import { useEffect, useRef, useState } from "preact/hooks";
import { ImageSize } from "../../types/ImageSize";
import {
  TargetingBoxDimension,
  TargetingBoxDimensionWithGroupId,
} from "../../types/TargetingBoxDimension";
import { BoothDialog } from "../../components/BoothDialog";
import * as mapRecordService from "../../services/MapRecordService";
import { Marker } from "../../types/Marker";
import { CURRENT_EVENT_TYPE } from "../../types/EventType";
import { Point } from "../../types/Point";
import { BoothActiveDay } from "../../types/BoothActiveDay";
import {
  BoothDataOnMap,
  DEFAULT_BOOTH_DATA_ON_MAP,
} from "../../types/BoothData";
import { getFf44BoothDataOnMapByActiveDay } from "../../data/Ff44MapData";
import { ValidZoomInValue } from "../../types/ZoomInValue";

type HomeProps = {
  activeDay: BoothActiveDay;
  zoomInValue: ValidZoomInValue;
};

export function Home(props: HomeProps): JSX.Element {
  // active day map data related
  const [activeBoothDataOnMapList, setActiveBoothDataOnMapList] = useState<
    Array<BoothDataOnMap>
  >(getFf44BoothDataOnMapByActiveDay(props.activeDay));

  // BoothDialog related
  const [openBoothDialog, setOpenBoothDialog] = useState<boolean>(false);
  const [activeBoothDataOnMap, setActiveBoothDataOnMap] =
    useState<BoothDataOnMap>(DEFAULT_BOOTH_DATA_ON_MAP);
  const [boothDialogPoint, setBoothDialogPoint] = useState<Point>({
    x: 0,
    y: 0,
  });

  // map image related
  const imgRef = useRef<HTMLImageElement>(null);
  const [naturalWidth, setNaturalWidth] = useState(0);
  const [naturalHeight, setNaturalHeight] = useState(0);
  const [imgSrc, setImgSrc] = useState<string>(
    getImageSrcByActiveDay(props.activeDay),
  );
  const [
    targetingBoxDimensionWithGroupIdList,
    setTargetingBoxDimensionWithGroupIdList,
  ] = useState<Array<TargetingBoxDimensionWithGroupId>>([]);

  // on active day change
  useEffect(() => {
    setImgSrc(getImageSrcByActiveDay(props.activeDay));
    setActiveBoothDataOnMapList(
      getFf44BoothDataOnMapByActiveDay(props.activeDay),
    );
  }, [props.activeDay]);

  // on image size change
  useEffect(() => {
    if (imgRef.current !== null) {
      setNaturalWidth(imgRef.current.naturalWidth);
      setNaturalHeight(imgRef.current.naturalHeight);

      const imageAbsoluteSize: ImageSize = {
        width: imgRef.current.naturalWidth,
        height: imgRef.current.naturalHeight,
      };
      const imageCurrentSize: ImageSize = {
        width: imgRef.current.width,
        height: imgRef.current.height,
      };

      const TargetingBoxRelativeDimensionWithGroupIdList: Array<TargetingBoxDimensionWithGroupId> =
        activeBoothDataOnMapList.map((e) => {
          const targetingBoxRelativeDimension: TargetingBoxDimension =
            getTargetingBoxRelativeDimension(
              imageAbsoluteSize,
              imageCurrentSize,
              e.dimension,
            );

          return { ...targetingBoxRelativeDimension, groupId: e.groupId };
        });

      setTargetingBoxDimensionWithGroupIdList(
        TargetingBoxRelativeDimensionWithGroupIdList,
      );
    }
  }, [imgRef.current]);

  const FfImage = (): JSX.Element => {
    return (
      <img
        ref={imgRef}
        src={imgSrc}
        alt="Fancy Frontier Map"
        style={{
          width: `${naturalWidth * props.zoomInValue}px`,
          height: `${naturalHeight * props.zoomInValue}px`, // Maintain aspect ratio
          transition: "width 0.3s ease-in-out", // Smooth transition for zoom effect
        }}
      ></img>
    );
  };

  const TargetingBoxes = (): Array<JSX.Element> =>
    activeBoothDataOnMapList.map((boothDataOnMap) => {
      const targetingBoxDimensionWithId:
        | TargetingBoxDimensionWithGroupId
        | undefined = targetingBoxDimensionWithGroupIdList.find(
        (targetingBoxDimensionWithGroupId) =>
          boothDataOnMap.groupId === targetingBoxDimensionWithGroupId.groupId,
      );

      if (targetingBoxDimensionWithId == undefined) {
        return <></>;
      }

      const marker: Marker = mapRecordService.getMarker(
        CURRENT_EVENT_TYPE,
        props.activeDay,
        boothDataOnMap.groupId,
      );

      return (
        <div
          class={style.targetingBox}
          style={{
            backgroundColor: getColorByMarker(marker),
            left: targetingBoxDimensionWithId.x,
            top: targetingBoxDimensionWithId.y,
            width: targetingBoxDimensionWithId.width,
            height: targetingBoxDimensionWithId.height,
          }}
          onClick={() => {
            setActiveBoothDataOnMap(boothDataOnMap);
            setBoothDialogPoint({
              x: targetingBoxDimensionWithId.x,
              y: targetingBoxDimensionWithId.y,
            });
            setOpenBoothDialog(true);
          }}
        />
      );
    });

  return (
    <div className={style.container}>
      <BoothDialog
        boothDataOnMap={activeBoothDataOnMap}
        point={boothDialogPoint}
        openDialog={openBoothDialog}
        closeDialog={() => setOpenBoothDialog(false)}
        setMarker={(marker: Marker) => {
          mapRecordService.setMarker(
            CURRENT_EVENT_TYPE,
            props.activeDay,
            activeBoothDataOnMap.groupId,
            marker,
          );
        }}
      />
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

function getColorByMarker(marker: Marker): string {
  switch (marker) {
    case Marker.plannedToGo:
      return "#ff0000b3";
    case Marker.alreadyGone:
      return "#008000b3";
    case Marker.none:
      return "transparent";
  }
}

function getImageSrcByActiveDay(activeDay: BoothActiveDay): string {
  switch (activeDay as BoothActiveDay) {
    case BoothActiveDay.day1:
      return FfMapDay1;
    case BoothActiveDay.day2:
      return FfMapDay2;
    case BoothActiveDay.day3:
      return FfMapDay3;
  }
}
