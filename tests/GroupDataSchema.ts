import { Booth } from '../src/types/Booth';
import { BoothNumber } from '../src/types/BoothNumber';
import { GroupData } from '../src/types/GroupData';
import Joi from 'joi';

// NOTE: The implementation should be changed with each event
const BoothActiveDaySchema = Joi.string()
  .valid('PF42_DAY_1', 'PF42_DAY_2')
  .required();

// Joi schema for BoothNumber (with row-specific range validation)
const BoothNumberSchema = Joi.object<BoothNumber, true>({
  row: Joi.string()
    .valid('A', 'B', 'C', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'W')
    .required(),
  number: Joi.number()
    .custom((value, helpers) => {
      if (
        value >= 1 &&
        value <= 44 &&
        ['A', 'B', 'C'].includes(helpers.state.ancestors[0].row)
      ) {
        return value;
      }
      if (
        value >= 1 &&
        value <= 48 &&
        ['L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S'].includes(
          helpers.state.ancestors[0].row,
        )
      ) {
        return value;
      }
      if (
        value >= 1 &&
        value <= 42 &&
        ['W'].includes(helpers.state.ancestors[0].row)
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
  tagList: Joi.array().items(Joi.string()).required(),
});

export const GroupDataArraySchema = Joi.array()
  .items(GroupDataSchema)
  .required();
