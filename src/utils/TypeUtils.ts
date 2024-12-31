export function defined<T>(input: T | undefined): T {
  if (input === undefined) {
    throw Error("Input is undefined when expecting a typed data.");
  }

  return input;
}
