import { useEffect, useState } from "react";

interface HeroSlideshowProps {
  images: string[];
  interval?: number;
}

const FADE_MS = 1200;

export function HeroSlideshow({ images, interval = 5500 }: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
      setTick((t) => t + 1);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const zoomDuration = interval + FADE_MS;

  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      {images.map((src, index) => {
        const isActive = index === activeIndex;
        const zoomDirection = index % 2 === 0 ? "in" : "out";

        return (
          <div
            key={src}
            aria-hidden={!isActive}
            className="absolute inset-0 h-full w-full transition-opacity ease-in-out"
            style={{
              opacity: isActive ? 1 : 0,
              transitionDuration: `${FADE_MS}ms`,
            }}
          >
            <img
              key={`${src}-${isActive ? tick : "idle"}`}
              src={src}
              alt=""
              loading={index === 0 ? "eager" : "lazy"}
              className={`h-full w-full object-cover ${
                isActive
                  ? zoomDirection === "in"
                    ? "animate-hero-ken-burns-in"
                    : "animate-hero-ken-burns-out"
                  : ""
              }`}
              style={
                isActive
                  ? { animationDuration: `${zoomDuration}ms` }
                  : undefined
              }
            />
          </div>
        );
      })}
    </div>
  );
}
