// calculateLevel.ts
export function calculateLevel(scores: number[], values: number[][]): { method1: boolean, method2: boolean, totals: number[] } {
  const method1 = scores[2] >= 77 || (scores[1] + scores[3] || 0) === 76 && scores[2] >= 63;

  const totals = values.map(value => value?.reduce((a, b) => a + b, 0) || 0);
  const section2Total = totals[2];
  const section1And3Total = totals[1] + totals[3];
  const method2 = section2Total <= 12 || (section1And3Total <= 26 && section2Total <= 17);

  return { method1, method2, totals };
}