import { getNeededDigitFormat } from '@shared/lib/getNeedDigitFormat';
type CounterForm = '1-digit' | '2-digit' | '3-digit';

interface ITextCounter {
  maxValue: number;
  currentValue: number;
  format?: CounterForm;
}

const TextCounter = ({ maxValue, currentValue, format = '2-digit' }: ITextCounter) => {
  const countOfDigits = Number(format[0]) as 1 | 2 | 3;
  const maxValue_ = getNeededDigitFormat(countOfDigits, maxValue);
  const currentValue_ = getNeededDigitFormat(countOfDigits, currentValue);

  return (
    <p>
      {currentValue_}/{maxValue_}
    </p>
  );
};

export default TextCounter;
