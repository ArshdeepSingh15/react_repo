import React, { useEffect, useState } from "react";

const fakeQuotes = [
  "Stay focused and never give up.",
  "Small steps every day lead to big results.",
  "Discipline beats motivation.",
  "Your future is created by what you do today.",
  "Done is better than perfect.",
  "Focus on being productive instead of busy.",
];

function fetchQuote(): Promise<string> {
  return new Promise((resolve) => {
    const quote = fakeQuotes[Math.floor(Math.random() * fakeQuotes.length)];
    setTimeout(() => resolve(quote), 800);
  });
}

const MotivationPanel: React.FC = () => {
  const [quote, setQuote] = useState<string>("Click to load a quote.");
  const [loading, setLoading] = useState(false);
  const [autoLoad, setAutoLoad] = useState(false);

  const loadQuote = async () => {
    setLoading(true);
    const q = await fetchQuote();
    setQuote(q);
    setLoading(false);
  };

  useEffect(() => {
    if (!autoLoad) return;
    let cancelled = false;

    const getQuote = async () => {
      setLoading(true);
      const q = await fetchQuote();
      if (!cancelled) {
        setQuote(q);
        setLoading(false);
      }
    };

    getQuote();
    const id = window.setInterval(getQuote, 5000); // Faster for demo purposes

    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [autoLoad]);

  return (
    <div>
      <h2>Motivation Panel</h2>

      <div className="quote-display">
        {loading ? (
          <span className="quote-loading">Finding inspiration...</span>
        ) : (
          `"${quote}"`
        )}
      </div>

      <div className="controls-row">
        <button
          className="primary"
          onClick={loadQuote}
          disabled={loading || autoLoad}
        >
          Load New Quote
        </button>

        <label
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <input
            type="checkbox"
            checked={autoLoad}
            onChange={(e) => setAutoLoad(e.target.checked)}
            style={{ width: "auto", margin: 0 }}
          />
          <span>Auto-Load (Demo)</span>
        </label>
      </div>
    </div>
  );
};

export default MotivationPanel;
