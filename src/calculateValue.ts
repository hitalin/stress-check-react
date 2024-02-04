import { Question, Factor } from './types';

/**
 * 指定された質問群とファクターに基づいて評価点を計算します。
 * @param {Question[]} questions 質問群
 * @param {Factor} factor 評価する尺度
 * @returns {number} 評価点
 */
export function calcScoreFromQuestions(questions: Question[], factor: Factor): number {
  // 質問IDに基づいてフィルタリングされた質問のスコアを集計
  const filteredQuestions = questions.filter(question => factor.items?.includes(question.id));
  const totalScore = filteredQuestions.reduce((total, question) => total + question.score, 0);

  // 質問の数に応じて動的に調整するために、足された問題数×5から合計スコアを引く
  const adjustedScore = factor.inverse ? (filteredQuestions.length * 5) - totalScore : totalScore;

  // 素点換算表（rates）を用いて評価点を算出
  const rate = factor.rates?.find(rate => adjustedScore >= rate.min && adjustedScore <= rate.max) ?? null;
  return rate ? rate.value : 0; // 該当するrateが見つからない場合は0を返す
}