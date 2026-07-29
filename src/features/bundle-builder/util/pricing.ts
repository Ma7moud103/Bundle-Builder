import type { IProduct } from '../interfaces/products';

function roundMoney(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function parseDiscount(discount?: string) {
  if (!discount) return 0;

  const normalized = discount.replace('%', '').trim();
  const value = Number.parseFloat(normalized);

  return Number.isFinite(value) ? Math.min(Math.max(value, 0), 100) : 0;
}

export function calculateSalePrice(product: Pick<IProduct, 'price' | 'discount'>) {
  const discountRate = parseDiscount(product.discount);
  const discountAmount = product.price * (discountRate / 100);

  return roundMoney(product.price - discountAmount);
}
