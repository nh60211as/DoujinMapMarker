// https://stackoverflow.com/a/39495173
type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

// Generate a range of value. Ex: IntRangeExclusive<1,4> = [1, 2, 3]
export type IntRangeExclusive<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;
