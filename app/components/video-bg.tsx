import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  videoSrc: string;
  poster: string;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSrc,
  poster,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  /* useEffect(() => {
    const videoElement = videoRef.current;
    const preloadVideo = () => {
      if (videoElement) {
        videoElement.preload = "auto";
      }
    };

    preloadVideo();

    return () => {
      if (videoElement) {
        videoElement.src = "";
        videoElement.load();
      }
    };
  }, [videoSrc]); */

  return (
    <div
      className={cn(
        "relative w-full h-screen overflow-hidden",
        styles.container
      )}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const styles = {
  container: `
    after:content-[''] 
    after:absolute 
    after:inset-0 
    after:w-full 
    after:h-full 
    after:bg-gradient-to-r 
    after:from-sky-600 
    after:via-rose-200 
    after:to-green-200 
    after:opacity-80 
    after:mix-blend-multiply 
    after:pointer-events-none
  `,
};

export default VideoBackground;
