import { Question, Factor } from './types';

/**
 * 指定された質問群とファクターに基づいて評価点を計算します。
 * @param {Question[]} questions 質問群
 * @param {Factor} factor 評価する尺度
 * @returns {number} 評価点
 */

// 基本減算パターンの計算
function calculateSubtractionPattern(questions: Question[]): number {
  const totalScore = questions.reduce((total, question) => total + question.score, 0);
  // 質問の数に応じて動的に調整（例：足された問題数×5から合計スコアを引く）
  return (questions.length * 5) - totalScore;
}

// 基本加算パターンの計算
function calculateAdditionPattern(questions: Question[]): number {
  return questions.reduce((total, question) => total + question.score, 0);
}

function calculateComplexPattern(questions: Question[]): number {
  // 最初からN-1番目までの質問スコアを減算
  const subtractionTotal = calculateSubtractionPattern(questions.slice(0, questions.length - 1));
  // N番目の質問スコアを加算
  const additionScore = calculateAdditionPattern(questions.slice(questions.length - 1, questions.length));

  return subtractionTotal + additionScore;
}

export function calculateValue(questions: Question[], factor: Factor): number {
  // 質問IDに基づいてフィルタリングされた質問のスコアを集計
  const filteredQuestions = questions.filter(question => factor.items?.includes(question.id));
  let score = 0;

  // factor.typeに応じて計算パターンを適用
  switch (factor.type) {
    case 'subtraction':
      score = calculateSubtractionPattern(filteredQuestions);
      break;
    case 'addition':
      score = calculateAdditionPattern(filteredQuestions);
      break;
    case 'complex':
      score = calculateComplexPattern(filteredQuestions);
      break;
    default:
      // 未知のタイプが指定された場合の処理（必要に応じて）
      break;
  }

  // 素点換算表（rates）を用いて評価点を算出
  const rate = factor.rates?.find(rate => score >= rate.min && score <= rate.max) ?? null;
  return rate ? rate.value : 0; // 該当するrateが見つからない場合は0を返す
}
