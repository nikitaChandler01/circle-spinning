import './CircleButton.scss';

interface ICircleButton {
  type: 'next' | 'prev';
  onClick: () => void;
}

const CircleButton = ({ type, onClick }: ICircleButton) => {
  return <div onClick={onClick} className={`cursor-pointer circle-button circle-button--${type}`} />;
};

export default CircleButton;
