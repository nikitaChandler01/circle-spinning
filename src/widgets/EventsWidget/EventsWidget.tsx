import React from 'react';
import './EventsWidget.scss';
import { EVENTS_MOCKS } from '@shared/mocks/EventsMocks';
import TransparentCard from '@shared/ui/Cards/TransparentCard';
import Carousel from '@shared/ui/Carousel/Carousel';

const EventsWidget = () => {
  return (
    <Carousel
      items={EVENTS_MOCKS['1']}
      itemRenderer={(item) => <TransparentCard title={`${item.year}`} content={item.eventDesc} />}
    />
  );
};

export default EventsWidget;
