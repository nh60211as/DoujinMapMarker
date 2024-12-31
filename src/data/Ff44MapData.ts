import { BoothActiveDay, MapData } from "../types/MapData";
import { Ff44MapData_A } from "./Ff44MapData_A";
import { Ff44MapData_S } from "./Ff44MapData_S";
import { Ff44MapData_T } from "./Ff44MapData_T";

const Ff44MapData: Array<MapData> = Ff44MapData_A.concat(
  Ff44MapData_S,
  Ff44MapData_T,
);

export function getFf44MapDataByActiveDay(
  boothActiveDays: BoothActiveDay,
): Array<MapData> {
  return Ff44MapData.filter((e) => e.boothActiveDays.includes(boothActiveDays));
}
