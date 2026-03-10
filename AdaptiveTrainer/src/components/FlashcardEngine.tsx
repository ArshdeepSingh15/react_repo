import React, { useState, useMemo, useLayoutEffect } from "react";

interface FlashcardEngineProps {
  skill: number;
  updateSkill: (newSkill: number) => void;
}

const sampleFlashcards = [
  { id: 1, question: "2 + 2?", answer: "4" },
  { id: 2, question: "Capital of France?", answer: "Paris" },
  { id: 3, question: "React is a ___ library?", answer: "UI" },
];

const FlashcardEngine: React.FC<FlashcardEngineProps> = ({ skill, updateSkill }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [difficultyRating, setDifficultyRating] = useState(1); // 1=Easy,2=Med,3=Hard

  const card = sampleFlashcards[currentIndex];

  // Animate reveal
  useLayoutEffect(() => {
    if (showAnswer) {
      console.log("Animating reveal...");
    }
  }, [showAnswer]);

  // Memoized skill calculation
  const estimatedSkill = useMemo(() => {
    // Heavy calculation simulation
    return skill + (difficultyRating === 1 ? 2 : difficultyRating === 2 ? 5 : 10);
  }, [skill, difficultyRating]);

  const handleNext = () => {
    setShowAnswer(false);
    setDifficultyRating(1);
    setCurrentIndex((prev) => (prev + 1) % sampleFlashcards.length);
    updateSkill(estimatedSkill);
  };

  return (
    <div className="module flashcards">
      <h2>Flashcards</h2>
      <p><strong>Q:</strong> {card.question}</p>
      {showAnswer && <p className="answer"><strong>A:</strong> {card.answer}</p>}
      <button onClick={() => setShowAnswer(true)}>Reveal Answer</button>
      {showAnswer && (
        <div>
          <label>Difficulty:</label>
          <select value={difficultyRating} onChange={(e) => setDifficultyRating(Number(e.target.value))}>
            <option value={1}>Easy</option>
            <option value={2}>Medium</option>
            <option value={3}>Hard</option>
          </select>
          <button onClick={handleNext}>Next Card</button>
        </div>
      )}
    </div>
  );
};

export default FlashcardEngine;



