export const getVisibleAnimationEffect = (duration: number, delay: number) => {
  return {
    opacity: 1,
    duration,
    delay,
  };
};

export const getHiddenAnimationEffect = (duration: number, delay: number) => {
  return {
    opacity: 0,
    duration,
    delay,
  };
};
