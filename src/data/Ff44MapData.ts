import { BoothActiveDay, MapData } from "../types/MapData";
import { Ff44MapData_A } from "./Ff44MapData_A";
import { Ff44MapData_B } from "./Ff44MapData_B";
import { Ff44MapData_S } from "./Ff44MapData_S";
import { Ff44MapData_T } from "./Ff44MapData_T";

const Ff44MapData: Array<MapData> = ([] as Array<MapData>).concat(
  Ff44MapData_A,
  Ff44MapData_B,
  Ff44MapData_S,
  Ff44MapData_T,
);

export function getFf44MapDataByActiveDay(
  boothActiveDays: BoothActiveDay,
): Array<MapData> {
  return Ff44MapData.filter((e) => e.boothActiveDays.includes(boothActiveDays));
}
