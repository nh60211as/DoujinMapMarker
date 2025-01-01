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
