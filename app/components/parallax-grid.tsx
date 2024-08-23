import React, { useRef, useEffect } from 'react';
import { scroll, animate, type ScrollOptions } from 'motion';
import { cn } from "@/lib/utils";

interface ParallaxGridScrollProps {
  items: string[];
  className?: string;
}

const ParallaxGridScroll: React.FC<ParallaxGridScrollProps> = ({ items, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const middleColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current || !leftColumnRef.current || !middleColumnRef.current || !rightColumnRef.current) return;

    const scrollOptions: ScrollOptions = {
      target: gridRef.current,
      offset: ['start end', 'end start']
    };

    const leftColumnAnimation = scroll(
      animate(leftColumnRef.current, { y: [0, -50] }),
      scrollOptions
    );

    const middleColumnAnimation = scroll(
      animate(middleColumnRef.current, { y: [-50, 50] }),
      scrollOptions
    );

    const rightColumnAnimation = scroll(
      animate(rightColumnRef.current, { y: [0, -50] }),
      scrollOptions
    );

    return () => {
      leftColumnAnimation();
      middleColumnAnimation()
      rightColumnAnimation();
    };
  }, []);

  const third = Math.ceil(items.length / 3);
  const leftItems = items.slice(0, third);
  const middleItems = items.slice(third, 2 * third);
  const rightItems = items.slice(2 * third);

  return (
    <div ref={containerRef} className={cn("h-[40rem] overflow-hidden w-full", className)}>
      <div
        ref={gridRef}
        className="h-full overflow-y-scroll pr-[17px] mr-[-17px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
          <div className="grid gap-10" ref={leftColumnRef}>
            {leftItems.map((item, idx) => (
              <div key={`left-${idx}`} className="bg-blue-100 p-4 rounded-lg aspect-[9/16] flex items-center justify-center">
                {item}
              </div>
            ))}
          </div>
          <div className="grid gap-10" ref={middleColumnRef}>
            {middleItems.map((item, idx) => (
              <div key={`middle-${idx}`} className="bg-green-100 p-4 rounded-lg aspect-[9/16] flex items-center justify-center">
                {item}
              </div>
            ))}
          </div>
          <div className="grid gap-10" ref={rightColumnRef}>
            {rightItems.map((item, idx) => (
              <div key={`right-${idx}`} className="bg-red-100 p-4 rounded-lg aspect-[9/16] flex items-center justify-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxGridScroll;