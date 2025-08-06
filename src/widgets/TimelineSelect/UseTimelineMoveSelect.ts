import { TIMELINE_MOCKS } from '@shared/mocks/TimelineMocks';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import React, { useEffect, useRef, useState } from 'react';
import { activeAndHoveredSelectStyles } from './constants';
gsap.registerPlugin(MotionPathPlugin);

interface IUseTimelineMoveSelect {
  currentAge: number;
  refPath: React.RefObject<SVGCircleElement>;
}

export const useTimelineMoveSelect = ({ currentAge, refPath }: IUseTimelineMoveSelect) => {
  const firstId = TIMELINE_MOCKS[0].id;
  const orbitAnim = useRef<gsap.core.Tween | null>(null);
  const dotsRef = useRef<Record<string | number, HTMLDivElement | null>>({});

  //todo currentAge менять а не selectedId. состояние от состояния быть не должно
  const [selectedId, setSelectedId] = useState<string | null>(firstId.toString());
  const onMouseEnter = (id: number) => {
    if (id !== currentAge)
      gsap.to(dotsRef.current[id], {
        duration: 0.3,
        ease: 'power2.out',
        background: 'var(--bg-creamy)',
        color: 'var(--font-color)',
        scale: 8,
        boxShadow: '0 0 0 0.125px #303E5880',
      });
  };

  const onMouseLeave = (id: number) => {
    if (selectedId !== id.toString()) {
      gsap.to(dotsRef.current[id], {
        scale: 1,
        duration: 0.3,
        background: 'var(--font-color)',
        ease: 'power2.out',
      });
    }
  };

  useEffect(() => {
    if (refPath.current && selectedId) {
      if (orbitAnim?.current) {
        orbitAnim.current.kill();
      }
      orbitAnim.current = gsap.to(Object.values(dotsRef.current), {
        motionPath: {
          path: refPath.current,
          align: refPath.current,
          autoRotate: false,
          alignOrigin: [0.5, 0.5],
          start: (i) => (i + 0.5 - +selectedId + 1) / 6,
          end: (i) => (i + 0.5 - +selectedId + 1) / 6,
        },
        duration: 0,
      });
    }
    gsap.to(`#item-${firstId}`, activeAndHoveredSelectStyles);
  }, []);

  useEffect(() => {
    onClick(currentAge);

    return () => {
      onMouseLeave(currentAge);
    };
  }, [currentAge]);

  const onClick = (id: number) => {
    //todo currentAge менять а не selectedId. состояние от состояния быть не должно
    //todo currentAge менять а не selectedId. состояние от состояния быть не должно
    //todo currentAge менять а не selectedId. состояние от состояния быть не должно

    if (id.toString() === selectedId) return;
    gsap.to(dotsRef.current[id], activeAndHoveredSelectStyles);
    gsap.to(`#item-${selectedId}`, {
      scale: 1,
      duration: 0.3,
      background: 'var(--font-color)',
      ease: 'power2.out',
    });
    if (refPath.current)
      orbitAnim.current = gsap.to(Object.values(dotsRef.current), {
        motionPath: {
          path: refPath.current,
          align: refPath.current,
          autoRotate: false,
          alignOrigin: [0.5, 0.5],
          start: (i) => (i + 0.5 - +selectedId! + 1) / 6,
          end: (i) => (i + 0.5 - id + 1) / 6,
        },
        duration: 0.6,
        ease: 'power1.out',
      });
    setSelectedId(id.toString());
  };

  return { onMouseEnter, onMouseLeave, onClick, dotsRef };
};
