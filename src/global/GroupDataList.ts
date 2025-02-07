import { CURRENT_GROUP_DATA } from '../services/GroupDataService';
import { GroupData } from '../types/GroupData';
import createStore from 'react-superstore';

export const [useGroupDataList, setGroupDataList, getGroupDataList] =
  createStore<Array<GroupData>>(CURRENT_GROUP_DATA);
