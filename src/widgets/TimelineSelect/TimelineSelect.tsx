import { TIMELINE_MOCKS } from '@shared/mocks/TimelineMocks';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import React, { useEffect } from 'react';
import './TimelineSelect.scss';
import { useTimelineMoveSelect } from './UseTimelineMoveSelect';
gsap.registerPlugin(MotionPathPlugin);

interface ITimelineSelect {
  refPath: React.RefObject<SVGCircleElement>;
}

const TimelineSelect = ({ refPath }: ITimelineSelect) => {
  const { onMouseEnter, onMouseLeave } = useTimelineMoveSelect({ refPath });

  useEffect(() => {}, []);

  return (
    <div style={{ height: 0 }}>
      {TIMELINE_MOCKS.map((item) => (
        <div
          id={`item-${item.id}`}
          key={item.id}
          className="timeline-option"
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
