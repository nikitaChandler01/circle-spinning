import React from 'react';
import './TimelineYears.scss';
import { OdometerCounter } from '@shared/ui/Typography/OdometerCounter';
import { TIMELINE_MOCKS } from '@shared/mocks/TimelineMocks';

interface ITimelineYears {
  currentAge: number;
}

const TimelineYears = ({ currentAge }: ITimelineYears) => {
  const foundTimeline = TIMELINE_MOCKS.find(({ id }) => id === currentAge);
  const startYear = foundTimeline?.startYear;
  const endYear = foundTimeline?.endYear;
  return (
    <div className="timeline-years">
      <OdometerCounter initialValue={startYear} />
      <OdometerCounter color="#EF5DA8" initialValue={endYear} />
    </div>
  );
};

export default TimelineYears;
