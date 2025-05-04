export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function isBetween(num: number, low: number, high: number): boolean {
  return low <= num && num <= high;
}
