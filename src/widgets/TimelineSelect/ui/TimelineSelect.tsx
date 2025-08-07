import { AppearingDisappearingText } from '@shared/ui/Typography/AppearingDisappearingText';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import React from 'react';
import { rotationCircleDuration } from '../constants';
import { useTimelineMoveSelect } from '../model';
import './TimelineSelect.scss';
import { TimelineMock } from '@shared/mocks/TimelineMocks';
gsap.registerPlugin(MotionPathPlugin);

interface ITimelineSelect<T> {
  currentAgeId: number;
  setCurrentAgeId: (id: number) => void;
  refPath: React.RefObject<SVGCircleElement>;
  timelineAges: T[];
}

const TimelineSelect = <T extends TimelineMock>({
  currentAgeId,
  setCurrentAgeId,
  refPath,
  timelineAges,
}: ITimelineSelect<T>) => {
  const { onMouseEnter, onMouseLeave, onClick, dotsRef } = useTimelineMoveSelect({
    currentAgeId,
    setCurrentAgeId,
    refPath,
    timelineAges,
  });

  return (
    <div style={{ height: 0 }}>
      {timelineAges.map((item, i) => (
        <div key={item.id}>
          <div
            ref={(el) => (dotsRef.current[item.id] = el)}
            id={`item-${item.id}`}
            key={item.id}
            className="timeline-option"
            onClick={() => onClick(item.id)}
            onMouseEnter={() => onMouseEnter(item.id)}
            onMouseLeave={() => onMouseLeave(item.id)}
          >
            <div>{item.id}</div>
            <AppearingDisappearingText
              text={item.title}
              isVisible={item.id === currentAgeId}
              duration={rotationCircleDuration - 0.2}
              delay={rotationCircleDuration + 0.2}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineSelect;
