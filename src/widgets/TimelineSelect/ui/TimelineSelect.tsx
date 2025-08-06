import { TIMELINE_MOCKS } from '@shared/mocks/TimelineMocks';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import React from 'react';
import './TimelineSelect.scss';
import { useTimelineMoveSelect } from '../model';
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
        <div
          ref={(el) => (dotsRef.current[item.id] = el)}
          id={`item-${item.id}`}
          key={item.id}
          className="timeline-option"
          onClick={() => onClick(item.id)}
          onMouseEnter={() => onMouseEnter(item.id)}
          onMouseLeave={() => onMouseLeave(item.id)}
        >
          {item.id}
        </div>
      ))}
    </div>
  );
};

export default TimelineSelect;
