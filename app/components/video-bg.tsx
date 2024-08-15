import { useRef, useEffect, useCallback } from "react";
import { inView, type InViewOptions } from "motion";
import useMeasure from "@/lib/use-measure";

interface VideoBackgroundProps {
  src: string;
  fallbackImage?: string;
  playbackRate?: number;
  inViewOptions?: Partial<InViewOptions>;
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
  children,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [containerRef, containerSize] = useMeasure<HTMLDivElement>();

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
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        loop
        muted
        playsInline
        poster={fallbackImage}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
};

export default VideoBackground;
