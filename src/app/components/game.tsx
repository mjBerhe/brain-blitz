"use client";

import { useState } from "react";
import type { Question } from "../lib/utils";
import { QuestionBox } from "./questionBox";
import { Timer } from "./timer";

const gameDuration = 60;

export const Game: React.FC<{ questions: Question[] }> = ({ questions }) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + gameDuration);

  const [isGameRunning, setIsGameRunning] = useState<boolean>(false);

  const handleExpire = () => {
    console.log("timer done");
    setIsGameRunning(false);
  };

  return (
    <div className="flex w-full flex-col items-center">
      {!isGameRunning && (
        <div>
          <button
            onClick={() => setIsGameRunning(true)}
            className="text-3xl hover:text-cyan-200"
          >
            Start
          </button>
        </div>
      )}
      {isGameRunning && (
        <div className="flex h-[50%] flex-col items-center justify-between">
          <div></div>
          <div className="flex">
            <Timer expiryTimestamp={time} handleExpire={handleExpire} />
          </div>
          <div>
            <QuestionBox questions={questions} />
          </div>
        </div>
      )}
    </div>
  );
};
