// calculateStressLevel.ts
export function calculateStressLevel(scores: number[]): string {
  const isHighStress = scores[2] >= 77 || (scores[1] + scores[3] || 0) === 76 && scores[2] >= 63;
  return isHighStress ? 'high' : 'low';
}