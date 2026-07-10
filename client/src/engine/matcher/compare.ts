export interface CharacterResult {
  correct: number;
  incorrect: number;
}

export function compareText(
  expected: string,
  typed: string
): CharacterResult {
  let correct = 0;
  let incorrect = 0;

  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === expected[i]) {
      correct++;
    } else {
      incorrect++;
    }
  }

  return {
    correct,
    incorrect,
  };
}