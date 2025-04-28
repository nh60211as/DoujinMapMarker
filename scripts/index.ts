import { EventType, eventTypeArray } from '../src/types/EventType';
import { GroupData } from '../src/types/GroupData';
import { csvToGroupDataList } from './script';
import * as fs from 'fs';

// FIXME: actual find the event type
// current command `node ./generated-script/scripts/index.js IF6`
const eventTypeNullableString: string | undefined = process.argv[2];

if (eventTypeNullableString === undefined) {
  console.error(`Expected input argument.`);
}

if (eventTypeArray.includes(eventTypeNullableString as EventType) === false) {
  console.error(`Invalid input event type [${eventTypeNullableString}].`);
}

const eventType: EventType = eventTypeNullableString as EventType;

// NOTE: The implementation should be changed with each event
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
