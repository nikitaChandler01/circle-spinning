import React from 'react';
import './TimelineYears.scss';
import { OdometerCounter } from '@shared/ui/Typography/OdometerCounter';

interface ITimelineYears {
  currentAge: number;
}

const TimelineYears = ({ currentAge }: ITimelineYears) => {
  return (
    <div className="timeline-years">
      <OdometerCounter initialValue={2015} />
    </div>
  );
};

export default TimelineYears;
