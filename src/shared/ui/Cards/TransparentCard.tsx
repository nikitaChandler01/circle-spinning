import './TransparentCard.scss';

interface ITransparentCard {
  title: string;
  content: string;
}

export const TransparentCard = ({ title, content }: ITransparentCard) => (
  <div className="transparent-card">
    <h3 className="transparent-card__title">{title}</h3>
    <div className="transparent-card__content">{content}</div>
  </div>
);

export default TransparentCard;
