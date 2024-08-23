import React from 'react';
import { cn } from "@/lib/utils";
import type { Show } from '@/types';

interface ScrollItemsProps {
  items: Show[];
  className?: string;
}

export const ScrollItems: React.FC<ScrollItemsProps> = ({ items, className }) => {
  // Duplicate items to create a seamless loop
  const scrollItems = [...items, ...items];

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <div className="relative h-64 flex items-center">
        <div className="animate-infinite-scroll flex absolute left-0 top-0 h-full items-center">
          {scrollItems.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-64 h-64 bg-blue-100 p-4 rounded-lg mx-2 flex items-center justify-center"
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
