import rawGroupData from '../generated-data/FF46/group-data.json';
import { GroupData } from '../src/types/GroupData';
import {
  getUnsanitizedGroupDataList,
  GroupDataWithSanitizationResult,
} from './script';
import * as fs from 'fs';

// The data should be validated in test (DO NOT use `as Array<GroupData>` in any other places)
export const CURRENT_GROUP_DATA: Array<GroupData> =
  rawGroupData as Array<GroupData>;

getUnsanitizedGroupDataList(CURRENT_GROUP_DATA)
  .then((unsanitizedGroupDataList: Array<GroupDataWithSanitizationResult>) => {
    fs.writeFileSync(
      `./unsanitized-group-data.json`,
      JSON.stringify(unsanitizedGroupDataList, null, 2), // 3rd argument is spacing level
      'utf-8',
    );

    if (unsanitizedGroupDataList.length > 0) {
      console.error(
        'There is unsanitized group data. Run the command locally to see the result.',
      );
      process.exitCode = 1;
    } else {
      process.exitCode = 0;
    }
  })
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  });
