import React from 'react';
import './PageGrid.scss';
import { Circle } from '@shared/ui/Circle';

interface IPageGrid {
  circleRef: React.RefObject<SVGCircleElement>;
}

const PageGrid = ({ circleRef }: IPageGrid) => {
  return (
    <div className="grid-box-container">
      <div className="grid-box-container__upper">
        <div className="default-grid-box  default-grid-box--small">
          <Circle strokeOpacity={0.2} forwardRef={circleRef} />
        </div>
        <div className="default-grid-box default-grid-box--small" />
      </div>
      <div className="grid-box-container__down">
        <div className="default-grid-box" />
        <div className="default-grid-box" />
      </div>
    </div>
  );
};

export default PageGrid;
