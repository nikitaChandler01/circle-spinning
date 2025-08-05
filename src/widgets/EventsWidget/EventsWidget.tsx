import { EVENTS_MOCKS } from '@shared/mocks/EventsMocks';
import TransparentCard from '@shared/ui/Cards/TransparentCard';
import Carousel from '@shared/ui/Carousel/Carousel';
import gsap from 'gsap';
import React, { useEffect } from 'react';
import './EventsWidget.scss';
import { TIMELINE_MOCKS } from '@shared/mocks/TimelineMocks';

interface IEventsWidget {
  ageId: number;
}

const EventsWidget = ({ ageId }: IEventsWidget) => {
  const containerId = (id: number) => `#events-from-age-${id}`;

  const timeOfAnimation = 0.3;

  useEffect(() => {
    gsap.to(containerId(ageId), { duration: timeOfAnimation, display: 'flex', opacity: 1, delay: timeOfAnimation });
    console.log(ageId);
    return () => {
      console.log(ageId);
      gsap.to(containerId(ageId), { duration: timeOfAnimation, display: 'none', opacity: 0 });
    };
  }, [ageId]);

  //зачекать в презентации функционала скролится ли карусель в начало при смене эры
  return (
    <React.Fragment>
      {TIMELINE_MOCKS.map((timelineMock) => {
        const events = EVENTS_MOCKS[timelineMock.id];
        return (
          <div key={timelineMock.id} id={`events-from-age-${timelineMock.id}`} style={{ display: 'none', opacity: 0 }}>
            <Carousel
              items={events}
              itemRenderer={(item) => <TransparentCard title={`${item.year}`} content={item.eventDesc} />}
            />
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default EventsWidget;
