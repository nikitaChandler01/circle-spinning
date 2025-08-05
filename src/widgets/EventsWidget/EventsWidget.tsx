import React from 'react';
import './EventsWidget.scss';
import { EVENTS_MOCKS } from '@shared/mocks/EventsMocks';
import TransparentCard from '@shared/ui/Cards/TransparentCard';
import Carousel from '@shared/ui/Carousel/Carousel';

interface IEventsWidget {
  ageId: number;
}

const EventsWidget = ({ ageId }: IEventsWidget) => {
  const events = EVENTS_MOCKS[ageId];
  //зачекать в презентации функционала скролится ли карусель в начало при смене эры
  return (
    <Carousel
      items={events}
      itemRenderer={(item) => <TransparentCard title={`${item.year}`} content={item.eventDesc} />}
    />
  );
};

export default EventsWidget;
