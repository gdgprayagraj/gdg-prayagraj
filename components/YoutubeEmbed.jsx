"use client";

import { useState, useEffect, useRef } from "react";

export default function YoutubeEmbed({ videoId }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Add a small delay to prevent too many simultaneous loads
          const timer = setTimeout(() => {
            setIsLoaded(true);
          }, 500);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full" style={{ paddingBottom: "75%" }}>
      {!isLoaded ? (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
          // Add passive event listeners
          onLoad={(e) => {
            e.target.style.opacity = "1";
          }}
          style={{ opacity: 0, transition: "opacity 0.3s ease-in" }}
        />
      )}
    </div>
  );
}
