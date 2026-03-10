import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const INITIAL_SECONDS = 30;

const FocusTimer: React.FC = () => {
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);
  const [isRunning, setIsRunning] = useState(false);
  const [isWide, setIsWide] = useState(false);

  const timerRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!isRunning) return;
    const id = window.setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [isRunning]);

  useLayoutEffect(() => {
    const el = timerRef.current;
    if (!el) return;

    const width = el.getBoundingClientRect().width;
    setIsWide(width > 300); // Adjusted threshold for larger font

    if (seconds > 0 && seconds < 10) {
      el.classList.add("timer-critical");
      const timeout = window.setTimeout(() => {
        el.classList.remove("timer-critical");
      }, 300);
      return () => {
        window.clearTimeout(timeout);
        el.classList.remove("timer-critical");
      };
    }
  }, [seconds]);

  const handleStart = () => {
    if (seconds === 0) setSeconds(INITIAL_SECONDS);
    setIsRunning(true);
  };

  return (
    <div className="timer-container">
      <h2>Focus Timer</h2>

      <div ref={timerRef} className="timer-display">
        {seconds < 10 ? `0${seconds}` : seconds}s
      </div>

      <div className="timer-controls">
        {!isRunning ? (
          <button className="primary" onClick={handleStart}>
            {seconds === 0 ? "Restart" : "Start"}
          </button>
        ) : (
          <button onClick={() => setIsRunning(false)}>Pause</button>
        )}

        <button
          onClick={() => {
            setIsRunning(false);
            setSeconds(INITIAL_SECONDS);
          }}
        >
          Reset
        </button>
      </div>

      {isWide && (
        <p style={{ color: "orange", marginTop: 10 }}>
          ⚠ Timer layout warning: Font size too large.
        </p>
      )}
    </div>
  );
};

export default FocusTimer;
