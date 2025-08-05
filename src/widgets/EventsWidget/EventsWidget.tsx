import { EVENTS_MOCKS } from '@shared/mocks/EventsMocks';
import TransparentCard from '@shared/ui/Cards/TransparentCard';
import Carousel from '@shared/ui/Carousel/Carousel';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import './EventsWidget.scss';
import { useAnimatedEventsWidget } from './UseAnimatedEventsWidget';

interface IEventsWidget {
  ageId: number;
}

const EventsWidget = ({ ageId }: IEventsWidget) => {
  const { containerRef, events } = useAnimatedEventsWidget({ ageId });

  return (
    <div ref={containerRef}>
      <Carousel
        items={events}
        itemRenderer={(item) => <TransparentCard title={`${item.year}`} content={item.eventDesc} />}
      />
    </div>
  );
};

export default EventsWidget;

//зачекать в презентации функционала скролится ли карусель в начало при смене эры
