import React from 'react';
import './OdometerCounter.scss';
interface IOdometerCounter {
  initialValue: number | undefined;
  color?: string;
}

const OdometerCounter = ({ initialValue, color }: IOdometerCounter) => {
  const showingNum = initialValue ?? '----';
  const disabled = typeof showingNum === 'number';
  return (
    <div className={`odometer-counter ${disabled ? '' : 'odometer-counter--disabled'}`} style={{ color }}>
      {showingNum}
    </div>
  );
};

export default OdometerCounter;
