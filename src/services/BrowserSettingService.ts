import { ValidZoomInValue } from '../types/ZoomInValue';

export function setZoomIn(zoomIn: ValidZoomInValue) {
  const localStorageKey = createZoomInKey();

  localStorage.setItem(localStorageKey, zoomIn.toString());
}

export function getZoomInOrDefault(
  validZoomInValueList: Array<number>,
  defaultValue: ValidZoomInValue,
): ValidZoomInValue {
  const localStorageKey = createZoomInKey();

  const rawZoomIn: string | null = localStorage.getItem(localStorageKey);

  if (rawZoomIn === null) {
    return defaultValue;
  }

  const parsedZoomIn: number = parseFloat(rawZoomIn);

  const closestZoomIn: number = findClosestValue(
    validZoomInValueList,
    parsedZoomIn,
  );

  return closestZoomIn;
}

export function setHeaderOpen(isOpen: boolean) {
  const localStorageKey = createHeaderOpenKey();

  localStorage.setItem(localStorageKey, isOpen.toString());
}

export function getHeaderOpen(defaultValue: boolean): boolean {
  const localStorageKey = createHeaderOpenKey();

  const rawIsCollapsed: string | null = localStorage.getItem(localStorageKey);

  if (rawIsCollapsed === null) {
    return defaultValue;
  }

  const isCollapsed: boolean = rawIsCollapsed === 'true';

  return isCollapsed;
}

function createZoomInKey(): string {
  return 'browser.setting.zoomIn';
}

function createHeaderOpenKey(): string {
  return 'browser.setting.headerOpen';
}

function findClosestValue(array: Array<number>, target: number): number {
  // Ensure the array is not empty
  if (array.length === 0) {
    throw new Error('Array cannot be empty');
  }

  // Initialize the closest value to the first element
  let closestValue = array[0];
  let smallestDifference = Math.abs(target - closestValue);

  // Iterate through the array to find the closest value
  for (let i = 1; i < array.length; i++) {
    const currentDifference = Math.abs(target - array[i]);

    if (currentDifference < smallestDifference) {
      closestValue = array[i];
      smallestDifference = currentDifference;
    }
  }

  return closestValue;
}
