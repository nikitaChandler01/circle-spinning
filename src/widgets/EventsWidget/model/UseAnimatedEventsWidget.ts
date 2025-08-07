import useResize from '@shared/lib/useResize';
import { EventsMock } from '@shared/mocks/EventsMocks';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

interface IUseAnimatedEventsWidget<T> {
  mockEvents: T;
  setCurrentAgeId: (item: number) => void;
  ageId: number;
  titles: Record<number, string>;
}

export const useAnimatedEventsWidget = <T extends EventsMock>({
  ageId,
  setCurrentAgeId,
  mockEvents,
  titles,
}: IUseAnimatedEventsWidget<T>) => {
  const isMobile = useResize({ maxWidth: 320 });
  const containerRef = useRef<HTMLDivElement>(null);
  const fadeTween = useRef<gsap.core.Tween | null>(null);
  const timeOfAnimation = 0.3;
  const [events, setEvents] = useState(mockEvents[ageId]);
  const [title, setTitle] = useState<string>('');
  const prevId = useRef<number | null>(ageId);
  useEffect(() => {
    if (prevId.current === ageId) return;
    fadeTween.current?.kill();
    fadeTween.current = gsap.to(containerRef.current, {
      opacity: 0,
      y: isMobile ? 20 : undefined,
      duration: timeOfAnimation,
      onComplete: () => {
        setCurrentAgeId(ageId);
        setTitle(titles[ageId]);
        setEvents(mockEvents[ageId]);
        fadeTween.current = gsap.fromTo(
          containerRef.current,
          { opacity: 0, y: isMobile ? 20 : undefined },
          { opacity: 1, duration: timeOfAnimation, y: 0 },
        );
      },
    });
    return () => {
      prevId.current = ageId;
    };
  }, [ageId]);

  useEffect(() => {}, []);

  return {
    containerRef,
    events,
    title,
    timeOfAnimation,
  };
};
