import { TIMELINE_MOCKS } from '@shared/mocks/TimelineMocks';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import React from 'react';
import './TimelineSelect.scss';
import { useTimelineMoveSelect } from './UseTimelineMoveSelect';
gsap.registerPlugin(MotionPathPlugin);

interface ITimelineSelect {
  currentAge: number;
  refPath: React.RefObject<SVGCircleElement>;
}

const TimelineSelect = ({ currentAge, refPath }: ITimelineSelect) => {
  const { onMouseEnter, onMouseLeave, onClick } = useTimelineMoveSelect({ currentAge, refPath });

  return (
    <div style={{ height: 0 }}>
      {TIMELINE_MOCKS.map((item) => (
        <div
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
