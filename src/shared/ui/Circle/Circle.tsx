import { ReactSVG } from 'react-svg';
import CircleSVG from './Circle.svg';

interface ICircle {
  strokeWidth?: number;
  strokeOpacity?: number;
  radius?: number;
  color?: string;
}

const Circle = ({ strokeOpacity = 0.2, strokeWidth = 1, radius = 265, color = 'black' }: ICircle) => {
  return <ReactSVG src={CircleSVG} style={{ zIndex: 999 }} />;
};

export default Circle;
