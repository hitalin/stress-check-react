import { Question } from './AppTypes';

export function calculateScore(questions: Question[]): number {
  return questions.reduce((total, question) => {
    const score = question.reverse ? 5 - question.score : question.score;
    return total + score;
  }, 0);
}