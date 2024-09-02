import React, { useState } from "react";
import type { Show } from "@/types";
import { Link } from "@tanstack/react-router";
import { useInView } from "@/hooks/use-inview";

interface CardProps {
  width: number;
  show: Show;
}

interface OverLayProps {
  show: Show;
}

const MOBILE_BREAKPOINT = 768;

export const AnimatedCard: React.FC<CardProps> = ({ width, show }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const cardRef = useInView<HTMLDivElement>();
  const isMobile = width <= MOBILE_BREAKPOINT;


  return (
    <div className="relative w-full aspect-[9/16] group">
      <div
        ref={cardRef}
        className="relative w-full h-full overflow-hidden bg-slate-400 rounded-xl flex justify-center items-center"
      >
        <img
          src={show.image}
          alt={show.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <Overlay show={show} visible={showOverlay || isMobile} />
      </div>
    </div>
  );
};

const Overlay: React.FC<OverLayProps & { visible: boolean }> = ({ show, visible }) => {
  const overlayRef = useInView<HTMLDivElement>({
    animationDelay: 0,
    animationDuration: 0.3,
  });
  const contentRef = useInView<HTMLDivElement>({
    animationDelay: 0.1,
    animationDuration: 0.3,
  });

  return (
    <div
      ref={overlayRef}
      className={`overlay absolute inset-0 z-10 flex justify-center items-center transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 mix-blend-multiply pointer-events-none" />
      <div
        ref={contentRef}
        className={`overlay-content font-semibold text-lg z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'
          }`}
      >
        <Link
          to={show.link}
          className="rounded-full bg-gray-50 text-sm font-thin text-gray-950 text-center w-fit py-2 px-4 transition-all duration-300 no-underline hover:bg-gray-200"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};