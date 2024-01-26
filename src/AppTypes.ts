export type Employee = {
  gender: Gender;
  stressLevel: StressLevel;
};

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  UNDEFINED = "UNDEFINED"
}

export enum StressLevel {
  HIGH = "HIGH",
  LOW = "LOW",
  UNDEFINED = "UNDEFINED"
}

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