export type Question = {
  question: string;
  answer: string;
  type: string;
};

const random = (max: number, min: number) => {
  return Math.floor(Math.random() * max) + min;
};

export function generateQuestions(amount: number): Question[] {
  const type = "addition";

  if (type === "addition") {
    const questions = [...Array(amount).keys()].map((_) => {
      const x = random(10, 1);
      const y = random(10, 1);
      return {
        question: `${x} + ${y}`,
        answer: (x + y).toString(),
        type: type,
      };
    });
    return questions;
  }

  return [];
}
