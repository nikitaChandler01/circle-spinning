export const getNeededDigitFormat = (countOfDigits: number, value: number): string => {
  return String(value).padStart(countOfDigits, '0');
};
