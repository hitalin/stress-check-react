export type Section = {
  name: string;
  description: string;
  questions: Question[];
  choices: string[];
};

export type Question = {
  id: number;
  text: string;
  score: number;
  reverse: boolean;
};