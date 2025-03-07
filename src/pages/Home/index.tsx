import MAP from '../../assets/maps/2025_CWTxACCF.jpg';
import { useGroupDataList } from '../../global/GroupDataList';
import * as groupDataService from '../../services/GroupDataService';
import * as mapRecordService from '../../services/MapRecordService';
import { BoothActiveDay } from '../../types/BoothActiveDay';
import { BoothDataOnMap } from '../../types/BoothData';
import { GroupData } from '../../types/GroupData';
import { ImageSize } from '../../types/ImageSize';
import { Marker } from '../../types/Marker';
import {
  TargetingBoxDimension,
  TargetingBoxDimensionWithGroupId,
} from '../../types/TargetingBoxDimension';
import { ValidZoomInValue } from '../../types/ZoomInValue';
import style from './style.module.css';
import { JSX } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

const DEFAULT_IMAGE_SIZE: ImageSize = { width: 3508, height: 2431 };

type HomeProps = {
  activeDay: BoothActiveDay;
  zoomInValue: ValidZoomInValue;
  onBoothInfoClicked: (groupId: string) => void;
};

export function Home(props: HomeProps): JSX.Element {
  // group data related
  const groupDataList: Array<GroupData> = useGroupDataList();

  // active day map data related
  const [activeBoothDataOnMapList, setActiveBoothDataOnMapList] = useState<
    Array<BoothDataOnMap>
  >([]);

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
      groupDataService.getBoothDataListOnMap(groupDataList, props.activeDay),
    );
  }, [props.activeDay, groupDataList]);

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
    } else {
    }
  }, [imgRef.current]);

  const FfImage = (): JSX.Element => {
    return (
      <div
        style={{
          width: DEFAULT_IMAGE_SIZE.width * props.zoomInValue,
          height: DEFAULT_IMAGE_SIZE.height * props.zoomInValue,
        }}
      >
        <img
          ref={imgRef}
          src={imgSrc}
          alt="Doujin Map"
          style={{
            width: `${naturalWidth * props.zoomInValue}px`,
            height: `${naturalHeight * props.zoomInValue}px`, // Maintain aspect ratio
            transition: 'width 0.3s ease-in-out', // Smooth transition for zoom effect
          }}
        ></img>
      </div>
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
            outline: `${getOutlineEmByZoomInValue(props.zoomInValue * 1)}em solid`,
            outlineColor: `gold`,
          }}
          onClick={() => {
            props.onBoothInfoClicked(boothDataOnMap.groupId);
          }}
        />
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

function getColorByMarker(marker: Marker): string {
  switch (marker) {
    case Marker.plannedToGo:
      return '#ff0000b3';
    case Marker.alreadyGone:
      return '#008000b3';
    case Marker.none:
      return '#808080b3';
  }
}

function getOutlineEmByZoomInValue(zoomInValue: number): number {
  return zoomInValue * 0.2;
}

function getImageSrcByActiveDay(activeDay: BoothActiveDay): string {
  switch (activeDay) {
    case 'CWTxACCF_DAY_1':
      return MAP;
    case 'CWTxACCF_DAY_2':
      return MAP;
    case 'CWTxACCF_DAY_3':
      return MAP;
  }
}
