import React, { useEffect, useRef } from "react";

interface DistractionMonitorProps {
  userPace: number;
  updateDistraction: (value: number) => void;
}

const DistractionMonitor: React.FC<DistractionMonitorProps> = ({ updateDistraction }) => {
  const lastMouseTime = useRef(Date.now());

  useEffect(() => {
    const handleMouseMove = () => {
      lastMouseTime.current = Date.now();
    };

    window.addEventListener("mousemove", handleMouseMove);

    const interval = setInterval(() => {
      const inactivity = Date.now() - lastMouseTime.current;
      const distraction = Math.min(100, inactivity / 100);
      updateDistraction(distraction);
    }, 1000); // every second

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [updateDistraction]);

  return (
    <div className="module distraction">
      <h2>Distraction Monitor</h2>
      <p>Current distraction index updates in real-time.</p>
    </div>
  );
};

export default DistractionMonitor;
