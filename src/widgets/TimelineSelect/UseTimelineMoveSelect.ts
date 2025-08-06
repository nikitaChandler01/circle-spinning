import { TIMELINE_MOCKS } from '@shared/mocks/TimelineMocks';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import React, { useEffect, useRef, useState } from 'react';
gsap.registerPlugin(MotionPathPlugin);

interface IUseTimelineMoveSelect {
  currentAge: number;
  refPath: React.RefObject<SVGCircleElement>;
}

export const useTimelineMoveSelect = ({ currentAge, refPath }: IUseTimelineMoveSelect) => {
  const firstId = TIMELINE_MOCKS[0].id;
  const orbitAnim = useRef<gsap.core.Tween | null>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  console.log('dotsRef.current', dotsRef.current);

  //todo currentAge менять а не selectedId. состояние от состояния быть не должно
  const [selectedId, setSelectedId] = useState<string | null>(firstId.toString());
  const onMouseEnter = (id: number) => {
    //todo currentAge на 1 больше чем id
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
      orbitAnim.current = gsap.to(dotsRef.current, {
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
    gsap.to(`#item-${firstId}`, {
      duration: 0.3,
      ease: 'power2.out',
      background: 'var(--bg-creamy)',
      color: 'var(--font-color)',
      scale: 8,
      boxShadow: '0 0 0 0.125px #303E5880',
    });
  }, []);

  useEffect(() => {
    onClick(currentAge);
  }, [currentAge]);

  const onClick = (id: number) => {
    if (id.toString() === selectedId) return;
    gsap.to(dotsRef.current[id], {
      duration: 0.3,
      ease: 'power2.out',
      background: 'var(--bg-creamy)',
      color: 'var(--font-color)',
      scale: 8,
      boxShadow: '0 0 0 0.125px #303E5880',
    });
    gsap.to(`#item-${selectedId}`, {
      scale: 1,
      duration: 0.3,
      background: 'var(--font-color)',
      ease: 'power2.out',
    });
    if (refPath.current)
      orbitAnim.current = gsap.to(dotsRef.current, {
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
