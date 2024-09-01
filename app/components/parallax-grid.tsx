import React, { useRef, useEffect } from 'react';
import { scroll, animate, type ScrollOptions } from 'motion';
import { cn } from "@/lib/utils";
import type { Step } from '@/types';

interface ParallaxGridScrollProps {
  items: Step[];
  className?: string;
}

export const ParallaxGridScroll: React.FC<ParallaxGridScrollProps> = ({ items, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const itemRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    if (!gridRef.current || itemRefs.some(ref => !ref.current)) return;

    const scrollOptions: ScrollOptions = {
      target: gridRef.current,
      offset: ['start end', 'end start']
    };

    const animations = itemRefs.map((ref, index) =>
      scroll(
        animate(ref.current!, { y: items[index].yTransform }),
        scrollOptions
      )
    );

    return () => {
      animations.forEach(animation => animation());
    };
  }, [items]);

  return (
    <div ref={containerRef} className={cn("h-full overflow-hidden w-full", className)}>
      <div
        ref={gridRef}
        className="h-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 md:gap-24 py-10 px-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              ref={itemRefs[idx]}
              className="flex flex-col items-center text-center"
            >
              <div className={cn("mb-4", idx === 1 ? "order-1 md:order-2" : "")}>
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="text-balance">{item.description}</p>
              </div>
              <div
                className={cn(
                  "max-w-[80vw] md:max-w-[25vw]",
                  idx === 1 ? "order-2 md:order-1" : ""
                )}
              >
                <img src={item.image} alt={item.alt} className="w-full h-auto mb-4 rounded object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};