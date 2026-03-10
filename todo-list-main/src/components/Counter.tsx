import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [auto, setAuto] = useState(false);

  const [step, setStep] = useState(1);
  const fetchIdRef = useRef(0);

  // Measure ONLY the number, not whole sentence
  const textRef = useRef<HTMLSpanElement>(null);

  const [tooWide, setTooWide] = useState(false);

  // ⭐ Fake API (1 second delay)
  function fetchStepSize(): Promise<number> {
    return new Promise((resolve) => {
      const randomStep = Math.floor(Math.random() * 5) + 1;
      setTimeout(() => resolve(randomStep), 1000);
    });
  }

  // ⭐ Fetch step when auto turns ON
  useEffect(() => {
    if (!auto) return;

    let cancelled = false;
    const thisFetchId = ++fetchIdRef.current;

    fetchStepSize().then((value) => {
      if (cancelled) return;
      if (thisFetchId !== fetchIdRef.current) return;

      setStep(value);
    });

    return () => {
      cancelled = true;
    };
  }, [auto]);

  // ⭐ Auto increment using dynamic step
  useEffect(() => {
    if (!auto) return;

    const interval = window.setInterval(() => {
      setCount((c) => c + step);
    }, 1000);

    return () => clearInterval(interval);
  }, [auto, step]);

  // ⭐ Measure ONLY the number's width (correct!)
  useLayoutEffect(() => {
    if (textRef.current) {
      const width = textRef.current.getBoundingClientRect().width;
      setTooWide(width > 20);
    }
  }, [count]);

  // ⭐ Stop auto mode if number too wide
  useEffect(() => {
    if (tooWide && auto) {
      setAuto(false);
    }
  }, [tooWide, auto]);

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Counter</h2>

      <p>
        Current count: <span ref={textRef}>{count}</span>
      </p>

      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr />

      <p>Step size: {step}</p>

      <button onClick={() => setAuto((a) => !a)}>
        {auto ? "Stop Auto Count" : "Start Auto Count"}
      </button>

      {tooWide && (
        <p style={{ color: "red" }}>⚠ Counter too wide — auto stopped.</p>
      )}
    </div>
  );
};

export default Counter;
