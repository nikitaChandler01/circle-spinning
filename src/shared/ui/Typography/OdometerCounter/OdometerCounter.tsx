import React from 'react';
import './OdometerCounter.scss';
interface IOdometerCounter {
  initialValue: number;
}

const OdometerCounter = ({ initialValue }: IOdometerCounter) => {
  return <div className="odometer-counter">{initialValue}</div>;
};

export default OdometerCounter;
