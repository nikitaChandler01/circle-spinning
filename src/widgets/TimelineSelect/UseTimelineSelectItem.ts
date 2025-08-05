import { TIMELINE_MOCKS } from '@shared/mocks/TimelineMocks';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

interface IUseTimelineSelectItem {}

export const useTimelineSelectItem = ({}: IUseTimelineSelectItem) => {
  const timelineMocksKeys = Object.keys(TIMELINE_MOCKS);
  const highlightAnim = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const firstId = TIMELINE_MOCKS[0]?.id;
    if (firstId)
      highlightAnim.current = gsap.to(`#item-${firstId}`, {
        position: 'absolute',
        width: 56,
        height: 56,
        borderColor: '#303e5880',
        borderWidth: 1,
        borderStyle: 'solid',
        background: 'var(--bg-creamy)',
        duration: 0.4,
        ease: 'power1.inOut',
      });
  }, []);

  const onMouseEnter = () => {
    if (highlightAnim.current) {
      highlightAnim.current.kill();
    }
  };
};
