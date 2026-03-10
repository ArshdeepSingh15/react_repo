import React, { useState, useEffect, useCallback } from "react";

interface QuestionGeneratorProps {
  skill: number;
  difficulty: number;
  updateDifficulty: (newDifficulty: number) => void;
}

const QuestionGenerator: React.FC<QuestionGeneratorProps> = ({
  skill,
  difficulty,
  updateDifficulty,
}) => {
  const [question, setQuestion] = useState("Loading question...");

  // This function decides what question to fetch and adjusts difficulty
  const fetchQuestion = useCallback(() => {
    // If skill is too low, skip auto-fetch
    if (skill < 10) {
      setQuestion("Skill too low to fetch new questions.");
      return;
    }

    // Simulate API delay
    setTimeout(() => {
      const newQuestion = `Question (Difficulty ${difficulty})`;
      setQuestion(newQuestion);

      // Adaptive difficulty logic
      if (skill > 70) {
        updateDifficulty(Math.min(3, difficulty + 1));
      } else if (skill < 30) {
        updateDifficulty(Math.max(1, difficulty - 1));
      }
    }, 500);
  }, [skill, difficulty, updateDifficulty]);

  // Set up interval to fetch question every 20s
  useEffect(() => {
    fetchQuestion(); // fetch immediately on mount
    const interval = setInterval(fetchQuestion, 20000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [fetchQuestion]);

  return (
    <div className="module questions">
      <h2>Adaptive Questions</h2>
      <p>{question}</p>
    </div>
  );
};

export default QuestionGenerator;
