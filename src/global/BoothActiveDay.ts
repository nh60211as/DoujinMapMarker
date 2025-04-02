import {
  BoothActiveDay,
  DEFAULT_BOOTH_ACTIVE_DAY,
} from '../types/BoothActiveDay';
import createStore from 'react-superstore';

export const [useBoothActiveDay, setBoothActiveDay, getBoothActiveDay] =
  createStore<BoothActiveDay>(DEFAULT_BOOTH_ACTIVE_DAY);
