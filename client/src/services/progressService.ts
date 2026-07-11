const STORAGE_KEY = "bangla-typing-progress";

export function getUnlockedLesson(): number {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return 1;
  }

  return Number(saved);
}

export function unlockLesson(id: number) {
  const current = getUnlockedLesson();

  if (id > current) {
    localStorage.setItem(
      STORAGE_KEY,
      String(id)
    );
  }
}

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
}