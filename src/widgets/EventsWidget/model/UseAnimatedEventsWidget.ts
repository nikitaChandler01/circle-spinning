import { EVENTS_MOCKS } from '@shared/mocks/EventsMocks';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

interface IUseAnimatedEventsWidget {
  setCurrentAgeId: (item: number) => void;
  ageId: number;
}

export const useAnimatedEventsWidget = ({ ageId, setCurrentAgeId: set }: IUseAnimatedEventsWidget) => {
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
        set(ageId);
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

  return {
    containerRef,
    events,
    timeOfAnimation,
  };
};
