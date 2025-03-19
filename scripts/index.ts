import { GroupData } from '../src/types/GroupData';
import { csvToGroupDataList } from './script';
import * as fs from 'fs';

// NOTE: The implementation should be changed with each event
csvToGroupDataList('./data/PF42/group-list.csv', './data/PF42/booth-list.csv')
  .then((groupDataList: Array<GroupData>) => {
    fs.writeFileSync(
      './generated-data/PF42/group-data.json',
      JSON.stringify(groupDataList, null, 2), // 3rd argument is spacing level
      'utf-8',
    );
  })
  .catch((e) => {
    console.error(e);
  });
