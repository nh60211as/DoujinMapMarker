import * as mapRecordService from '../services/MapRecordService';
import { BoothActiveDay } from '../types/BoothActiveDay';
import createStore from 'react-superstore';

export const [useBoothActiveDay, setBoothActiveDay, getBoothActiveDay] =
  createStore<BoothActiveDay>(mapRecordService.getActiveDayOrDefault());
