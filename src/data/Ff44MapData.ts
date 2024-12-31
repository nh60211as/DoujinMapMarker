import { BoothActiveDay } from "../types/BoothActiveDay";
import { BoothData, BoothDataOnMap } from "../types/BoothData";
import { GroupData } from "../types/GroupData";
import { boothNumberListToTargetingBoxDimension } from "../utils/BoothNumberUtils";
import { defined } from "../utils/TypeUtils";

const Ff44GroupData: Array<GroupData> = [
  {
    groupId: "ffdde4aff94540ef8725db5dfc1db204",
    groupName: "殺必死天國",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "A", number: 1 },
          { row: "A", number: 2 },
        ],
      },
    ],
  },
  {
    groupId: "f3db9c49f44c4bd1bd1c8e40328feb46",
    groupName: "有害蕈類集會所",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "A", number: 3 },
          { row: "A", number: 4 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "A", number: 3 },
          { row: "A", number: 4 },
        ],
      },
    ],
  },
  {
    groupId: "4e7723807c4b4200b00143b9efb81fde",
    groupName: "三色坊",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "A", number: 5 },
          { row: "A", number: 6 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "A", number: 5 },
          { row: "A", number: 6 },
        ],
      },
    ],
  },
  {
    groupId: "401e67b8bd4043349785b0d40cd8496b",
    groupName: "Himoata",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "A", number: 7 },
          { row: "A", number: 8 },
        ],
      },
    ],
  },
  {
    groupId: "07a39907f8474792a15a4a7c434ae88e",
    groupName: "Pure Reverie",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "A", number: 9 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "A", number: 9 }],
      },
    ],
  },
  {
    groupId: "e1bd938f44494021aaa17697577a33f0",
    groupName: "貓咖桃茶館",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "A", number: 10 }],
      },
    ],
  },
  {
    groupId: "53e145b37e574cc59c0fa1dde2afabd0",
    groupName: "被爐裡的翻車魚",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "A", number: 11 }],
      },
    ],
  },
  {
    groupId: "5cdceff8044c42f7a71098dd1f7c8baa",
    groupName: "ノラネコノタマ",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "A", number: 12 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "A", number: 12 }],
      },
    ],
  },
  {
    groupId: "b743b72b934b47149f401cf18507b6d3",
    groupName: "さくらアイス",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "A", number: 13 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "A", number: 13 }],
      },
    ],
  },
  {
    groupId: "520c28294293472c97490ac2bb49e253",
    groupName: "アクアドロップ",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "A", number: 14 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "A", number: 14 }],
      },
    ],
  },
  {
    groupId: "3292c53bb5064f23b6ab18af6d7e80a9",
    groupName: "心動美栗",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "A", number: 15 }],
      },
    ],
  },
  {
    groupId: "939c5e797ca84d42b3396187a616794e",
    groupName: "RIN",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "A", number: 16 }],
      },
    ],
  },
  {
    groupId: "b753fe069b6f4ea7b966b2b23887e36f",
    groupName: "Lumo",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "A", number: 17 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "A", number: 17 }],
      },
    ],
  },
  {
    groupId: "dfbae6cda5ec48be944c1b9af54036c1",
    groupName: "curry and rice(咖哩飯)",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "A", number: 18 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "A", number: 18 }],
      },
    ],
  },
  {
    groupId: "b31092ffcaf0459d802dec9253e760bd",
    groupName: "Atelier Kingyo(金魚工房)",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "A", number: 19 },
          { row: "A", number: 20 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "A", number: 19 },
          { row: "A", number: 20 },
        ],
      },
    ],
  },
  {
    groupId: "0c897313b593445fac9a7dddb8cd2620",
    groupName: "TracoStrawberry",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "A", number: 21 },
          { row: "A", number: 22 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "A", number: 21 },
          { row: "A", number: 22 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "A", number: 21 },
          { row: "A", number: 22 },
        ],
      },
    ],
  },
  {
    groupId: "ef0aa3ec4a36491c973fb1cda56cf825",
    groupName: "杏。Xing",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "B", number: 1 },
          { row: "B", number: 2 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "B", number: 1 },
          { row: "B", number: 2 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "B", number: 1 },
          { row: "B", number: 2 },
        ],
      },
    ],
  },
  {
    groupId: "33d7721a4436454f8361a6fc4c7a8414",
    groupName: "yoyoya",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "B", number: 3 },
          { row: "B", number: 4 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "B", number: 3 },
          { row: "B", number: 4 },
        ],
      },
    ],
  },
  {
    groupId: "8a6de33731004d3a88ada4e4b3146bea",
    groupName: "Mr.H遊戲工作室",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "B", number: 5 }],
      },
    ],
  },
  {
    groupId: "759fb4430ef743f3afc9b005eb38bbda",
    groupName: "柊の手帳",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "B", number: 6 }],
      },
    ],
  },
  {
    groupId: "24810116fa6147789fc6b34a2f58a874",
    groupName: "GODNASK",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "B", number: 7 }],
      },
    ],
  },
  {
    groupId: "054a97a0db3646edb54c4a60934db0fc",
    groupName: "Rikoring",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "B", number: 8 }],
      },
    ],
  },
  {
    groupId: "77c819ed5e4d4e44a80646eb646c97fd",
    groupName: "茶茶ナコ",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "B", number: 9 },
          { row: "B", number: 10 },
        ],
      },
    ],
  },
  {
    groupId: "40ef69733e124901a65a193b30f9b6f4",
    groupName: "涼拌天窗",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "B", number: 11 },
          { row: "B", number: 12 },
        ],
      },
    ],
  },
  {
    groupId: "d860fa46dc384e4584c23d9552bc1853",
    groupName: "自由黑貓的紙箱",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "B", number: 13 },
          { row: "B", number: 14 },
        ],
      },
    ],
  },
  {
    groupId: "485df95b8fe144e1a059c8571b97ed6d",
    groupName: "八百萬堂",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "B", number: 15 },
          { row: "B", number: 16 },
        ],
      },
    ],
  },
  {
    groupId: "bcdacebb38a14d60a20a9e21ce7809b0",
    groupName: "桑尤姆的部屋",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "B", number: 17 },
          { row: "B", number: 18 },
        ],
      },
    ],
  },
  {
    groupId: "12b2fd40905141c09956b191574646e9",
    groupName: "娘娘",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "B", number: 19 },
          { row: "B", number: 20 },
        ],
      },
    ],
  },
  {
    groupId: "6a58e20792cd4ee18678e7fb0e633aa5",
    groupName: "水鈴鈴 星見雅的汪汪",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "B", number: 21 },
          { row: "B", number: 22 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "B", number: 21 },
          { row: "B", number: 22 },
        ],
      },
    ],
  },
  {
    groupId: "bb987ddf97e848c78d1ae85d051a77ce",
    groupName: "蛞蝓.菠菜丼",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "B", number: 23 },
          { row: "B", number: 24 },
        ],
      },
    ],
  },
  {
    groupId: "c9e45dab2b5345b2ad2e485b9a24fb14",
    groupName: "這個名字有毒",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "B", number: 25 }],
      },
    ],
  },
  {
    groupId: "b1959cc524d046bbb7e56f701bf99fc4",
    groupName: "古比",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "B", number: 26 }],
      },
    ],
  },
  {
    groupId: "c305b35b9ab14b9084f60cf55f64f318",
    groupName: "狐娘萬事屋",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "B", number: 27 }],
      },
    ],
  },
  {
    groupId: "06864c966c4040dc9353e161a6727a7e",
    groupName: "今天不想畫",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "B", number: 28 }],
      },
    ],
  },
  {
    groupId: "bee04386c6924c5fa7aa48077ea256ea",
    groupName: "本本貓是一隻貓",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "B", number: 29 },
          { row: "B", number: 30 },
        ],
      },
    ],
  },
  {
    groupId: "2a3e83562310497ab61a21be666d1516",
    groupName: "NoazZark-NZ",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "B", number: 31 }],
      },
    ],
  },
  {
    groupId: "6492cca27d0a43a8af923bec04b7e358",
    groupName: "帕淇PACHI",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "B", number: 32 }],
      },
    ],
  },
  {
    groupId: "9e241b10704b4ed49da9369433f52a6b",
    groupName: "吉喵熊熊",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "B", number: 33 },
          { row: "B", number: 34 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "B", number: 33 },
          { row: "B", number: 34 },
        ],
      },
    ],
  },
  {
    groupId: "acc8f01c7fef433c93d227667765da23",
    groupName: "烏龍拿鐵",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "B", number: 35 }],
      },
    ],
  },
  {
    groupId: "79bdf3ba4c974e42904d3ec75f655d8b",
    groupName: "まふゆ",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "B", number: 36 }],
      },
    ],
  },
  {
    groupId: "2840b1fdf0db4b3b96baae8fbd94883a",
    groupName: "星球蛋糕捲☆",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "B", number: 37 },
          { row: "B", number: 38 },
        ],
      },
    ],
  },
  {
    groupId: "a646aa5b942f4e5bb6b85a7c8272f32e",
    groupName: "悠悠栽栽",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "B", number: 39 },
          { row: "B", number: 40 },
        ],
      },
    ],
  },
  {
    groupId: "b00e2810f006463aba3c32f2852d27ba",
    groupName: "北極雪兔窩",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "B", number: 41 }],
      },
    ],
  },
  {
    groupId: "8aef54cc8ae64015b3cacdc2ad8a4870",
    groupName: "御用飯糰 Onigiri",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "B", number: 42 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "B", number: 42 }],
      },
    ],
  },
  {
    groupId: "32d8289926a54043957f734afe1099d5",
    groupName: "Hoshihan",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "B", number: 43 },
          { row: "B", number: 44 },
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
];

function getFf44BoothDataByActiveDay(
  boothActiveDay: BoothActiveDay,
): Array<BoothData> {
  return Ff44GroupData.filter((groupData) =>
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
