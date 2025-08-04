import React from 'react';

import { EVENTS_MOCKS } from '@shared/mocks/EventsMocks';
import TransparentCard from '@shared/ui/Cards/TransparentCard';

const EventsWidget = () => {
  return (
    <div>
      {EVENTS_MOCKS['1'].map((event, index) => (
        <TransparentCard key={index} title={`${event.year}`} content={event.eventDesc} />
      ))}
    </div>
  );
};

export default EventsWidget;
