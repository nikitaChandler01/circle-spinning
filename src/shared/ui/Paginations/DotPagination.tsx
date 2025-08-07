import './DotPagination.scss';

interface IDotPagination {
  count: number;
  activeIndex: number;
  onClick: (idx: number) => void;
}

const DotPagination = ({ count, activeIndex, onClick }: IDotPagination) => {
  return (
    <div className="dot-pagination-container">
      {Array.from({ length: count }).map((_, idx) => {
        const onClick_ = () => onClick(idx);
        return (
          <div
            key={idx}
            onClick={onClick_}
            className={`dot-pagination-item ${idx === activeIndex ? 'dot-pagination-item--active' : ''}`}
          />
        );
      })}
    </div>
  );
};

export default DotPagination;
