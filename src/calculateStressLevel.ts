// calculateStressLevel.ts
export function calculateStressLevel(scores: number[], values: number[][]): { method1: boolean, method2: boolean } {
  const method1 = scores[2] >= 77 || (scores[1] + scores[3] || 0) === 76 && scores[2] >= 63;

  const section2Total = values[2]?.reduce((a, b) => a + b, 0) || 0;
  const section1And3Total = (values[1]?.reduce((a, b) => a + b, 0) || 0) + (values[3]?.reduce((a, b) => a + b, 0) || 0);
  const method2 = section2Total <= 12 || (section1And3Total <= 26 && section2Total <= 17);

  return { method1, method2 };
}