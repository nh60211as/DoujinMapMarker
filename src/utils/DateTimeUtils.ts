const prefixZero = (num: number): string => num.toString().padStart(2, "0");

export const getIsoDateStringForFilename = (): string => {
  const date = new Date();
  // ECMAScript defines month as 0 to 11
  return (
    date.getFullYear() +
    "-" +
    prefixZero(date.getMonth() + 1) +
    "-" +
    prefixZero(date.getDate()) +
    "-" +
    prefixZero(date.getHours()) +
    "-" +
    prefixZero(date.getMinutes()) +
    "-" +
    prefixZero(date.getSeconds())
  );
};
