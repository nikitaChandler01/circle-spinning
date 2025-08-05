import React from 'react';

interface ICircle {
  strokeWidth?: number;
  strokeOpacity?: number;
  radius?: number;
  color?: string;
}

const Circle = ({ strokeOpacity = 0.2, strokeWidth = 1, radius = 265, color = 'black' }: ICircle) => {
  return (
    <svg
      width={`${radius * 2}`}
      height={`${radius * 2}`}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={`${radius}`}
        cy={`${radius}`}
        r={`${radius}`}
        strokeOpacity={`${strokeOpacity}`}
        strokeWidth={`${strokeWidth}`}
        stroke={color}
        fill={color}
      />
    </svg>
  );
};

export default Circle;
