import { CircleButton } from '@shared/ui/Buttons/CircleButton';
import { TextCounter } from '@shared/ui/Typography/TextCounter';
import './TimelineControllerWidget.scss';
import { DotPagination } from '@shared/ui/Paginations';
import { TimelineMock } from '@shared/mocks/TimelineMocks';

interface ITimelineControllerWidget<T> {
  currentAge: number;
  setCurrentAge: (age: number) => void;
  timelineAges: T[];
}

const TimelineControllerWidget = <T extends TimelineMock>({
  currentAge,
  setCurrentAge,
  timelineAges,
}: ITimelineControllerWidget<T>) => {
  const maxCount = timelineAges.length;
  const activeIndex = timelineAges.findIndex(({ id }) => id === currentAge);
  const onCickNext = () => {
    const newCurrentAge = currentAge + 1;
    setCurrentAge(newCurrentAge > maxCount ? 1 : newCurrentAge);
  };
  const onClickPrev = () => {
    const newCurrentAge = currentAge - 1;
    setCurrentAge(newCurrentAge < 1 ? maxCount : newCurrentAge);
  };

  const onPaginationDotClick = (idx: number) => {
    const { id } = timelineAges[idx];
    setCurrentAge(id);
  };

  return (
    <div className="timeline-control">
      <div>
        <TextCounter currentValue={currentAge} maxValue={maxCount} />
        <div className="timeline-control__buttons">
          <CircleButton type="prev" onClick={onClickPrev} />
          <CircleButton type="next" onClick={onCickNext} />
        </div>
      </div>
      <div className="timeline-control__pagination">
        <DotPagination count={maxCount} onClick={onPaginationDotClick} activeIndex={activeIndex} />
      </div>
    </div>
  );
};

export default TimelineControllerWidget;
