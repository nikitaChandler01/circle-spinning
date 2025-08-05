import { EVENTS_MOCKS } from '@shared/mocks/EventsMocks';
import TransparentCard from '@shared/ui/Cards/TransparentCard';
import Carousel from '@shared/ui/Carousel/Carousel';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import './EventsWidget.scss';

interface IEventsWidget {
  ageId: number;
}

const EventsWidget = ({ ageId }: IEventsWidget) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fadeTween = useRef<gsap.core.Tween | null>(null);
  const timeOfAnimation = 0.3;
  const [currentAgeId, setCurrentAgeId] = useState(ageId);
  const [events, setEvents] = useState(EVENTS_MOCKS[ageId]);

  useEffect(() => {
    if (ageId === currentAgeId) return;
    fadeTween.current?.kill();
    fadeTween.current = gsap.to(containerRef.current, {
      opacity: 0,
      duration: timeOfAnimation,
      onComplete: () => {
        setCurrentAgeId(ageId);
        setEvents(EVENTS_MOCKS[ageId]);
        fadeTween.current = gsap.fromTo(
          containerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: timeOfAnimation },
        );
      },
    });
  }, [ageId]);

  useEffect(() => {
    gsap.set(containerRef.current, { opacity: 1 });
  }, []);

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
