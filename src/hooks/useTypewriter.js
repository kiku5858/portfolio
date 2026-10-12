import { useEffect, useState } from "react";

// Types `text` one character at a time. Shows full text if the user prefers reduced motion.
export default function useTypewriter(text, speed = 38, delay = 600) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [count, setCount] = useState(reduceMotion ? text.length : 0);

  useEffect(() => {
    if (reduceMotion) return;
    let interval;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(interval);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, delay);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, delay, reduceMotion]);

  return { typed: text.slice(0, count), done: count >= text.length };
}
