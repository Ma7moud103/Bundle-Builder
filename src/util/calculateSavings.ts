export function calculateSavings(compareAtTotal: number, totalPrice: number) {
  return Math.max(0, Math.round((compareAtTotal - totalPrice + Number.EPSILON) * 100) / 100);
}
