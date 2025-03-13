import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
  const [attempts, setAttempts] = useState<number>(4);
  const [isInProgress, setIsInProgress] = useState<boolean>(false);
  const StartQuiz = () => {
    if (attempts > 0) {
      setAttempts(attempts - 1);
      setIsInProgress(true);
    }
  };
  const StopQuiz = () => {
    setIsInProgress(false);
  };
  const Mulligan = () => {
    setAttempts(attempts + 1);
  };

  return (
    <div>
      <h3>Quiz Attempt</h3>
      <p>Attempts remaining: {attempts}</p>
      <Button 
        onClick={StartQuiz} 
        disabled={isInProgress || attempts === 0}
      >
        Start Quiz
      </Button>
      <Button 
        onClick={StopQuiz} 
        disabled={!isInProgress}
      >
        Stop Quiz
      </Button>
      <Button 
        onClick={Mulligan} 
        disabled={isInProgress}
      >
        Mulligan
      </Button>
    </div>
  );
}
