import { TIMELINE_MOCKS } from '@shared/mocks/TimelineMocks';
import gsap from 'gsap';
import { useRef, useState } from 'react';

interface IUseTimelineSelectItem {
  // Добавьте здесь необходимые пропсы, если они есть
}

export const useTimelineSelectItem = ({}: IUseTimelineSelectItem) => {
  const timelineMocksKeys = Object.keys(TIMELINE_MOCKS);
  const highlightAnim = useRef<gsap.core.Tween | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const onMouseEnter = (id: number) => {
    gsap.to(`#item-${id}`, {
      scale: 6,
      duration: 0.3,
    });
  };

  const onMouseLeave = (id: number) => {
    // gsap.to(`#item-${id}`, {
    //   width: 6,
    //   height: 6,
    //   duration: 0.3,
    // });
  };

  return { onMouseEnter, onMouseLeave };
};
