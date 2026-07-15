"use client";

import { useEffect, useRef } from "react";

type AutoPauseVideoProps = {
  src: string;
  poster: string;
  className?: string;
  ariaLabel?: string;
};

// Looping ambient video that only decodes while on screen.
export function AutoPauseVideo({ src, poster, className, ariaLabel }: AutoPauseVideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video ref={ref} className={className} autoPlay loop muted playsInline poster={poster} preload="metadata" aria-label={ariaLabel}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
