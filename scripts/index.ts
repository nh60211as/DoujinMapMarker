import { GroupData } from '../src/types/GroupData';
import { csvToGroupDataList } from './script';
import * as fs from 'fs';

csvToGroupDataList(
  './data/CWTxACCF/group-list.csv',
  './data/CWTxACCF/booth-list.csv',
)
  .then((groupDataList: Array<GroupData>) => {
    fs.writeFileSync(
      './generated-data/CWTxACCF/group-data.json',
      JSON.stringify(groupDataList, null, 2), // 3rd argument is spacing level
      'utf-8',
    );
  })
  .catch((e) => {
    console.error(e);
  });
