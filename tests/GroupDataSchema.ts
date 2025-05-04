import { Booth } from '../src/types/Booth';
import { BoothNumber } from '../src/types/BoothNumber';
import { GroupData } from '../src/types/GroupData';
import { isBetween } from '../src/utils/NumberUtils';
import Joi from 'joi';

// NOTE: The implementation should be changed with each event
const BoothActiveDaySchema = Joi.string().valid('IF6_DAY_1').required();

// Joi schema for BoothNumber (with row-specific range validation)
const BoothNumberSchema = Joi.object<BoothNumber, true>({
  row: Joi.string()
    .valid(
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    )
    .required(),
  number: Joi.number()
    .custom((value, helpers) => {
      if (
        isBetween(value, 1, 40) &&
        ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'].includes(
          helpers.state.ancestors[0].row,
        )
      ) {
        return value;
      }
      if (
        isBetween(value, 1, 44) &&
        ['R', 'S', 'T', 'U'].includes(helpers.state.ancestors[0].row)
      ) {
        return value;
      }
      if (
        isBetween(value, 1, 40) &&
        ['V'].includes(helpers.state.ancestors[0].row)
      ) {
        return value;
      }
      if (
        isBetween(value, 1, 28) &&
        ['W', 'X', 'Y'].includes(helpers.state.ancestors[0].row)
      ) {
        return value;
      }
      if (
        isBetween(value, 1, 32) &&
        ['Z'].includes(helpers.state.ancestors[0].row)
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
