import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

interface IUseTimelineMoveSelect {
  refPath: React.RefObject<SVGCircleElement>;
}

export const useTimelineMoveSelect = ({ refPath }: IUseTimelineMoveSelect) => {
  const orbitAnim = useRef<gsap.core.Tween | null>(null);

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
    return () => {
      if (orbitAnim.current) {
        orbitAnim.current.kill();
      }
    };
  }, []);
};
