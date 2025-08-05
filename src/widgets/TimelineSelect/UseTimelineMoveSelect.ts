import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { TIMELINE_MOCKS } from '@shared/mocks/TimelineMocks';
gsap.registerPlugin(MotionPathPlugin);

interface IUseTimelineMoveSelect {
  refPath: React.RefObject<SVGCircleElement>;
}

export const useTimelineMoveSelect = ({ refPath }: IUseTimelineMoveSelect) => {
  const orbitAnim = useRef<gsap.core.Tween | null>(null);
  const timelineMocksKeys = Object.keys(TIMELINE_MOCKS);
  const highlightAnim = useRef<gsap.core.Tween | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const onMouseEnter = (id: number) => {
    gsap.to(`#item-${id}`, {
      duration: 0.3,
      ease: 'power2.out',
      background: 'var(--bg-creamy)',
      color: 'var(--font-color)',
      scale: 8,
    });
  };

  const onMouseLeave = (id: number) => {
    gsap.to(`#item-${id}`, {
      scale: 1,
      duration: 0.3,
      background: 'var(--font-color)',
      ease: 'power2.out',
    });
  };

  useEffect(() => {
    if (refPath.current) {
      if (orbitAnim?.current) {
        orbitAnim.current.kill();
      }
      orbitAnim.current = gsap.to('.timeline-option', {
        motionPath: {
          path: refPath.current,
          align: refPath.current,
          autoRotate: false,
          alignOrigin: [0.5, 0.5],
          start: (i) => (i + 0.5) / 6,
          end: (i) => (i + 0.5) / 6,
        },
        duration: 0,
      });
    }
  }, []);
  return { onMouseEnter, onMouseLeave };
};
