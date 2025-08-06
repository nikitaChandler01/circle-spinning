import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './OdometerCounter.scss';
interface IOdometerCounter {
  initialValue: number | undefined;
  color?: string;
}

const OdometerCounter = ({ initialValue, color }: IOdometerCounter) => {
  const showingNum = initialValue ?? '----';
  const disabled = typeof showingNum === 'number';
  const [prevValue, setPrevValue] = useState<number | undefined>(initialValue);
  const odometerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    return () => {
      setPrevValue(initialValue);
      gsap.from(odometerRef.current, {
        innerText: initialValue,
        duration: 0.5,
        snap: {
          innerText: 1,
        },
        ease: 'power1.out',
      });
    };
  }, [initialValue]);

  return (
    <div
      ref={odometerRef}
      className={`odometer-counter ${disabled ? '' : 'odometer-counter--disabled'}`}
      style={{ color }}
    >
      {initialValue}
    </div>
  );
};

export default OdometerCounter;
