import Joi from "joi";
import { BoothActiveDay } from "../src/types/BoothActiveDay";
import { BoothNumber } from "../src/types/BoothNumber";
import { Booth } from "../src/types/Booth";
import { GroupData } from "../src/types/GroupData";

const BoothActiveDaySchema = Joi.number()
  .valid(BoothActiveDay.day1, BoothActiveDay.day2, BoothActiveDay.day3)
  .required();

// Joi schema for BoothNumber (with row-specific range validation)
const BoothNumberSchema = Joi.object<BoothNumber, true>({
  row: Joi.string()
    .valid(
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "W",
    )
    .required(),
  number: Joi.number()
    .custom((value, helpers) => {
      if (
        (value >= 1 &&
          value <= 22 &&
          ["A"].includes(helpers.state.ancestors[0].row)) ||
        (value >= 1 &&
          value <= 44 &&
          [
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
          ].includes(helpers.state.ancestors[0].row)) ||
        (value >= 1 &&
          value <= 48 &&
          ["O", "P", "Q", "R", "S", "T"].includes(
            helpers.state.ancestors[0].row,
          )) ||
        (value >= 1 &&
          value <= 44 &&
          ["U"].includes(helpers.state.ancestors[0].row)) ||
        (value >= 1 &&
          value <= 42 &&
          ["W"].includes(helpers.state.ancestors[0].row))
      ) {
        return value;
      }
      return helpers.error(
        `Invalid number for row ${helpers.state.ancestors[0].row}`,
      );
    })
    .required(),
});

// Joi schema for Booth (BoothActiveDay and BoothNumber array)
const BoothSchema = Joi.object<Booth, true>({
  activeDay: BoothActiveDaySchema,
  boothNumberList: Joi.array().items(BoothNumberSchema).required(),
}).required();

// Joi schema for GroupData (including boothList)
const GroupDataSchema = Joi.object<GroupData, true>({
  groupId: Joi.string().required(),
  groupName: Joi.string().required(),
  groupLink: Joi.string().allow(null),
  boothList: Joi.array().items(BoothSchema).required(),
});

export const GroupDataArraySchema = Joi.array()
  .items(GroupDataSchema)
  .required();
