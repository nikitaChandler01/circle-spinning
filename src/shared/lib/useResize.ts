import { useState, useEffect } from 'react';

const useResize = ({ maxWidth }: { maxWidth: number }): boolean => {
  const [isLessThanMaxWidth, setIsLessThanMaxWidth] = useState<boolean>(window.innerWidth < maxWidth);
  const handleResize = () => {
    setIsLessThanMaxWidth(window.innerWidth <= maxWidth);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [maxWidth]);

  return isLessThanMaxWidth;
};

export default useResize;
