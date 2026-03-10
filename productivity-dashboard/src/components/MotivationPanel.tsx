import React, { useEffect, useState } from "react";

const fakeQuotes = [
  "Believe in yourself!",
  "Small steps every day.",
  "You are capable of great things.",
  "Stay positive, work hard.",
];

const MotivationPanel: React.FC = () => {
  const [quote, setQuote] = useState("Loading...");
  const [auto, setAuto] = useState(true);

  const loadQuote = () => {
    setQuote("Loading...");
    setTimeout(() => {
      const random = fakeQuotes[Math.floor(Math.random() * fakeQuotes.length)];
      setQuote(random);
    }, 700);
  };

  useEffect(() => {
    loadQuote();
  }, []);

  useEffect(() => {
    if (!auto) return;

    const interval = setInterval(() => loadQuote(), 10000);
    return () => clearInterval(interval);
  }, [auto]);

  return (
    <div className="widget">
      <h2>Motivation</h2>

      <p>{quote}</p>

      <label>
        <input
          type="checkbox"
          checked={auto}
          onChange={() => setAuto(!auto)}
        />
        Auto-Load
      </label>
    </div>
  );
};

export default MotivationPanel;
