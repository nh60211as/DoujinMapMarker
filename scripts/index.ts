import { GroupData } from '../src/types/GroupData';
import { csvToGroupDataList } from './script';
import * as fs from 'fs';

csvToGroupDataList('./data/FF44/group-list.csv', './data/FF44/booth-list.csv')
  .then((groupDataList: Array<GroupData>) => {
    fs.writeFileSync(
      './generated-data/FF44/group-data.json',
      JSON.stringify(groupDataList, null, 2), // 3rd argument is spacing level
      'utf-8',
    );
  })
  .catch((e) => {
    console.error(e);
  });
