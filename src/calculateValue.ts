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

// 一般化された複合計算パターンの計算（"complex"タイプ用）
function calculateComplexPattern(questions: Question[], N: number): number {
  if (questions.length < N) return 0; // N番目の質問が存在しない場合は0を返す

  // 質問スコアの合計から、最初からN-1番目までの質問スコアを減算
  const subtractionTotal = questions.slice(0, N - 1).reduce((total, question) => total + question.score, 0);

  // N番目の質問スコア
  const additionScore = questions[N - 1]?.score ?? 0;

  // 定数Cを5として、一般化された計算式の適用
  return 5 * N - subtractionTotal + additionScore;
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
    case 'complex': {
        const N = factor.items?.length ?? 0;
        score = calculateComplexPattern(filteredQuestions, N);
        break;
      }
    default:
      // 未知のタイプが指定された場合の処理（必要に応じて）
      break;
  }

  // 素点換算表（rates）を用いて評価点を算出
  const rate = factor.rates?.find(rate => score >= rate.min && score <= rate.max) ?? null;
  return rate ? rate.value : 0; // 該当するrateが見つからない場合は0を返す
}
