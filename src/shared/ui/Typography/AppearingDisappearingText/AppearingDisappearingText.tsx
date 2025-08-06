import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { getHiddenAnimationEffect, getVisibleAnimationEffect } from './constants';

interface IAppearingDisappearingText {
  text: string;
  isVisible: boolean;
  duration: number;
  delay?: number;
}

const AppearingDisappearingText = ({ text, isVisible, delay = 0, duration }: IAppearingDisappearingText) => {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const animFunction = useRef<gsap.core.Tween | null>(null);
  const firstRender = useRef<boolean>(true);
  useEffect(() => {
    if (animFunction.current) animFunction.current.kill();
    if (isVisible) {
      animFunction.current = gsap.fromTo(textRef.current, getHiddenAnimationEffect(duration, 0), {
        ...getVisibleAnimationEffect(duration, firstRender.current ? 0 : delay),
        onComplete: () => {
          firstRender.current = false;
        },
      });
    } else {
      animFunction.current = gsap.fromTo(
        textRef.current,
        getVisibleAnimationEffect(0, 0),
        getHiddenAnimationEffect(0, 0),
      );
    }
  }, [isVisible]);

  return (
    <span ref={textRef} className="appearing-disappearing-text">
      {text}
    </span>
  );
};

export default AppearingDisappearingText;
