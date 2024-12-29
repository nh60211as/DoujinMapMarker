import { BoothActiveDay, MapData } from "../types/MapData";

const Ff44MapData: Array<MapData> = [
  {
    id: "32014cff102c4d70a654d6b02d3e7276",
    dimension: {
      x: 1609,
      y: 1080,
      width: 41,
      height: 51,
    },
    boothName: "台北人",
    boothNumbers: ["S03", "S04"],
    boothActiveDays: [BoothActiveDay.day1],
    boothLink: undefined,
  },
  {
    id: "2c2879ac43364e738e9dd3737d1232b0",
    dimension: {
      x: 1566,
      y: 760,
      width: 41,
      height: 27,
    },
    boothName: "台北人",
    boothNumbers: ["S33"],
    boothActiveDays: [BoothActiveDay.day2],
    boothLink: undefined,
  },
  {
    id: "c8c7be762d444bb8b8f3b14bedda760a",
    dimension: {
      x: 1381,
      y: 548,
      width: 41,
      height: 51,
    },
    boothName: "壞菇社",
    boothNumbers: ["T25", "T26"],
    boothActiveDays: [
      BoothActiveDay.day1,
      BoothActiveDay.day2,
      BoothActiveDay.day3,
    ],
    boothLink: "https://www.facebook.com/MARK4why",
  },
];

export function getFf44MapDataByActiveDay(
  boothActiveDays: BoothActiveDay,
): Array<MapData> {
  return Ff44MapData.filter((e) => e.boothActiveDays.includes(boothActiveDays));
}
