export function calculateAccuracy(
  correct: number,
  incorrect: number
) {
  const total = correct + incorrect;

  if (total === 0) return 100;

  return Number(((correct / total) * 100).toFixed(1));
}