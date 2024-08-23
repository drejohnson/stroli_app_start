import { useRef, useEffect, useCallback } from "react";
import { inView, type InViewOptions } from "motion";
import useMeasure from "@/lib/use-measure";

interface VideoBackgroundProps {
  src: string;
  fallbackImage?: string;
  playbackRate?: number;
  inViewOptions?: Partial<InViewOptions>;
  className?: string;
  children?: React.ReactNode;
}

const defaultInViewOptions: InViewOptions = {
  amount: 0.3, // Consider in view when 30% visible
  margin: "50px", // Extend viewport by 50px in all directions
};

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  fallbackImage,
  playbackRate = 1,
  inViewOptions = {},
  className = "",
  children,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [containerRef, _containerSize] = useMeasure<HTMLDivElement>();

  const handleVisibilityChange = useCallback((isIntersecting: boolean) => {
    const video = videoRef.current;
    if (!video) return;

    if (isIntersecting) {
      video.play().catch(() => {
        console.warn("Video autoplay was prevented by the browser");
      });
    } else {
      video.pause();
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    video.playbackRate = playbackRate;

    const options = { ...defaultInViewOptions, ...inViewOptions };

    const stopInView = inView(
      container,
      (entry) => handleVisibilityChange(entry.isIntersecting),
      options
    );

    return () => {
      stopInView();
      video.pause();
    };
  }, [playbackRate, inViewOptions, handleVisibilityChange]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = playbackRate;
  }, [playbackRate]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full h-full"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        loop
        muted
        playsInline
        controls={false}
        poster={fallbackImage}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 size-full bg-gradient-to-r from-sky-300 md:via-rose-200 to-green-200 bg-opacity-80 mix-blend-multiply pointer-events-none"></div>
      {children && (
        <div className="relative flex flex-col self-end md:justify-around h-[70vh] gap-8 w-[90vw] z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
