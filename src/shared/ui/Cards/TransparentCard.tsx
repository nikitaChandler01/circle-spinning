import './TransparentCard.scss';

interface ITransparentCard {
  title: string;
  content: string;
}

const TransparentCard = ({ title, content }: ITransparentCard) => {
  return (
    <div className="transparent-card">
      <h2 className="transparent-card__title">{title}</h2>
      <p className="transparent-card__content">{content}</p>
    </div>
  );
};

export default TransparentCard;
