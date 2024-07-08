"use client";

import type { Question } from "../lib/utils";

export const QuestionBox: React.FC<{ questions: Question[] }> = ({
  questions,
}) => {
  console.log(questions);
  return <div>hello</div>;
};
