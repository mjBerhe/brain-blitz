import Link from "next/link";
import { useState } from "react";
import { generateQuestions } from "./lib/utils";
import { Game } from "./components/game";

export default function HomePage() {
  const q = generateQuestions(10);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-800 text-white">
      <Game questions={q} />
    </main>
  );
}
