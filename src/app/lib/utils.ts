export type Question = {
  question: string;
  answer: number;
  type: string;
};

const random = (max: number) => {
  return Math.floor(Math.random() * max);
};

export function generateQuestions(amount: number): Question[] {
  const type = "addition";

  if (type === "addition") {
    const questions = [...Array(amount).keys()].map((_) => {
      const x = random(10);
      const y = random(10);
      return { question: `${x} + ${y}`, answer: x + y, type: type };
    });
    return questions;
    // const x = random(10);
    // const y = random(10);

    // const sum = x + y;
    // return { question: `${x} + ${y}`, answer: sum, type: type };
  }

  return [];
}
