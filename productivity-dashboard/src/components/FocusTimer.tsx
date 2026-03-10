import React, { useEffect, useState, useRef, useLayoutEffect } from "react";

const FocusTimer: React.FC = () => {
  const [time, setTime] = useState(30);
  const [running, setRunning] = useState(false);

  const textRef = useRef<HTMLParagraphElement>(null);

  // Timer logic
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTime(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  // Flash animation when below 10 seconds
  useLayoutEffect(() => {
    if (time < 10 && textRef.current) {
      textRef.current.style.color = "red";
      textRef.current.style.transform = "scale(1.2)";
      setTimeout(() => {
        if (textRef.current) {
          textRef.current.style.transform = "scale(1)";
        }
      }, 150);
    }
  }, [time]);

  return (
    <div className="widget">
      <h2>Focus Timer</h2>

      <p ref={textRef} className="timerText">{time}s</p>

      <div>
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Pause</button>
        <button
          onClick={() => {
            setTime(30);
            setRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FocusTimer;
