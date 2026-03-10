    import React, { useState, useCallback } from "react";
    import FlashcardEngine from "./components/FlashcardEngine";
    import QuestionGenerator from "./components/QuestionGenerator";
    import DistractionMonitor from "./components/DistractionMonitor";
    import AdaptiveTimer from "./components/AdaptiveTimer";

    const App: React.FC = () => {
    // Shared state
    const [skill, setSkill] = useState(50);          // 0-100
    const [difficulty, setDifficulty] = useState(1); // 1-Easy, 2-Medium, 3-Hard
    const [distraction, setDistraction] = useState(0);// 0-100
    const [userPace, setUserPace] = useState(1);     // Timer multiplier
    const [performance, setPerformance] = useState(0);// Consecutive correct

    // Callback functions
    const updateSkill = useCallback((newSkill: number) => {
        setSkill(Math.max(0, Math.min(100, newSkill)));
    }, []);

    const updateDifficulty = useCallback((newDifficulty: number) => {
        setDifficulty(Math.max(1, Math.min(3, newDifficulty)));
    }, []);

    const updateDistraction = useCallback((newDistraction: number) => {
        setDistraction(Math.max(0, Math.min(100, newDistraction)));
    }, []);

    const updateUserPace = useCallback((pace: number) => {
        setUserPace(pace);
    }, []);

    const updatePerformance = useCallback((streak: number) => {
        setPerformance(streak);
    }, []);

    return (
        <div className="app-container">
        <h1>Adaptive Knowledge Trainer</h1>
        <div className="modules">
            <FlashcardEngine skill={skill} updateSkill={updateSkill} />
            <QuestionGenerator skill={skill} difficulty={difficulty} updateDifficulty={updateDifficulty} />
            <DistractionMonitor userPace={userPace} updateDistraction={updateDistraction} />
            <AdaptiveTimer
            skill={skill}
            difficulty={difficulty}
            distraction={distraction}
            performance={performance}
            updateUserPace={updateUserPace}
            />
        </div>
        </div>
    );
    };

    export default App;
