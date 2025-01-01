import { BoothActiveDay } from "../types/BoothActiveDay";
import { BoothData, BoothDataOnMap } from "../types/BoothData";
import { GroupData } from "../types/GroupData";
import { boothNumberListToTargetingBoxDimension } from "../utils/BoothNumberUtils";
import { defined } from "../utils/TypeUtils";

export const FF44_GROUP_DATA: Array<GroupData> = [
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
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [{ row: "M", number: 32 }],
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
    groupId: "77cb9730d84847dd810105cf818e5f77",
    groupName: "毛毛創森坊",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 1 }],
      },
    ],
  },
  {
    groupId: "e2913b9e481d4170882b39b41825f012",
    groupName: "書櫃裡的謎之物",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 2 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "C", number: 2 }],
      },
    ],
  },
  {
    groupId: "fd4255f592e34208a603ce5402a8b732",
    groupName: "Shano",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "C", number: 3 },
          { row: "C", number: 4 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "C", number: 5 },
          { row: "C", number: 6 },
        ],
      },
    ],
  },
  {
    groupId: "c78da9c6fde6402b865ce6a738a9c895",
    groupName: "Ellie工作坊",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "C", number: 5 },
          { row: "C", number: 6 },
        ],
      },
    ],
  },
  {
    groupId: "4eb59df66c5c49f188a960ca40fb36a3",
    groupName: "繪宅米行",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 7 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "C", number: 10 }],
      },
    ],
  },
  {
    groupId: "27b8e70f340741e5a59f139be76e51ea",
    groupName: "LLI-ani",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 8 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "C", number: 4 }],
      },
    ],
  },
  {
    groupId: "ddd5adb2de09458a85a8eee81dfb5ef5",
    groupName: "ウイスキーストレート同好会",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 9 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "C", number: 9 }],
      },
    ],
  },
  {
    groupId: "a2d5cf0644f645a6bcdf534595ced044",
    groupName: "M.S.E.S. Studio",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 10 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "M", number: 32 }],
      },
    ],
  },
  {
    groupId: "92b6927cea9f4fb388cc876066864330",
    groupName: "NANAKEN",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 11 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "M", number: 30 }],
      },
    ],
  },
  {
    groupId: "955ee9edfdc44506acee333586074ed6",
    groupName: "致富密碼",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 12 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "M", number: 33 }],
      },
    ],
  },
  {
    groupId: "5499d043b58545b89b3a4020c0d9a898",
    groupName: "憋氣直到完售",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "C", number: 13 },
          { row: "C", number: 14 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "M", number: 31 }],
      },
    ],
  },
  {
    groupId: "009dce5a270044c8894ce7034affdd52",
    groupName: "CurtainCall",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 15 }],
      },
    ],
  },
  {
    groupId: "583d9f1c14964c3abed85c7c5bfa8fca",
    groupName: "喵喵小隊",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 16 }],
      },
    ],
  },
  {
    groupId: "63aea82d73d34c72a47a699e88f3b5c5",
    groupName: "瑞鴛 RUYAN",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 17 }],
      },
    ],
  },
  {
    groupId: "3339dcfa69cd47fdb3ceb765b40c382f",
    groupName: "高三卓月口欠",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 18 }],
      },
    ],
  },
  {
    groupId: "c8ba41b787f345f7a88d83bc3ab1d47e",
    groupName: "小波波利那可可",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 19 }],
      },
    ],
  },
  {
    groupId: "d9a843f817c243bc93c32bd1d9ddfb82",
    groupName: "子魚日本料理",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 20 }],
      },
    ],
  },
  {
    groupId: "1b1855a67ff94dbaaf034d113d6ddc74",
    groupName: "御狐亭-小砂",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "C", number: 21 },
          { row: "C", number: 22 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "A", number: 19 },
          { row: "A", number: 20 },
        ],
      },
    ],
  },
  {
    groupId: "14daf60ac90b4905b1e77fe3e59273ec",
    groupName: "[CHOCOLATE SHOP]",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "C", number: 23 },
          { row: "C", number: 24 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "C", number: 23 },
          { row: "C", number: 24 },
        ],
      },
    ],
  },
  {
    groupId: "f2bcfb6a505545e1a51e28c7b6c09a3b",
    groupName: "助客勃",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "C", number: 25 },
          { row: "C", number: 26 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "C", number: 25 },
          { row: "C", number: 26 },
        ],
      },
    ],
  },
  {
    groupId: "6a0dcceec4f742e28a338c71f1a23cd9",
    groupName: "Unchiku Company",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 27 }],
      },
    ],
  },
  {
    groupId: "29173af3f2374e24b2bc72c3251d18d9",
    groupName: "楓糖蛋塔",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 28 }],
      },
    ],
  },
  {
    groupId: "affca2bcaaef4e6ebc4d3a7b12764a1e",
    groupName: "圓桌會議",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "C", number: 29 },
          { row: "C", number: 30 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "C", number: 29 },
          { row: "C", number: 30 },
        ],
      },
    ],
  },
  {
    groupId: "e220f5aa97ec40bc9ca2a0dbebf39aa9",
    groupName: "逸遊団",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "C", number: 31 },
          { row: "C", number: 32 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "C", number: 31 },
          { row: "C", number: 32 },
        ],
      },
    ],
  },
  {
    groupId: "cac01f6baf0e4ac1a36c03565e739025",
    groupName: "あぶく屋",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 33 }],
      },
    ],
  },
  {
    groupId: "7665b14cc98b470c83fbf733a967e46e",
    groupName: "畜生道",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 34 }],
      },
    ],
  },
  {
    groupId: "1402fc1a675e4a6faa164140c5b88131",
    groupName: "Tamarun",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "C", number: 35 },
          { row: "C", number: 36 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "C", number: 35 },
          { row: "C", number: 36 },
        ],
      },
    ],
  },
  {
    groupId: "7bbae9e636474d9b9ecf30be6b6542f4",
    groupName: "XTER",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "C", number: 37 },
          { row: "C", number: 38 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "C", number: 37 },
          { row: "C", number: 38 },
        ],
      },
    ],
  },
  {
    groupId: "82249ff4d99e48a7952eabe3310822be",
    groupName: "光之工具人",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 39 }],
      },
    ],
  },
  {
    groupId: "443ec5e9cd864d34bcc4b58d4f6f9443",
    groupName: "DOKIDOKI",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 40 }],
      },
    ],
  },
  {
    groupId: "d5a50d8127cc4f6c873b699f1cc65bbb",
    groupName: "藝吟花園",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 41 }],
      },
    ],
  },
  {
    groupId: "d917a419ee1c4c0b9dff3df49e4bddb6",
    groupName: "焰焰的餐桌",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "C", number: 42 }],
      },
    ],
  },
  {
    groupId: "dd6429c4966b440089a8bb2a9453582c",
    groupName: "+Poke 箱+",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "C", number: 43 },
          { row: "C", number: 44 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "C", number: 43 },
          { row: "C", number: 44 },
        ],
      },
    ],
  },
  {
    groupId: "5c414c1d34704e24a3302c292b2597ae",
    groupName: "A-One",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "D", number: 1 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "D", number: 1 }],
      },
    ],
  },
  {
    groupId: "ca87828b42544de19e643e6a52e0121e",
    groupName: "Re:Volte",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "D", number: 2 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "D", number: 2 }],
      },
    ],
  },
  {
    groupId: "4951c62de6174026a172c9895f5011fe",
    groupName: "Crest",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "D", number: 3 },
          { row: "D", number: 4 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "D", number: 3 },
          { row: "D", number: 4 },
        ],
      },
    ],
  },
  {
    groupId: "634b1b3f3abc49b29fc2eedd6b07e974",
    groupName: "しもやけ堂",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "D", number: 5 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "D", number: 16 }],
      },
    ],
  },
  {
    groupId: "3362aa9e6c26427bb9d32bb78dad43f6",
    groupName: "Reverse Noise",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "D", number: 6 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "D", number: 22 }],
      },
    ],
  },
  {
    groupId: "555a70df758b45f5879860cf63ae7029",
    groupName: "Infinite Shroud",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "D", number: 7 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "D", number: 21 }],
      },
    ],
  },
  {
    groupId: "d6ca3eb914a8433b8500d80f52980521",
    groupName: "東方幻想大社",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "D", number: 8 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "D", number: 18 }],
      },
    ],
  },
  {
    groupId: "35c2ab8530d9422a9381d4b1e17de53e",
    groupName: "命由工作室",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "D", number: 9 },
          { row: "D", number: 10 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "D", number: 19 }],
      },
    ],
  },
  {
    groupId: "0daea0f855d44b40a98e20aa7e7aafd0",
    groupName: "田書坊",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "D", number: 11 },
          { row: "D", number: 12 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "D", number: 11 }],
      },
    ],
  },
  {
    groupId: "862896dd680b4b27aa43e402643a9d82",
    groupName: "藍莓教缺香油錢",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "D", number: 13 }],
      },
    ],
  },
  {
    groupId: "f704911ff34e407c916355739a363531",
    groupName: "喫茶　華楽里(KARAKURI)",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "D", number: 14 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "D", number: 14 }],
      },
    ],
  },
  {
    groupId: "19aa3e85d2e24f05b938ce480275dc9d",
    groupName: "あぶら畑(ATOM)グランテッド",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "D", number: 15 },
          { row: "D", number: 16 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "D", number: 15 }],
      },
    ],
  },
  {
    groupId: "96f2db58415a4e60b1f1797358d71d36",
    groupName: "りべるて",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "D", number: 17 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "D", number: 17 }],
      },
    ],
  },
  {
    groupId: "9303a7b6c94940d8a30be1ce452350e3",
    groupName: "鬼山蓬萊支部",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "D", number: 18 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "D", number: 20 }],
      },
    ],
  },
  {
    groupId: "5870f192985342a8bd041237ce710a41",
    groupName: "超易孕妊天堂",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "D", number: 19 },
          { row: "D", number: 20 },
        ],
      },
    ],
  },
  {
    groupId: "994f03a57cd84706adecb0cbcaeecfad",
    groupName: "Yuki Azuma Imomuya - Singleton",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "D", number: 21 },
          { row: "D", number: 22 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "C", number: 17 },
          { row: "C", number: 18 },
        ],
      },
    ],
  },
  {
    groupId: "c558eeba5a6e42c488ba4bda0887fe64",
    groupName: "畫圖怠惰症候群",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "D", number: 23 },
          { row: "D", number: 24 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "O", number: 7 },
          { row: "O", number: 8 },
        ],
      },
    ],
  },
  {
    groupId: "c51298ba2e324484bff6b0e543597bf4",
    groupName: "無口遮攔",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "D", number: 25 },
          { row: "D", number: 26 },
        ],
      },
    ],
  },
  {
    groupId: "b66b8052d2644f439e73396b6d9af9a3",
    groupName: "蘿莉楓糖漿",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "D", number: 27 },
          { row: "D", number: 28 },
        ],
      },
    ],
  },
  {
    groupId: "73494e3962834b54b4e0e031a3980111",
    groupName: "ブルーブルルー",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "D", number: 29 }],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [{ row: "E", number: 12 }],
      },
    ],
  },
  {
    groupId: "933605eace0b4d2aaaa4927421fecadf",
    groupName: "色彩畫廊 (Iro-iro Gallery)色々・ギャラリー",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "D", number: 30 }],
      },
    ],
  },
  {
    groupId: "cb164bfdc125451cbb6bb0aea03b4ca1",
    groupName: "+喵耳園+",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "D", number: 31 },
          { row: "D", number: 32 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "D", number: 31 },
          { row: "D", number: 32 },
        ],
      },
    ],
  },
  {
    groupId: "e47ec6b9096447e4a8e117d17e5e86ef",
    groupName: "克特小舖",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "D", number: 33 },
          { row: "D", number: 34 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "D", number: 33 },
          { row: "D", number: 34 },
        ],
      },
    ],
  },
  {
    groupId: "484b6eea68734c529152628a5b5d0ed6",
    groupName: "琉璃茉莉❀∣原創設計",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "D", number: 35 },
          { row: "D", number: 36 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "D", number: 36 }],
      },
    ],
  },
  {
    groupId: "9a18f2d1ed35450ab73b307f92e386bb",
    groupName: "一隅微生工作室",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "D", number: 37 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "D", number: 37 }],
      },
    ],
  },
  {
    groupId: "2c47928124d44e7fae7115e1dc0505a1",
    groupName: "Kaku Lab",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "D", number: 38 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "D", number: 38 }],
      },
    ],
  },
  {
    groupId: "517999a9ceac44a3aac41e6b9e80cf5c",
    groupName: "熊熊麻薯",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "D", number: 39 },
          { row: "D", number: 40 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "D", number: 39 },
          { row: "D", number: 40 },
        ],
      },
    ],
  },
  {
    groupId: "d6a1dbc6bafe42ecbda5615e99932d24",
    groupName: "三分糖‧手作中",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "D", number: 41 }],
      },
    ],
  },
  {
    groupId: "b4a37841ea1e44468015064f0347c0a0",
    groupName: "愛做夢的人",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "D", number: 42 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "D", number: 25 }],
      },
    ],
  },
  {
    groupId: "01910d576e984e659cbc021e30dee631",
    groupName: "御柴手藝工作室",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "D", number: 43 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "D", number: 24 }],
      },
    ],
  },
  {
    groupId: "302c7c929dab462394c531bb92b517e9",
    groupName: "若若食堂",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "D", number: 44 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "D", number: 23 }],
      },
    ],
  },
  {
    groupId: "ea6fb19705b24295b4fc1b91c4b32949",
    groupName: "角落工作室",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "E", number: 1 },
          { row: "E", number: 2 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "E", number: 1 },
          { row: "E", number: 2 },
        ],
      },
    ],
  },
  {
    groupId: "2c8e7570124f49d08c6e9a850887564e",
    groupName: "Hsun Craft Studio",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "E", number: 3 },
          { row: "E", number: 4 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "E", number: 3 },
          { row: "E", number: 4 },
        ],
      },
    ],
  },
  {
    groupId: "c9809eab282b429596b92b97e9652dfd",
    groupName: "ahnitol",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "E", number: 5 },
          { row: "E", number: 6 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "E", number: 5 },
          { row: "E", number: 6 },
        ],
      },
    ],
  },
  {
    groupId: "d6277d043e954311865f1f70a30a11ae",
    groupName: "老雁小坊",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "E", number: 7 },
          { row: "E", number: 8 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "E", number: 15 },
          { row: "E", number: 16 },
        ],
      },
    ],
  },
  {
    groupId: "b5c0a4cd05724c219a9ac1b962f52731",
    groupName: "創意罐頭數位工作室",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "E", number: 9 },
          { row: "E", number: 10 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "E", number: 4 }],
      },
    ],
  },
  {
    groupId: "909750b0b6b64abcb428cf48847aacd9",
    groupName: "好點子",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "E", number: 11 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "E", number: 11 }],
      },
    ],
  },
  {
    groupId: "8923348ba5254612b5f1b53fe5eecd1c",
    groupName: "營養口糧兵工廠",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "E", number: 12 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "E", number: 17 }],
      },
    ],
  },
  {
    groupId: "71802e6c3f414396a67b8b5c29742396",
    groupName: "Thunder Noise",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "E", number: 13 }],
      },
    ],
  },
  {
    groupId: "bee0c18c2a83453f8e04e4872ba95bf6",
    groupName: "玉巴YUBA",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "E", number: 14 }],
      },
    ],
  },
  {
    groupId: "f2eed016d9344289a51854c105bfc5a6",
    groupName: "GG≒ 14",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "E", number: 15 }],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [{ row: "E", number: 31 }],
      },
    ],
  },
  {
    groupId: "9bdff203172f4041972caa2cd0239b2b",
    groupName: "蘿莉豹不吃DM63",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "E", number: 16 }],
      },
    ],
  },
  {
    groupId: "b51a53457e4846e29ec0d3913b19c14b",
    groupName: "redjoystick's artwork",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "E", number: 17 }],
      },
    ],
  },
  {
    groupId: "3d926946477e444f97754c76a1ff50ef",
    groupName: "Nekoda",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "E", number: 18 },
          { row: "E", number: 19 },
        ],
      },
    ],
  },
  {
    groupId: "7672c77361e94c819d29bc39cd975ab1",
    groupName: "貝雷貓 - ベレー猫",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "E", number: 20 }],
      },
    ],
  },
  {
    groupId: "05238403d6aa4830a88a4d0496056185",
    groupName: "弾KAIOU",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "E", number: 21 },
          { row: "E", number: 22 },
        ],
      },
    ],
  },
  {
    groupId: "b85e3e8499c745b7815d7b643779dab6",
    groupName: "BB一號",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "E", number: 23 },
          { row: "E", number: 24 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "O", number: 31 },
          { row: "O", number: 32 },
        ],
      },
    ],
  },
  {
    groupId: "47e430ba8f534356801a57bd6e856808",
    groupName: "幽塗",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "E", number: 25 },
          { row: "E", number: 26 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "E", number: 25 },
          { row: "E", number: 26 },
        ],
      },
    ],
  },
  {
    groupId: "fd703b13df2d45a69a840b25b9122836",
    groupName: "角角吉診室",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "E", number: 27 },
          { row: "E", number: 28 },
        ],
      },
    ],
  },
  {
    groupId: "b368bf2941c3423ab776ac43cc14bfba",
    groupName: "Ame",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "E", number: 29 },
          { row: "E", number: 30 },
        ],
      },
    ],
  },
  {
    groupId: "eb8981cd09db452384ed8b2bd558c7cc",
    groupName: "秋山-AkiYama",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "E", number: 31 },
          { row: "E", number: 32 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "E", number: 23 },
          { row: "E", number: 24 },
        ],
      },
    ],
  },
  {
    groupId: "7d4d306983174c67baadef28f32cdbfa",
    groupName: "馬賽克 Mosaics",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "E", number: 34 }],
      },
    ],
  },
  {
    groupId: "efbd192b6f054892920ccb68a1040009",
    groupName: "じるす飯店",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "E", number: 35 }],
      },
    ],
  },
  {
    groupId: "9f0f2f4c066e40f4994a55700ed8a722",
    groupName: "海苔章魚燒",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "E", number: 36 }],
      },
    ],
  },
  {
    groupId: "4a691d7604514f83b41bb8946eb4ba70",
    groupName: "娜卡黛西",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "E", number: 37 }],
      },
    ],
  },
  {
    groupId: "e7e4b84c546e42e8a959c155543090b3",
    groupName: "獸耳邏輯",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "E", number: 38 }],
      },
    ],
  },
  {
    groupId: "9101c3ae918b4c0aaaa8a3bdb5f7b328",
    groupName: "TY楓",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "E", number: 39 }],
      },
    ],
  },
  {
    groupId: "c0b01e390e634b59ba8555d5b4bd87e3",
    groupName: "豆腐絲",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "E", number: 40 }],
      },
    ],
  },
  {
    groupId: "4d6197899cdc40a2929064665920a829",
    groupName: "少搬三箱攤位容積獎勵增值委員會",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "E", number: 41 },
          { row: "E", number: 42 },
        ],
      },
    ],
  },
  {
    groupId: "400f02b6068248b4917add9ce8714e52",
    groupName: "白夢亭",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "E", number: 43 },
          { row: "E", number: 44 },
        ],
      },
    ],
  },
  {
    groupId: "936bfbbddb0e46bc8d49b7fd22982201",
    groupName: "毛毛精靈與牠們的喵喵迷因",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "F", number: 1 },
          { row: "F", number: 2 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "F", number: 1 },
          { row: "F", number: 2 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "F", number: 1 },
          { row: "F", number: 2 },
        ],
      },
    ],
  },
  {
    groupId: "52f873fa70264c06b0b0790c05b01f11",
    groupName: "宅鼠-Nezumi",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 3 }],
      },
    ],
  },
  {
    groupId: "178ba38064e94852a151fb7bfb999db6",
    groupName: "週五沒朋友",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 4 }],
      },
    ],
  },
  {
    groupId: "d3db6e46b3fc43cf8eb3f34c454df871",
    groupName: "六本木製作所",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 5 }],
      },
    ],
  },
  {
    groupId: "af30f6be4fe1407f8a9323a87181cea4",
    groupName: "山上風大",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 6 }],
      },
    ],
  },
  {
    groupId: "41665cdc7b7f4ef781bd9a654c217379",
    groupName: "角落老師小夥伴",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 7 }],
      },
    ],
  },
  {
    groupId: "3bb703c57ea941ec800adc1d69a318a5",
    groupName: "快樂貨櫃屋",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 8 }],
      },
    ],
  },
  {
    groupId: "48c095af54584d168b43745669318d4f",
    groupName: "Lotai愛莉塔",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 9 }],
      },
    ],
  },
  {
    groupId: "ce9324effdc84c39b2a7bd40680a0763",
    groupName: "塗鴉時空間",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 10 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "N", number: 34 }],
      },
    ],
  },
  {
    groupId: "ef475c9ebf5b4477a1aaf5ef6928625e",
    groupName: "西窗夜雨",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "F", number: 11 },
          { row: "F", number: 12 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "N", number: 35 },
          { row: "N", number: 36 },
        ],
      },
    ],
  },
  {
    groupId: "5355d67f341e40a7bf5c0f31ca69af37",
    groupName: "U235核燃動力",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 13 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "N", number: 37 }],
      },
    ],
  },
  {
    groupId: "0434145e5e4e4edf97a2744ff38daa04",
    groupName: "盒子裡的猫咪",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 14 }],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [{ row: "D", number: 16 }],
      },
    ],
  },
  {
    groupId: "1b6b9fecccdd4f34835dfeb4d10f6ae2",
    groupName: "我來、我見、我射爆",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "F", number: 15 },
          { row: "F", number: 16 },
        ],
      },
    ],
  },
  {
    groupId: "01d95071aeef495d99a056c7274fd153",
    groupName: "晨光乳品製作所",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 17 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "N", number: 30 }],
      },
    ],
  },
  {
    groupId: "eb70499f229d4b71a5ee1e45a197a1b1",
    groupName: "隻雞麵包坊",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 18 }],
      },
    ],
  },
  {
    groupId: "17e04da26b4640929a2c0505f8819649",
    groupName: "瓜茶ice社",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "F", number: 19 },
          { row: "F", number: 20 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "E", number: 29 },
          { row: "E", number: 30 },
        ],
      },
    ],
  },
  {
    groupId: "67340e10cd0e4448b3fcd2eb97d77864",
    groupName: "龜甲萬皮卡丘",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "F", number: 21 },
          { row: "F", number: 22 },
        ],
      },
    ],
  },
  {
    groupId: "0784568ab2e24a2d8b3eaa32cd28881c",
    groupName: "吃餅進ジーン",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "F", number: 23 },
          { row: "F", number: 24 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "E", number: 43 },
          { row: "E", number: 44 },
        ],
      },
    ],
  },
  {
    groupId: "96548277ecd34265a558933688208fcf",
    groupName: "肚臍轉圈圈",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "F", number: 25 },
          { row: "F", number: 26 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "E", number: 41 },
          { row: "E", number: 42 },
        ],
      },
    ],
  },
  {
    groupId: "296bc876d8c44721b329268dac9c2846",
    groupName: "DAi",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "F", number: 27 },
          { row: "F", number: 28 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "E", number: 33 }],
      },
    ],
  },
  {
    groupId: "c55b1b8a62ea4c29885b7455f84584b4",
    groupName: "南瓜男pumpkin man",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 29 }],
      },
    ],
  },
  {
    groupId: "b9ddcb9a05824a63a6293da2bb88b9cb",
    groupName: "千仞蘭庭",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 30 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "I", number: 37 }],
      },
    ],
  },
  {
    groupId: "2370a29a1f184250b8bc742e08b2e126",
    groupName: "左岸喵喵館",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 31 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "F", number: 32 }],
      },
    ],
  },
  {
    groupId: "524f4521e4914d6e8659ddfedcd0fd8d",
    groupName: "頭上有犄角",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 33 }],
      },
    ],
  },
  {
    groupId: "a4b9a556cad8474f980b6c0e6fad8fc6",
    groupName: "6歲被颱風吹走的『 羊 』?",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 34 }],
      },
    ],
  },
  {
    groupId: "a82a747e29ca4f14b943cea49889348e",
    groupName: "黑貓白眉",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 35 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "E", number: 22 }],
      },
    ],
  },
  {
    groupId: "1a8028a86b0343b0b5466324a437263d",
    groupName: "異私特",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "F", number: 36 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "E", number: 20 }],
      },
    ],
  },
  {
    groupId: "d1d91d94e9d741f3ac7d7ef97c5afacb",
    groupName: "貓兒迷雅",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "F", number: 37 },
          { row: "F", number: 38 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "F", number: 37 },
          { row: "F", number: 38 },
        ],
      },
    ],
  },
  {
    groupId: "b65b2f45f48749daaa127eaecef3ba8c",
    groupName: "Omelet Cream",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "F", number: 39 },
          { row: "F", number: 40 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "F", number: 40 },
          { row: "F", number: 41 },
        ],
      },
    ],
  },
  {
    groupId: "331512ee8f2c409f9d9f8fc2e5ffc519",
    groupName: "水餃寶包",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "F", number: 41 },
          { row: "F", number: 42 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "F", number: 42 }],
      },
    ],
  },
  {
    groupId: "84e67802f9b541839f50df0da06d5f31",
    groupName: "捕食少女",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "F", number: 43 },
          { row: "F", number: 44 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "F", number: 43 },
          { row: "F", number: 44 },
        ],
      },
    ],
  },
  {
    groupId: "57fdd871b3dc4befa10ddaf8dc901445",
    groupName: "菟吉珍珠販售店",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 1 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "E", number: 28 }],
      },
    ],
  },
  {
    groupId: "2fc5fce8bdcd4ff9819234f62abe0efd",
    groupName: "一起推イチオシ",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 2 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "E", number: 29 }],
      },
    ],
  },
  {
    groupId: "0aeaf7ee38384ffba824cd73b5373215",
    groupName: "ソーダ水",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 3 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "E", number: 30 }],
      },
    ],
  },
  {
    groupId: "054dbfc9a0eb4c3099ea91f2061aacaa",
    groupName: "桃桃吃桃桃",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 4 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "E", number: 31 }],
      },
    ],
  },
  {
    groupId: "c9e1ed28895d46a3b3877a8bbe8bca0b",
    groupName: "貓窩沒有貓",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 5 }],
      },
    ],
  },
  {
    groupId: "5388de86d90c46a68c67bef00d349670",
    groupName: "紡星社",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 7 }],
      },
    ],
  },
  {
    groupId: "172155e76f564c7ba48f044c8d5c15fb",
    groupName: "BunnyGames",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 8 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "G", number: 8 }],
      },
    ],
  },
  {
    groupId: "99e2a8f1e6794fb59d8f757b671e41e1",
    groupName: "彥燈－ひことう",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 9 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "G", number: 9 }],
      },
    ],
  },
  {
    groupId: "035e0ac60c9f475fae9f71197391da53",
    groupName: "亂中有序",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 10 }],
      },
    ],
  },
  {
    groupId: "476977048a114f229ea73d3b22b4232a",
    groupName: "Kaguya Project",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 11 }],
      },
    ],
  },
  {
    groupId: "099f15daf7534b13b236301806589248",
    groupName: "大阪風男",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 12 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "G", number: 12 }],
      },
    ],
  },
  {
    groupId: "d4852f250b5f44e18f8758a8cf7982e6",
    groupName: "超級米漿",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "G", number: 13 },
          { row: "G", number: 14 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "G", number: 13 }],
      },
    ],
  },
  {
    groupId: "7d9a2f29855241cb8c7c435ea34020e2",
    groupName: "F.W.ZHolic",
    groupLink: "https://www.facebook.com/fwzholic",
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 15 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "G", number: 14 }],
      },
    ],
  },
  {
    groupId: "a35abbe811734aaabef0636a724dfef0",
    groupName: "驕傲香蕉",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "G", number: 16 },
          { row: "G", number: 17 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "G", number: 15 }],
      },
    ],
  },
  {
    groupId: "2c97c325b33b4e3bad2791f7ca16b571",
    groupName: "Hashira十四",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "G", number: 18 },
          { row: "G", number: 19 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "G", number: 16 }],
      },
    ],
  },
  {
    groupId: "8fdd71d18b884999b2834e4f0f13b329",
    groupName: "莊園女工休息室",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 20 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "F", number: 20 }],
      },
    ],
  },
  {
    groupId: "0a2fefaecca94eaaa75aa9d33186911e",
    groupName: "MiraKE",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "G", number: 21 },
          { row: "G", number: 22 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "F", number: 21 },
          { row: "F", number: 22 },
        ],
      },
    ],
  },
  {
    groupId: "22969835b2cb48c5b994ec69ad9110c1",
    groupName: "Damier Cookie 妲米餅乾",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "G", number: 23 },
          { row: "G", number: 24 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "F", number: 19 }],
      },
    ],
  },
  {
    groupId: "2fbfe6ecb79b43558eb0a15857650591",
    groupName: "米茲米茲",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "G", number: 25 },
          { row: "G", number: 26 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "G", number: 25 },
          { row: "G", number: 26 },
        ],
      },
    ],
  },
  {
    groupId: "451c321cee6942de86d2e8fea58bc0da",
    groupName: "雪之饗(feat.水々)",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "G", number: 27 },
          { row: "G", number: 28 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "G", number: 27 },
          { row: "G", number: 28 },
        ],
      },
    ],
  },
  {
    groupId: "9a6477f894754f3bbe2a432300497146",
    groupName: "女孩日常",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "G", number: 29 },
          { row: "G", number: 30 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "G", number: 29 }],
      },
    ],
  },
  {
    groupId: "c1001e8829d148919def7615fb9617de",
    groupName: "米克的倉庫",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 31 }],
      },
    ],
  },
  {
    groupId: "764fc887953642b19754cf1d3f4ec3a7",
    groupName: "風車屋",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 32 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "F", number: 5 }],
      },
    ],
  },
  {
    groupId: "0d0b2e89f67641d8bb21c0670302ec68",
    groupName: "摺子妹妹",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "G", number: 33 },
          { row: "G", number: 34 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "F", number: 3 },
          { row: "F", number: 4 },
        ],
      },
    ],
  },
  {
    groupId: "49ba5d473cac447cae1e15009e99bcc8",
    groupName: "waga個人",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 35 }],
      },
    ],
  },
  {
    groupId: "7305f85d310f4f0283110b73a5f92178",
    groupName: "Shouki's nest",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 36 }],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [{ row: "G", number: 5 }],
      },
    ],
  },
  {
    groupId: "92c566f7cb2f4828894291a5914e4881",
    groupName: "OxO2",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "G", number: 37 },
          { row: "G", number: 38 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "I", number: 41 },
          { row: "I", number: 42 },
        ],
      },
    ],
  },
  {
    groupId: "0fa4c0e0bfa64e3fa591198ce9d92288",
    groupName: "阿熊是一隻熊",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 39 }],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [{ row: "H", number: 12 }],
      },
    ],
  },
  {
    groupId: "97acbe9c339f401c87709c3b850a417b",
    groupName: "夜貓館咖啡屋",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 40 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "G", number: 40 }],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [{ row: "G", number: 40 }],
      },
    ],
  },
  {
    groupId: "f9ef41e802f24e1a9ebab9eec43e18fd",
    groupName: "福島/日本/台湾 拉麺組っ！",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 41 }],
      },
    ],
  },
  {
    groupId: "16ccb13b584e48d9a99c8eec97af10d0",
    groupName: "こめかみ堂",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "G", number: 42 }],
      },
    ],
  },
  {
    groupId: "da72c4eadd1b41789d079b79919d791d",
    groupName: "ANGEL X ANGEL",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "G", number: 43 },
          { row: "G", number: 44 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "I", number: 9 },
          { row: "I", number: 10 },
        ],
      },
    ],
  },
  {
    groupId: "d0d0d3b6d266442d9c0a057ad11260e0",
    groupName: "墨繪師御歌頭",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 1 },
          { row: "H", number: 2 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "I", number: 43 },
          { row: "I", number: 44 },
        ],
      },
    ],
  },
  {
    groupId: "a15fe4eeaa424433a2e64bb9b80f4b86",
    groupName: "夜行動物館",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 3 },
          { row: "H", number: 4 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "H", number: 3 },
          { row: "H", number: 4 },
        ],
      },
    ],
  },
  {
    groupId: "8e2dfda09c4b49239f5a3e0e466d49e5",
    groupName: "KK魔法學院",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 5 },
          { row: "H", number: 6 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "H", number: 5 },
          { row: "H", number: 6 },
        ],
      },
    ],
  },
  {
    groupId: "2931239562734937b119e161725bae0a",
    groupName: "芙子煉的藝想室",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 7 },
          { row: "H", number: 8 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "H", number: 29 },
          { row: "H", number: 30 },
        ],
      },
    ],
  },
  {
    groupId: "322bf4beda914aa58eb7b2ae23773e5c",
    groupName: "照燒你的貓",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 9 },
          { row: "H", number: 10 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [{ row: "H", number: 16 }],
      },
    ],
  },
  {
    groupId: "1f96347948104a8db866f5a7ff79bef0",
    groupName: "女巫之骰",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 11 },
          { row: "H", number: 12 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "H", number: 12 }],
      },
    ],
  },
  {
    groupId: "c582526a5f784d10829e17b9b951d984",
    groupName: "光影之下",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "H", number: 13 }],
      },
    ],
  },
  {
    groupId: "e414eb7551b544899f3c98b0fa61be14",
    groupName: "魔法松鼠嘟嘟",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "H", number: 14 }],
      },
    ],
  },
  {
    groupId: "93f9ffb2948c46e59b9474906b09207e",
    groupName: "空罐王",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 15 },
          { row: "H", number: 16 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "H", number: 15 },
          { row: "H", number: 16 },
        ],
      },
    ],
  },
  {
    groupId: "e1c6a1f142014096ac95337b61202835",
    groupName: "加零他正站在電線桿下",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 17 },
          { row: "H", number: 18 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "H", number: 17 },
          { row: "H", number: 18 },
        ],
      },
    ],
  },
  {
    groupId: "4184915dd3ca4f379bd96ee1aaab6024",
    groupName: "畫說日常",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 19 },
          { row: "H", number: 20 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "H", number: 19 },
          { row: "H", number: 20 },
        ],
      },
    ],
  },
  {
    groupId: "4bfb4c6aa01d44a9a941887b98d47602",
    groupName: "埃及大旅社",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 21 },
          { row: "H", number: 22 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "H", number: 21 },
          { row: "H", number: 22 },
        ],
      },
    ],
  },
  {
    groupId: "5b03e78ff77b425f88e0e21e48bc6f83",
    groupName: "karomixとぱんのみみ",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 23 },
          { row: "H", number: 24 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "H", number: 23 },
          { row: "H", number: 24 },
        ],
      },
    ],
  },
  {
    groupId: "941c521c73ea4eb88112740b0cbb3138",
    groupName: "ハチゴ・ねこどーなつ",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 25 },
          { row: "H", number: 26 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "H", number: 25 },
          { row: "H", number: 26 },
        ],
      },
    ],
  },
  {
    groupId: "e4b702e2d4cd45e5b727264b28fcaa21",
    groupName: "しゅにち関数",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "H", number: 27 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "H", number: 27 }],
      },
    ],
  },
  {
    groupId: "22dfc46e04764f35aaadc61490d6302e",
    groupName: "翡翠亭",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "H", number: 28 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "H", number: 28 }],
      },
    ],
  },
  {
    groupId: "bdf446cf779c4f16bcb593031fbe4541",
    groupName: "下空少女",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 29 },
          { row: "H", number: 30 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "H", number: 29 },
          { row: "H", number: 30 },
        ],
      },
    ],
  },
  {
    groupId: "b9c60271942f4c9c84ea9ace934aa349",
    groupName: "夏天久一點",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "H", number: 31 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "H", number: 31 }],
      },
    ],
  },
  {
    groupId: "d016b5a1a49148d0bf95bbb8ac4b8749",
    groupName: "Atha Atelier",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "H", number: 32 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "H", number: 13 }],
      },
    ],
  },
  {
    groupId: "a7d9ef05ba3e45c796f6b5492517e288",
    groupName: "蛞蝓肉舍",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 33 },
          { row: "H", number: 34 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "O", number: 34 }],
      },
    ],
  },
  {
    groupId: "5a18df7a718d41d98945db3d542695e1",
    groupName: "七兒777",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 35 },
          { row: "H", number: 36 },
        ],
      },
    ],
  },
  {
    groupId: "87aa515d713e4f44836404c38a5ef91e",
    groupName: "蘿蔔農學院",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 37 },
          { row: "H", number: 38 },
        ],
      },
    ],
  },
  {
    groupId: "f2dc5cb3e6114ef19874b217489a2c28",
    groupName: "FAUNAS",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 39 },
          { row: "H", number: 40 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "H", number: 37 },
          { row: "H", number: 38 },
        ],
      },
    ],
  },
  {
    groupId: "fa8ad90eed45463797d0ba00b23f7613",
    groupName: "山羊怕怕沒有股份還沒成立公司",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 41 },
          { row: "H", number: 42 },
        ],
      },
    ],
  },
  {
    groupId: "7654a3bce34e4765ad8a31dc8542fde4",
    groupName: "GAKAKU",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "H", number: 43 },
          { row: "H", number: 44 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "H", number: 43 },
          { row: "H", number: 44 },
        ],
      },
    ],
  },
  {
    groupId: "27c07b891d744d8d8abfb6ec850131b9",
    groupName: "米納斯ミナス-MiNus-",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 1 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "I", number: 1 }],
      },
    ],
  },
  {
    groupId: "c4833eeb526b4abb80d3500a3dda2257",
    groupName: "FENNEC",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 2 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "I", number: 2 }],
      },
    ],
  },
  {
    groupId: "163cd0d4bc0643cc995c968edb60915d",
    groupName: "雙香美人僧王刃",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "I", number: 3 },
          { row: "I", number: 4 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "I", number: 3 },
          { row: "I", number: 4 },
        ],
      },
    ],
  },
  {
    groupId: "f482556c9c404058a0c4e4be7f85226c",
    groupName: "饒哲學與美人茗茶",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 5 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "I", number: 5 }],
      },
    ],
  },
  {
    groupId: "def83fe015c54397a98a984514c664c3",
    groupName: "餡子工房",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 6 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "E", number: 23 }],
      },
    ],
  },
  {
    groupId: "4a54875d1a9a4f4abf5be9db81c9f24d",
    groupName: "緋い笑撃",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 7 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "E", number: 24 }],
      },
    ],
  },
  {
    groupId: "2720202acdf9464f97b41ed199a2365f",
    groupName: "堯擺貼紙簿",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 8 }],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [{ row: "F", number: 6 }],
      },
    ],
  },
  {
    groupId: "b6b23b6b636f41af88345ab1d51a64bb",
    groupName: "多肉生物",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 9 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "I", number: 7 }],
      },
    ],
  },
  {
    groupId: "07965c22c0d6496c818d5c46d5e2f637",
    groupName: "無限地雷",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 10 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "I", number: 8 }],
      },
    ],
  },
  {
    groupId: "a9e0fbb683004392a0f5f0828a18c1a0",
    groupName: "闇夢館",
    groupLink: "https://www.facebook.com/darkmaya12",
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "I", number: 11 },
          { row: "I", number: 12 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "I", number: 11 },
          { row: "I", number: 12 },
        ],
      },
    ],
  },
  {
    groupId: "b59b9e16dedf4fdebc278e0ffd312ba1",
    groupName: "反式實驗劇場",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 13 }],
      },
    ],
  },
  {
    groupId: "9cfbad1101364ec4a6cc04462a70adca",
    groupName: "Woo!sland",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 14 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "I", number: 14 }],
      },
    ],
  },
  {
    groupId: "b8d1562adf2e4883b45b8335efd4edc5",
    groupName: "Single Type",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "I", number: 15 },
          { row: "I", number: 16 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "I", number: 15 }],
      },
    ],
  },
  {
    groupId: "635c6b0f780847b99e1a6a3a07102835",
    groupName: "A-icu 龍の巣",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "I", number: 17 },
          { row: "I", number: 18 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "I", number: 16 }],
      },
    ],
  },
  {
    groupId: "c47ee1ee26e24cda919e0569b1e200b5",
    groupName: "夜間飛行xHaruKenharu",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "I", number: 19 },
          { row: "I", number: 20 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "I", number: 17 },
          { row: "I", number: 18 },
        ],
      },
    ],
  },
  {
    groupId: "697e1881f390455ab2a22f661a633a87",
    groupName: "鉛筆盒",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "I", number: 21 },
          { row: "I", number: 22 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "I", number: 17 },
          { row: "I", number: 18 },
        ],
      },
    ],
  },
  {
    groupId: "468cc92a9a4d4c07bda55b4de985dd7b",
    groupName: "Fuumi",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "I", number: 23 },
          { row: "I", number: 24 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "I", number: 23 },
          { row: "I", number: 24 },
        ],
      },
    ],
  },
  {
    groupId: "72cf76a90fc3491ca5be7f468faafe8a",
    groupName: "Rosuuri",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "I", number: 25 },
          { row: "I", number: 26 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "I", number: 23 },
          { row: "I", number: 24 },
        ],
      },
    ],
  },
  {
    groupId: "6174945183cf42bc9c98797632775417",
    groupName: "やまぐちぷりんと",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 27 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "J", number: 13 }],
      },
    ],
  },
  {
    groupId: "f478ff27e42a44ceaef0ecffb55abbf5",
    groupName: "カカオポッド",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 28 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "J", number: 14 }],
      },
    ],
  },
  {
    groupId: "de5713ca76914402a37cc5fb0b3e4e33",
    groupName: "和(なごみ)",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 29 }],
      },
    ],
  },
  {
    groupId: "8a3c716b9b9d49bd9752cfc6bbb2e3fe",
    groupName: "Preteen-Party",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 30 }],
      },
    ],
  },
  {
    groupId: "703947f2243746f6ab292e79cd4ebf8f",
    groupName: "メルヘンBOX",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "I", number: 31 },
          { row: "I", number: 32 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "I", number: 31 },
          { row: "I", number: 32 },
        ],
      },
    ],
  },
  {
    groupId: "3e69e0226a094860bf5976f37db21843",
    groupName: "Sweet Avenue",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 33 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "I", number: 33 }],
      },
    ],
  },
  {
    groupId: "6142b9bd3d7b451c8e187cef2a1e4394",
    groupName: "Ｄｅｌａｙｄｅｒ",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 34 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "I", number: 34 }],
      },
    ],
  },
  {
    groupId: "09e2b8e32ba3412ab5f71db08c64476c",
    groupName: "失去明天(あしたをなくす)",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 35 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "I", number: 35 }],
      },
    ],
  },
  {
    groupId: "94c6753e4f564b5188de6f11447bf6e9",
    groupName: "broccoholic",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 36 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "I", number: 36 }],
      },
    ],
  },
  {
    groupId: "a326dc1bfd8f48a9b44697caf513df27",
    groupName: "宇宙波神山崎本社",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "I", number: 37 },
          { row: "I", number: 38 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "I", number: 38 }],
      },
    ],
  },
  {
    groupId: "99163c7cab4b42e9bfd009e360275432",
    groupName: "パコズ",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 39 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "I", number: 39 }],
      },
    ],
  },
  {
    groupId: "dc56bd1b66cd43a7ad6db7aaec20a004",
    groupName: "銀河菓子店",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "I", number: 40 }],
      },
    ],
  },
  {
    groupId: "53bad8b9488047609e5c1f1dc4782bb6",
    groupName: "大福喵喵",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "I", number: 41 },
          { row: "I", number: 42 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "I", number: 42 }],
      },
    ],
  },
  {
    groupId: "508463861630442a9e9df28f470a2804",
    groupName: "Humidity",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "I", number: 43 },
          { row: "I", number: 44 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "I", number: 43 },
          { row: "I", number: 44 },
        ],
      },
    ],
  },
  {
    groupId: "1837de16cc184b749dc9a05315bbc876",
    groupName: "white parabellum",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "J", number: 1 },
          { row: "J", number: 2 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "J", number: 1 },
          { row: "J", number: 2 },
        ],
      },
    ],
  },
  {
    groupId: "b7b60aa2e20a4feb8d30536737a7895f",
    groupName: "いちごさいず",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "J", number: 3 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "J", number: 3 }],
      },
    ],
  },
  {
    groupId: "8290a10b0a694505a852852158a667d5",
    groupName: "うつらうららか",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "J", number: 4 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "J", number: 4 }],
      },
    ],
  },
  {
    groupId: "6582f282a9124244a7244d2f9716bdf4",
    groupName: "ETERNAL LAND",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "J", number: 5 },
          { row: "J", number: 6 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "J", number: 5 },
          { row: "J", number: 6 },
        ],
      },
    ],
  },
  {
    groupId: "037cd13e9c7e4301abbbb36fc7a3a4d8",
    groupName: "きのこむ神",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "J", number: 7 },
          { row: "J", number: 8 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "J", number: 7 },
          { row: "J", number: 8 },
        ],
      },
    ],
  },
  {
    groupId: "c3e449a91cfe47c799cc7c4c6607f5fa",
    groupName: "バイキング",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "J", number: 9 },
          { row: "J", number: 10 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "J", number: 9 },
          { row: "J", number: 10 },
        ],
      },
    ],
  },
  {
    groupId: "05c4bacc3b444bf6a5fc2c38086d233a",
    groupName: "red miso soup",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "J", number: 11 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "J", number: 11 }],
      },
    ],
  },
  {
    groupId: "2082ccc5714b4cf4b7f0f5a0546a1957",
    groupName: "瓦屋工房",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "J", number: 12 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "J", number: 12 }],
      },
    ],
  },
  {
    groupId: "49c02966c3e84e149c8ed93490787495",
    groupName: "腦鷥小舖",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "J", number: 13 }],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [{ row: "J", number: 1 }],
      },
    ],
  },
  {
    groupId: "f48872dab9f4472ea5d8497da1994491",
    groupName: "Tobey·又·",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "J", number: 14 }],
      },
    ],
  },
  {
    groupId: "EEE89ab362386c04c9ab994b0e1f096b203EE",
    groupName: "BiBi",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "J", number: 15 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "J", number: 15 }],
      },
    ],
  },
  {
    groupId: "7695f039fdcc46ca9d0cbc704f5aa3a2",
    groupName: "紅線帝制",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "J", number: 16 }],
      },
    ],
  },
  {
    groupId: "18a019adc31f4106899f6ec73563c29e",
    groupName: "色企商行",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "J", number: 17 },
          { row: "J", number: 18 },
        ],
      },
    ],
  },
  {
    groupId: "d59c85ae62b5479ca35d48fe0c45ed55",
    groupName: "躲龜龜 x 貓頭鷹交通書",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "J", number: 19 },
          { row: "J", number: 20 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "I", number: 5 },
          { row: "J", number: 6 },
        ],
      },
    ],
  },
  {
    groupId: "b817a38cf2b144edb52965b3f3e6eb2a",
    groupName: "深海觸手怪",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "J", number: 21 },
          { row: "J", number: 22 },
        ],
      },
    ],
  },
  {
    groupId: "40ae66f2815a43c7916eaedc0955d2a2",
    groupName: "howu好油聚集地",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "J", number: 23 },
          { row: "J", number: 24 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "J", number: 23 },
          { row: "J", number: 24 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "J", number: 23 },
          { row: "J", number: 24 },
        ],
      },
    ],
  },
  {
    groupId: "65302ca4ff5b4b149d4052cdbdf62b06",
    groupName: "琉璃庭",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "J", number: 25 },
          { row: "J", number: 26 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "J", number: 25 },
          { row: "J", number: 26 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "J", number: 25 },
          { row: "J", number: 26 },
        ],
      },
    ],
  },
  {
    groupId: "d7cb383621084553a9d16ed9c351d596",
    groupName: "P.S.2",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "J", number: 27 },
          { row: "J", number: 28 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "J", number: 27 },
          { row: "J", number: 28 },
        ],
      },
    ],
  },
  {
    groupId: "8179039c127e449ab9b98944d24cc33e",
    groupName: "心重力動漫工作室",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "J", number: 29 },
          { row: "J", number: 30 },
        ],
      },
    ],
  },
  {
    groupId: "90f721d26fc64c39b5182826b1286e6c",
    groupName: "銀貂兔 Silver Marten studio",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "J", number: 31 },
          { row: "J", number: 32 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [
          { row: "J", number: 31 },
          { row: "J", number: 32 },
        ],
      },
    ],
  },
  {
    groupId: "e6579c702c1a43699cd98c191bfff218",
    groupName: "白色花園",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "J", number: 33 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "J", number: 33 }],
      },
    ],
  },
  {
    groupId: "34cc9264f8a34a3a8d6a0d74024ffbfb",
    groupName: "黎查",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "J", number: 34 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "K", number: 10 }],
      },
    ],
  },
  {
    groupId: "2c00c820bb264bac916de291229a5b13",
    groupName: "無限荒野",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "J", number: 35 }],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [{ row: "E", number: 42 }],
      },
    ],
  },
  {
    groupId: "402c6da4daac45a68d29403233019d58",
    groupName: "DeityMark",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "J", number: 36 }],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "E", number: 43 },
          { row: "E", number: 44 },
        ],
      },
    ],
  },
  {
    groupId: "b19113ce9af04c51acd07df6f3de4401",
    groupName: "大波斯菊花園",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "J", number: 37 },
          { row: "J", number: 38 },
        ],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "J", number: 37 }],
      },
    ],
  },
  {
    groupId: "8b5f62a49cc6403a8af4eca8c2b48734",
    groupName: "大概是...夭謬?",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "J", number: 39 }],
      },
      {
        activeDay: BoothActiveDay.day2,
        boothNumberList: [{ row: "J", number: 36 }],
      },
    ],
  },
  {
    groupId: "d0e87133e08849e99995d18220fb7600",
    groupName: "蝦子的腦內劇場",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "J", number: 40 }],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "J", number: 43 },
          { row: "J", number: 44 },
        ],
      },
    ],
  },
  {
    groupId: "a228db064f644f9f892db0f8fa961700",
    groupName: "M片 m-pien",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "J", number: 41 }],
      },
    ],
  },
  {
    groupId: "369ba1310ff44707b20ba0f723912bc3",
    groupName: "波比好朋友",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [{ row: "J", number: 42 }],
      },
    ],
  },
  {
    groupId: "a8455af7640d46de8e717ddde421d332",
    groupName: "FuwaFuwa軟趴趴",
    groupLink: null,
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "J", number: 43 },
          { row: "J", number: 44 },
        ],
      },
    ],
  },
  {
    groupId: "1a9aad7902834e5684689b099ad9a798",
    groupName: "萌妹子前線",
    groupLink: "https://www.facebook.com/LiushengArt",
    boothList: [
      {
        activeDay: BoothActiveDay.day1,
        boothNumberList: [
          { row: "K", number: 13 },
          { row: "K", number: 14 },
        ],
      },
      {
        activeDay: BoothActiveDay.day3,
        boothNumberList: [
          { row: "J", number: 37 },
          { row: "J", number: 38 },
        ],
      },
    ],
  },
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
];

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
