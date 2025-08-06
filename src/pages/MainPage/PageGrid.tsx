import React from 'react';
import './PageGrid.scss';

interface IPageGrid {
  circleRef: React.RefObject<SVGCircleElement>;
}

const PageGrid = ({ circleRef }: IPageGrid) => {
  return (
    <div className="grid-box-container">
      <div className="grid-box-container__upper">
        <div className="default-grid-box  default-grid-box--small" />
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
