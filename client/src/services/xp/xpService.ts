const XP_KEY = "typing-master-xp";

export function getXP(): number {
  const xp = localStorage.getItem(XP_KEY);
  return xp ? Number(xp) : 0;
}

export function addXP(amount: number): number {
  const current = getXP();
  const updated = current + amount;

  localStorage.setItem(
    XP_KEY,
    updated.toString()
  );

  return updated;
}

export function resetXP(): void {
  localStorage.removeItem(XP_KEY);
}