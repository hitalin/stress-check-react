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
  factors: Factor[];
};

export type Question = {
  id: number;
  text: string;
  score: number;
  reverse: boolean;
};

export type Factor = {
  point: number;
  scale: string;
  value: number;
  inverse: boolean;
};

