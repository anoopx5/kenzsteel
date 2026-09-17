"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // easeOutCubic curve for smooth, natural deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeOut * value;

            setCount(currentVal);

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(step);
            } else {
              setCount(value);
            }
          };

          animationFrameId = requestAnimationFrame(step);
        } else {
          // Reset count so scrolling past and coming back re-animates smoothly
          setCount(0);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration]);

  const formattedNumber =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.floor(count).toLocaleString();

  return (
    <span ref={elementRef} className="tabular-nums inline-block">
      {formattedNumber}
      {suffix}
    </span>
  );
}
