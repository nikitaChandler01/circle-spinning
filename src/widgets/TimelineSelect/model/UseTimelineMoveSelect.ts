import { TIMELINE_MOCKS } from '@shared/mocks/TimelineMocks';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import React, { useEffect, useRef } from 'react';
import { decreaseTarget, increaseTarget, moveForPath } from '../service';
gsap.registerPlugin(MotionPathPlugin);

interface IUseTimelineMoveSelect {
  currentAgeId: number;
  setCurrentAgeId: (id: number) => void;
  refPath: React.RefObject<SVGCircleElement>;
}

export const useTimelineMoveSelect = ({ setCurrentAgeId, currentAgeId, refPath }: IUseTimelineMoveSelect) => {
  const firstId = TIMELINE_MOCKS[0].id;
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
        startPoint: currentAgeId,
        endPoint: currentAgeId,
        duration: 0.6,
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
  }, [currentAgeId]);

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
        startPoint: prevId,
        endPoint: newId,
        duration: 0.6,
        ease: 'power1.out',
      });
    }
  };

  return { onMouseEnter, onMouseLeave, onClick, dotsRef };
};
