import { useEffect, useState } from "react";
import useTypewriter from "../hooks/useTypewriter";

const QUESTION = "Explain the difference between props and state in React, and when you would use each.";
const FINAL_SCORE = 8.5;

// Small preview of the AI Interview project: typing question, waveform, animated score.
export default function InterviewDemo() {
  const { typed, done } = useTypewriter(QUESTION);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!done) return;
    const id = setInterval(() => {
      setScore((s) => {
        if (s >= FINAL_SCORE) {
          clearInterval(id);
          return s;
        }
        return s + 0.5;
      });
    }, 90);
    return () => clearInterval(id);
  }, [done]);

  return (
    <div className="demo" aria-label="Preview of the AI Interview Preparation Platform">
      <div className="demo__top">
        <span>Mock interview: Frontend Developer</span>
        <span className="demo__live">Live</span>
      </div>
      <p className="demo__question">
        {typed}
        {!done && <span className="demo__caret" />}
      </p>
      <div className="demo__wave" aria-hidden="true">
        {Array.from({ length: 24 }, (_, i) => (
          <span key={i} style={{ animationDelay: `${-(i % 6) * 0.18}s` }} />
        ))}
      </div>
      <div className="demo__score">
        <span>Answer score</span>
        <strong>{score.toFixed(1)} / 10</strong>
      </div>
    </div>
  );
}
