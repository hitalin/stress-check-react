// calculateLevel.ts
export function calculateLevel(scores: number[], values: number[][]): { method1: boolean, method2: boolean, totals: number[] } {
  const method1 = scores[2] >= 77 || (scores[1] + scores[3]) >= 76 && scores[2] >= 63;

  const totals = values.map(value => value?.reduce((a, b) => a + b, 0) || 0);
  const method2 = totals[2] <= 12 || (totals[1] + totals[3] <= 26 && totals[2] <= 17);

  return { method1, method2, totals };
}