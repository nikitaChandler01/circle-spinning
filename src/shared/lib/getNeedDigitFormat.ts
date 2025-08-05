export const getNeededDigitFormat = (countOfDigits: 1 | 2 | 3, value: number): string => {
  return String(value).padStart(countOfDigits, '0');
};
