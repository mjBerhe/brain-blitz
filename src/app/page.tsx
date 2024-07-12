import Link from "next/link";
import { useState } from "react";
import { generateQuestions } from "./lib/utils";
import { Game } from "./components/game";

export default function HomePage() {
  const q = generateQuestions(100);

  return (
    <main className="flex min-h-screen flex-col bg-slate-800 text-white">
      <div className="flex h-[48px] items-center justify-center">nav here?</div>
      <div className="flex h-full flex-grow border">
        <Game questions={q} />
      </div>
    </main>
  );
}
