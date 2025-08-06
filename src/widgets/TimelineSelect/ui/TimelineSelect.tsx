import { TIMELINE_MOCKS } from '@shared/mocks/TimelineMocks';
import { AppearingDisappearingText } from '@shared/ui/Typography/AppearingDisappearingText';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import React from 'react';
import { rotationCircleDuration } from '../constants';
import { useTimelineMoveSelect } from '../model';
import './TimelineSelect.scss';
gsap.registerPlugin(MotionPathPlugin);

interface ITimelineSelect {
  currentAgeId: number;
  setCurrentAgeId: (id: number) => void;
  refPath: React.RefObject<SVGCircleElement>;
}

const TimelineSelect = ({ currentAgeId, setCurrentAgeId, refPath }: ITimelineSelect) => {
  const { onMouseEnter, onMouseLeave, onClick, dotsRef } = useTimelineMoveSelect({
    currentAgeId,
    setCurrentAgeId,
    refPath,
  });

  return (
    <div style={{ height: 0 }}>
      {TIMELINE_MOCKS.map((item, i) => (
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
