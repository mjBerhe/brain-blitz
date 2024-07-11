"use client";

import { useState } from "react";
import type { Question } from "../lib/utils";
import { QuestionBox } from "./questionBox";
import { Timer } from "./timer";

export const Game: React.FC<{ questions: Question[] }> = ({ questions }) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 5);

  const [isGameRunning, setIsGameRunning] = useState<boolean>(false);

  const handleExpire = () => {
    console.log("timer done");
    setIsGameRunning(false);
  };

  return (
    <div className="flex flex-col items-center gap-y-4">
      {!isGameRunning && (
        <div>
          <button onClick={() => setIsGameRunning(true)}>Start</button>
        </div>
      )}
      {isGameRunning && (
        <div className="flex flex-col items-center">
          <Timer expiryTimestamp={time} handleExpire={handleExpire} />
          <QuestionBox questions={questions} />
        </div>
      )}
    </div>
  );
};
