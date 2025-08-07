import React from 'react';
import TimelineSelect from './TimelineSelect';
import useResize from '@shared/lib/useResize';
import { TimelineMock } from '@shared/mocks/TimelineMocks';

interface ITimelineSelectWrapper<T> {
  currentAgeId: number;
  setCurrentAgeId: (id: number) => void;
  refPath: React.RefObject<SVGCircleElement>;
  timelineAges: T[];
}

const TimelineSelectWrapper = <T extends TimelineMock>(props: ITimelineSelectWrapper<T>) => {
  const isMobile = useResize({ maxWidth: 320 });
  return <div>{isMobile ? undefined : <TimelineSelect {...props} />}</div>;
};

export default TimelineSelectWrapper;
