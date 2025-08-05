import './HighlightTitle.scss';
interface IHighlightTitle {
  text: string;
}

const HighlightTitle = ({ text }: IHighlightTitle) => {
  return (
    <div className="highlight-title">
      <div className="highlight-title__gradient-box" />
      <h1 className="highlight-title__text">{text}</h1>
    </div>
  );
};

export default HighlightTitle;
