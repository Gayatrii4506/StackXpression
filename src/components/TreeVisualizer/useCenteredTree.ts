import { useState, useCallback, useEffect } from 'react';

interface Dimensions {
  width: number;
  height: number;
}

export const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }) => {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });
  const [translate, setTranslate] = useState(defaultTranslate);
  const containerRef = useCallback((containerElem: HTMLDivElement | null) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setDimensions({ width, height });
      setTranslate({ x: width / 2, y: height / 3 });
    }
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef) {
        const container = containerRef as unknown as HTMLDivElement;
        if (container) {
          const { width, height } = container.getBoundingClientRect();
          setDimensions({ width, height });
          setTranslate({ x: width / 2, y: height / 3 });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [containerRef]);

  return [dimensions, translate, containerRef] as const;
};
