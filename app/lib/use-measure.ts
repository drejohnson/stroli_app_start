import { useState, useEffect, useCallback, useRef } from "react";
import type { RefObject } from "react";

interface ElementSize {
  width: number;
  height: number;
}

function useMeasure<T extends HTMLElement = HTMLDivElement>(): [
  RefObject<T>,
  ElementSize,
] {
  const ref = useRef<T>(null);
  const [size, setSize] = useState<ElementSize>({ width: 0, height: 0 });

  const handleSize = useCallback(() => {
    setSize({
      width: ref.current?.offsetWidth || 0,
      height: ref.current?.offsetHeight || 0,
    });
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    handleSize();

    const resizeObserver = new ResizeObserver(() => handleSize());
    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [handleSize]);

  return [ref, size];
}

export default useMeasure;
