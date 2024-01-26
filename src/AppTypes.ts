export type Employee = {
  gender: string;
  stressLevel: string;
};

export type Section = {
  step: number;
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