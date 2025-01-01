import { BoothActiveDay } from "../types/BoothActiveDay";
import { BoothData, BoothDataOnMap } from "../types/BoothData";
import { GroupData } from "../types/GroupData";
import { boothNumberListToTargetingBoxDimension } from "../utils/BoothNumberUtils";
import { defined } from "../utils/TypeUtils";
import { FF44_GROUP_DATA_DAY_1_ROW_A } from "./ff44/day1/Ff44GroupDataDay1RowA";
import { FF44_GROUP_DATA_DAY_1_ROW_B } from "./ff44/day1/Ff44GroupDataDay1RowB";
import { FF44_GROUP_DATA_DAY_1_ROW_C } from "./ff44/day1/Ff44GroupDataDay1RowC";
import { FF44_GROUP_DATA_DAY_1_ROW_D } from "./ff44/day1/Ff44GroupDataDay1RowD";
import { FF44_GROUP_DATA_DAY_1_ROW_E } from "./ff44/day1/Ff44GroupDataDay1RowE";
import { FF44_GROUP_DATA_DAY_1_ROW_F } from "./ff44/day1/Ff44GroupDataDay1RowF";
import { FF44_GROUP_DATA_DAY_1_ROW_G } from "./ff44/day1/Ff44GroupDataDay1RowG";
import { FF44_GROUP_DATA_DAY_1_ROW_H } from "./ff44/day1/Ff44GroupDataDay1RowH";
import { FF44_GROUP_DATA_DAY_1_ROW_I } from "./ff44/day1/Ff44GroupDataDay1RowI";
import { FF44_GROUP_DATA_DAY_1_ROW_J } from "./ff44/day1/Ff44GroupDataDay1RowJ";
import { FF44_GROUP_DATA_DAY_1_ROW_K } from "./ff44/day1/Ff44GroupDataDay1RowK";
import { FF44_GROUP_DATA_DAY_1_ROW_L } from "./ff44/day1/Ff44GroupDataDay1RowL";
import { FF44_GROUP_DATA_DAY_1_ROW_M } from "./ff44/day1/Ff44GroupDataDay1RowM";

export const FF44_GROUP_DATA: Array<GroupData> = (
  [] as Array<GroupData>
).concat(
  FF44_GROUP_DATA_DAY_1_ROW_A,
  FF44_GROUP_DATA_DAY_1_ROW_B,
  FF44_GROUP_DATA_DAY_1_ROW_C,
  FF44_GROUP_DATA_DAY_1_ROW_D,
  FF44_GROUP_DATA_DAY_1_ROW_E,
  FF44_GROUP_DATA_DAY_1_ROW_F,
  FF44_GROUP_DATA_DAY_1_ROW_G,
  FF44_GROUP_DATA_DAY_1_ROW_H,
  FF44_GROUP_DATA_DAY_1_ROW_I,
  FF44_GROUP_DATA_DAY_1_ROW_J,
  FF44_GROUP_DATA_DAY_1_ROW_K,
  FF44_GROUP_DATA_DAY_1_ROW_L,
  FF44_GROUP_DATA_DAY_1_ROW_M,
  [
    {
      groupId: "aa35afe73cda4d4fa51534adc75a66f8",
      groupName: "吹雪翻譯",
      groupLink: "https://www.facebook.com/FubukiTranslate",
      boothList: [
        {
          activeDay: BoothActiveDay.day1,
          boothNumberList: [{ row: "N", number: 36 }],
        },
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [{ row: "O", number: 10 }],
        },
      ],
    },
    {
      groupId: "bb3f6e20fd3f4399b303809d74cb0a13",
      groupName: "筑波的快樂輻射森林",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day1,
          boothNumberList: [
            { row: "N", number: 31 },
            { row: "N", number: 32 },
          ],
        },
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [{ row: "O", number: 14 }],
        },
      ],
    },
    {
      groupId: "ae60c5b4541d4cd29be5e44abadc50b9",
      groupName: "魔法燒酒",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day1,
          boothNumberList: [
            { row: "N", number: 41 },
            { row: "N", number: 42 },
          ],
        },
      ],
    },
    {
      groupId: "32014cff102c4d70a654d6b02d3e7276",
      groupName: "台北人",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day1,
          boothNumberList: [
            { row: "S", number: 3 },
            { row: "S", number: 4 },
          ],
        },
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [{ row: "S", number: 33 }],
        },
      ],
    },
    {
      groupId: "4d835709a4d7434fa8508ef6e5c5ee4e",
      groupName: "企鵝冰屋",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day1,
          boothNumberList: [{ row: "S", number: 5 }],
        },
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [{ row: "S", number: 30 }],
        },
      ],
    },
    {
      groupId: "4769e8b865024b45a9da77ee452e6f86",
      groupName: "MAIDOLL",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day1,
          boothNumberList: [
            { row: "S", number: 23 },
            { row: "S", number: 24 },
          ],
        },
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [
            { row: "S", number: 23 },
            { row: "S", number: 24 },
          ],
        },
      ],
    },
    {
      groupId: "9a8cf144d75140f885d8a64a76c7e76f",
      groupName: "新生ロリショタ",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day1,
          boothNumberList: [
            { row: "S", number: 33 },
            { row: "S", number: 34 },
          ],
        },
      ],
    },
    {
      groupId: "c8c7be762d444bb8b8f3b14bedda760a",
      groupName: "壞菇社",
      groupLink: "https://www.facebook.com/MARK4why",
      boothList: [
        {
          activeDay: BoothActiveDay.day1,
          boothNumberList: [
            { row: "T", number: 25 },
            { row: "T", number: 26 },
          ],
        },
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [
            { row: "T", number: 25 },
            { row: "T", number: 26 },
          ],
        },
        {
          activeDay: BoothActiveDay.day3,
          boothNumberList: [
            { row: "T", number: 25 },
            { row: "T", number: 26 },
          ],
        },
      ],
    },
    {
      groupId: "c89fa859a64243feadb66b23b8f79b57",
      groupName: "迷你翠",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day1,
          boothNumberList: [{ row: "U", number: 18 }],
        },
      ],
    },
    {
      groupId: "a89caa6cd4f04caa92c671f99f6306a7",
      groupName: "Hosto",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [
            { row: "B", number: 5 },
            { row: "B", number: 6 },
          ],
        },
        {
          activeDay: BoothActiveDay.day3,
          boothNumberList: [
            { row: "B", number: 5 },
            { row: "B", number: 6 },
          ],
        },
      ],
    },
    {
      groupId: "b0cd29b4b6f54fdb9364e9611b336bc2",
      groupName: "Eroge Japan",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [{ row: "B", number: 9 }],
        },
        {
          activeDay: BoothActiveDay.day3,
          boothNumberList: [{ row: "B", number: 10 }],
        },
      ],
    },
    {
      groupId: "c299c53ff49b4e81b3270b0fdd2b0bb0",
      groupName: "茶の魔王",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [{ row: "E", number: 26 }],
        },
        {
          activeDay: BoothActiveDay.day3,
          boothNumberList: [{ row: "I", number: 7 }],
        },
      ],
    },
    {
      groupId: "24778b054f2144ad8c41c975aea54809",
      groupName: "超大玉米力",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [{ row: "F", number: 31 }],
        },
        {
          activeDay: BoothActiveDay.day3,
          boothNumberList: [{ row: "F", number: 5 }],
        },
      ],
    },
    {
      groupId: "64f8d33654af4ca19dfc835d0fd88f23",
      groupName: "天之火",
      groupLink: "https://www.facebook.com/@nnnnoooo007",
      boothList: [
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [
            { row: "H", number: 1 },
            { row: "H", number: 2 },
          ],
        },
        {
          activeDay: BoothActiveDay.day3,
          boothNumberList: [
            { row: "H", number: 1 },
            { row: "H", number: 2 },
          ],
        },
      ],
    },
    {
      groupId: "c21a35005f18474daa2b75396175dbb0",
      groupName: "Karen",
      groupLink: "https://x.com/chung791114",
      boothList: [
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [{ row: "I", number: 19 }],
        },
        {
          activeDay: BoothActiveDay.day3,
          boothNumberList: [{ row: "I", number: 11 }],
        },
      ],
    },
    {
      groupId: "f19c32e8b5f14f70aba1d5ae1c3946c7",
      groupName: "我老婆今年8歲",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [{ row: "M", number: 29 }],
        },
        {
          activeDay: BoothActiveDay.day3,
          boothNumberList: [{ row: "A", number: 17 }],
        },
      ],
    },
    {
      groupId: "a276d1b948e047d4b070762f030baea2",
      groupName: "虛力中年",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [{ row: "M", number: 37 }],
        },
        {
          activeDay: BoothActiveDay.day3,
          boothNumberList: [{ row: "M", number: 37 }],
        },
      ],
    },
    {
      groupId: "50994776c8d0432f8f4f58b1ba6f0b71",
      groupName: "non_nonsummerjack",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [
            { row: "R", number: 45 },
            { row: "R", number: 46 },
          ],
        },
        {
          activeDay: BoothActiveDay.day3,
          boothNumberList: [
            { row: "R", number: 45 },
            { row: "R", number: 46 },
          ],
        },
      ],
    },
    {
      groupId: "4f3d1cbccebe4134a04213ee759711f5",
      groupName: "龍龍的畫畫倉庫",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [
            { row: "S", number: 25 },
            { row: "S", number: 26 },
          ],
        },
        {
          activeDay: BoothActiveDay.day3,
          boothNumberList: [
            { row: "S", number: 25 },
            { row: "S", number: 26 },
          ],
        },
      ],
    },
    {
      groupId: "b5473828516b4af0b184418fe632d7c6",
      groupName: "百合室內盆栽",
      groupLink: "https://www.facebook.com/ZhongIN9611",
      boothList: [
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [{ row: "S", number: 27 }],
        },
        {
          activeDay: BoothActiveDay.day3,
          boothNumberList: [{ row: "S", number: 27 }],
        },
      ],
    },
    {
      groupId: "2bda417b01354a61ae4b55bfe52b9857",
      groupName: "鴨子塗鴉",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [{ row: "S", number: 31 }],
        },
        {
          activeDay: BoothActiveDay.day3,
          boothNumberList: [
            { row: "S", number: 31 },
            { row: "S", number: 32 },
          ],
        },
      ],
    },
    {
      groupId: "7fac37297b7e4d9d94034e99fcad9fdf",
      groupName: "にゃんション-貓宅",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [{ row: "T", number: 10 }],
        },
        {
          activeDay: BoothActiveDay.day3,
          boothNumberList: [
            { row: "T", number: 7 },
            { row: "T", number: 8 },
          ],
        },
      ],
    },
    {
      groupId: "6d3d60c16fb64a469ac53b5ec482800a",
      groupName: "芋煮坊",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [{ row: "T", number: 17 }],
        },
        {
          activeDay: BoothActiveDay.day3,
          boothNumberList: [{ row: "T", number: 17 }],
        },
      ],
    },
    {
      groupId: "1ca0ace21d70479a9c665cfa6efcada2",
      groupName: "AJ4N3",
      groupLink: "https://x.com/aj4n3_a4",
      boothList: [
        {
          activeDay: BoothActiveDay.day2,
          boothNumberList: [{ row: "T", number: 27 }],
        },
        {
          activeDay: BoothActiveDay.day3,
          boothNumberList: [
            { row: "T", number: 27 },
            { row: "T", number: 28 },
          ],
        },
      ],
    },
    {
      groupId: "3a2aaafd0b7f410c88ddff6b9156b4ac",
      groupName: "小撿存檔點",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day3,
          boothNumberList: [
            { row: "I", number: 13 },
            { row: "I", number: 14 },
          ],
        },
      ],
    },
    {
      groupId: "bf541c31178243a1ae4c12d779df2e65",
      groupName: "Glassturz",
      groupLink: null,
      boothList: [
        {
          activeDay: BoothActiveDay.day3,
          boothNumberList: [
            { row: "L", number: 9 },
            { row: "L", number: 10 },
          ],
        },
      ],
    },
  ],
);

function getFf44BoothDataByActiveDay(
  boothActiveDay: BoothActiveDay,
): Array<BoothData> {
  return FF44_GROUP_DATA.filter((groupData) =>
    groupData.boothList.some((booth) => booth.activeDay === boothActiveDay),
  ).map((groupData) => {
    return {
      groupId: groupData.groupId,
      groupName: groupData.groupName,
      groupLink: groupData.groupLink,
      booth: defined(
        groupData.boothList.find((booth) => booth.activeDay === boothActiveDay),
      ),
    };
  });
}

export function getFf44BoothDataOnMapByActiveDay(
  boothActiveDay: BoothActiveDay,
): Array<BoothDataOnMap> {
  return getFf44BoothDataByActiveDay(boothActiveDay).map((boothData) => {
    return {
      ...boothData,
      dimension: boothNumberListToTargetingBoxDimension(
        boothData.booth.boothNumberList,
      ),
    };
  });
}

export function getGroupDataByGroupId(groupId: string): GroupData {
  return defined(FF44_GROUP_DATA.find((e) => e.groupId === groupId));
}
