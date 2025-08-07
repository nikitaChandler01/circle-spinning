import { TimelineMock } from '@shared/mocks/TimelineMocks';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import React, { useEffect, useRef } from 'react';
import { rotationCircleDuration } from '../constants';
import { decreaseTarget, increaseTarget, moveForPath } from '../service';
import useResize from '@shared/lib/useResize';
gsap.registerPlugin(MotionPathPlugin);

interface IUseTimelineMoveSelect<T> {
  currentAgeId: number;
  setCurrentAgeId: (id: number) => void;
  refPath: React.RefObject<SVGCircleElement>;
  timelineAges: T[];
}

export const useTimelineMoveSelect = <T extends TimelineMock>({
  setCurrentAgeId,
  currentAgeId,
  refPath,
  timelineAges,
}: IUseTimelineMoveSelect<T>) => {
  const isMobile = useResize({ maxWidth: 320 });
  const firstId = timelineAges[0].id;
  const orbitAnim = useRef<gsap.core.Tween | null>(null);
  const dotsRef = useRef<Record<string | number, HTMLDivElement | null>>({});
  const prevId = useRef<number | null>(null);
  useEffect(() => {
    if (refPath.current && currentAgeId) {
      if (orbitAnim?.current) {
        orbitAnim.current.kill();
      }
      orbitAnim.current = moveForPath({
        path: refPath.current,
        elements: Object.values(dotsRef.current),
        startPoint: timelineAges.findIndex((item) => item.id === currentAgeId),
        endPoint: timelineAges.findIndex((item) => item.id === currentAgeId),
        duration: rotationCircleDuration,
        ease: 'power1.out',
      });
    }
    increaseTarget(dotsRef.current[firstId]);
  }, []);

  useEffect(() => {
    increaseTarget(dotsRef.current[currentAgeId]);
    rotate(prevId.current ?? currentAgeId, currentAgeId);
    return () => {
      prevId.current = currentAgeId;
      decreaseTarget(dotsRef.current[currentAgeId]);
    };
  }, [currentAgeId, isMobile]);

  const onClick = (id: number) => {
    setCurrentAgeId(id);
  };
  const onMouseEnter = (id: number) => {
    if (id !== currentAgeId) increaseTarget(dotsRef.current[id]);
  };

  const onMouseLeave = (id: number) => {
    if (currentAgeId !== id) {
      decreaseTarget(dotsRef.current[id]);
    }
  };

  const rotate = (prevId: number, newId: number) => {
    if (refPath.current) {
      orbitAnim.current?.kill();
      orbitAnim.current = moveForPath({
        path: refPath.current,
        elements: Object.values(dotsRef.current),
        startPoint: timelineAges.findIndex((item) => item.id === prevId),
        endPoint: timelineAges.findIndex((item) => item.id === newId),
        duration: 0.6,
        ease: 'power1.out',
      });
    }
  };

  return { onMouseEnter, onMouseLeave, onClick, dotsRef };
};
