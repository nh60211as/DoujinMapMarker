export function defined<T>(input: T | undefined): T {
  if (input === undefined) {
    throw Error('Input is undefined when expecting a typed data.');
  }

  return input;
}

export function shallowEqual<T extends object>(a: T, b: T): boolean {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  return keysA.every((key) => a[key as keyof T] === b[key as keyof T]);
}
