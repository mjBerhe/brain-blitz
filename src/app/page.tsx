import Link from "next/link";
import { useState } from "react";
import { generateQuestions } from "./lib/utils";
import { QuestionBox } from "./components/questionBox";

export default function HomePage() {
  // const [answer, setAnswer] = useState<string>("");

  const q = generateQuestions(10);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-800 text-white">
      <div className="flex flex-col items-center gap-y-4">
        <QuestionBox questions={q} />
        <span className="text-2xl">{q[0]?.question}</span>
        {/* <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.currentTarget.value)}
          className="w-[100px] bg-slate-300 text-xl text-black"
          autoFocus
        /> */}
      </div>
      <div></div>
    </main>
  );
}
