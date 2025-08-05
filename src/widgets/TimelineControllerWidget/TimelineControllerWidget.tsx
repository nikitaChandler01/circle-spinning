import { TIMELINE_MOCKS } from '@shared/mocks/TimelineMocks';
import { CircleButton } from '@shared/ui/Buttons/CircleButton';
import { TextCounter } from '@shared/ui/Typography/TextCounter';
import './TimelineControllerWidget.scss';

interface ITimelineControllerWidget {
  currentAge: number;
  setCurrentAge: (age: number) => void;
}

const TimelineControllerWidget = ({ currentAge, setCurrentAge }: ITimelineControllerWidget) => {
  const maxCount = TIMELINE_MOCKS.length;

  const onCickNext = () => {
    const newCurrentAge = currentAge + 1;
    setCurrentAge(newCurrentAge > maxCount ? 1 : newCurrentAge);
  };

  const onClickPrev = () => {
    const newCurrentAge = currentAge - 1;
    setCurrentAge(newCurrentAge < 1 ? maxCount : newCurrentAge);
  };

  return (
    <div className="timeline-control">
      <TextCounter currentValue={currentAge} maxValue={maxCount} />
      <div className="timeline-control__buttons">
        <CircleButton type="prev" onClick={onClickPrev} />
        <CircleButton type="next" onClick={onCickNext} />
      </div>
    </div>
  );
};

export default TimelineControllerWidget;
