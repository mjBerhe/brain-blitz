"use client";

import Link from "next/link";
import { useState } from "react";
import { random } from "lodash";

const generateQuestion = () => {
  const type = "addition";

  if (type === "addition") {
    const x = random(10);
    const y = random(10);

    const sum = x + y;
    return { question: `${x} + ${y}`, answer: sum, type: type };
  }
};

const q = generateQuestion();

export default function HomePage() {
  const [answer, setAnswer] = useState<string>("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-800 text-white">
      {/* <div>Brain Blitz</div> */}
      <div className="flex flex-col items-center gap-y-4">
        <span className="text-2xl">{q?.question}</span>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.currentTarget.value)}
          className="w-[100px] bg-slate-300 text-xl text-black"
          autoFocus
        />
      </div>
      <div></div>
    </main>
  );
}
