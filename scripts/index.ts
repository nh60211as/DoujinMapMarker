import { EventType } from '../src/types/EventType';
import { GroupData } from '../src/types/GroupData';
import { csvToGroupDataList } from './script';
import * as fs from 'fs';

// NOTE: The implementation should be changed with each event
const eventType: EventType = 'PF43';

csvToGroupDataList(
  `./data/${eventType}/group-list.csv`,
  `./data/${eventType}/booth-list.csv`,
)
  .then((groupDataList: Array<GroupData>) => {
    fs.writeFileSync(
      `./generated-data/${eventType}/group-data.json`,
      JSON.stringify(groupDataList, null, 2), // 3rd argument is spacing level
      'utf-8',
    );
  })
  .catch((e) => {
    console.error(e);
  });
