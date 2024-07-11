"use client";

import { useState, useRef, KeyboardEventHandler } from "react";
import type { Question } from "../lib/utils";

export const QuestionBox: React.FC<{ questions: Question[] }> = ({
  questions,
}) => {
  const [input, setInput] = useState<string>("");
  const [currentQ, setCurrentQ] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmitAnswer = () => {
    if (input === questions[currentQ]?.answer) {
      setFeedback("Correct");
    } else {
      setFeedback("Incorrect");
    }
    setCurrentQ((prev) => prev + 1);
    setInput("");
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmitAnswer();
    }
  };

  const currentQuestion = questions[currentQ]?.question ?? "No Question Found";
  return (
    <div className="flex flex-col items-center gap-y-4">
      <span>{feedback}</span>
      <span className="text-2xl">{currentQuestion}</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        className="w-[100px] bg-slate-300 text-xl text-black"
        autoFocus
      />
      <button onClick={handleSubmitAnswer} type="submit">
        Submit
      </button>
    </div>
  );
};
