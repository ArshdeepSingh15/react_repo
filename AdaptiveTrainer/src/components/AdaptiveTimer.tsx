import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

interface AdaptiveTimerProps {
  skill: number;
  difficulty: number;
  distraction: number;
  performance: number;
  updateUserPace: (value: number) => void;
}

const AdaptiveTimer: React.FC<AdaptiveTimerProps> = ({
  skill,
  difficulty,
  distraction,
  performance,
  updateUserPace,
}) => {
  const [time, setTime] = useState(30);
  const intervalRef = useRef<number | null>(null);

  const calculateSpeed = () => {
    return Math.max(0.5, 1 + skill / 100 - distraction / 200 + performance * 0.1 - (difficulty - 1) * 0.1);
  };

  useEffect(() => {
    const speed = calculateSpeed();
    updateUserPace(speed);

    // Clear old interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // New interval
    intervalRef.current = window.setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          clearInterval(intervalRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000 / speed);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [skill, difficulty, distraction, performance, updateUserPace]);

  useLayoutEffect(() => {
    if (time < 10) {
      // Flash warning: could also trigger UI animation here
      console.log("⚠️ Less than 10 seconds!");
    }
  }, [time]);

  return (
    <div className="module timer">
      <h2>Adaptive Timer</h2>
      <p>{time} seconds</p>
    </div>
  );
};

export default AdaptiveTimer;
