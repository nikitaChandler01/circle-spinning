import React from 'react';

interface ICircle {
  forwardRef?: React.RefObject<SVGCircleElement>;
  strokeWidth?: number;
  strokeOpacity?: number;
  radius?: number;
  color?: string;
}

const Circle = ({ forwardRef, strokeOpacity = 0.2, strokeWidth = 1, radius = 265, color = 'black' }: ICircle) => {
  return (
    <svg
      width={`${radius * 2}`}
      height={`${radius * 2}`}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute' }}
    >
      <path
        ref={forwardRef}
        d={`M ${radius},${radius - radius} 
      a ${radius},${radius} 0 0,1 0,${2 * radius} 
      a ${radius},${radius} 0 0,1 0,${-2 * radius}`}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        stroke={color}
        fill="none"
      />
    </svg>
  );
};

export default Circle;
