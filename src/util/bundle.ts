import type { BundleState, IProduct, ReviewItem } from '../interfaces/products';
import { productLookup, resolveVariantImage } from '@/data/catalog';

export { REVIEW_CATEGORY_LABELS, REVIEW_CATEGORY_ORDER, type ProductCategory } from '@/data/catalog';

function roundMoney(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function getPriceAfterDiscount(product: Pick<IProduct, 'price' | 'discount'>) {
  const discount = product.discount ? Number.parseFloat(product.discount) : 0;
  const discountAmount = product.price * (discount / 100);

  return roundMoney(product.price - discountAmount);
}

export function formatVariantLabel(variantId: string) {
  const normalized = variantId.trim();

  if (!normalized || normalized === 'default') {
    return undefined;
  }

  return normalized.charAt(0).toUpperCase() + normalized.slice(1);
}

export function buildReviewItems(bundle: BundleState): ReviewItem[] {
  return Object.entries(bundle).flatMap(([productId, item]) => {
    const product = productLookup.get(productId);

    if (!product) {
      return [];
    }

    const salePrice = getPriceAfterDiscount(product);
    const compareAtPrice = product.discount ? roundMoney(product.price) : undefined;

    return Object.entries(item.quantities).flatMap(([variantId, quantity]) => {
      if (quantity <= 0) {
        return [];
      }

      const variantLabel = formatVariantLabel(variantId);

      return [
        {
          productId,
          category: product.category,
          name: product.name,
          image: resolveVariantImage(product, variantId),
          imageAlt: variantLabel ? `${product.name}, ${variantLabel}` : product.name,
          variantId,
          variantLabel,
          variant: variantLabel,
          quantity,
          price: salePrice,
          compareAtPrice,
        },
      ];
    });
  });
}

export function calculateSelectedCount(bundle: BundleState) {
  return Object.values(bundle).reduce((count, item) => {
    const hasSelection = Object.values(item.quantities).some((quantity) => quantity > 0);

    return hasSelection ? count + 1 : count;
  }, 0);
}

export function calculateTotalPrice(reviewItems: ReviewItem[]) {
  return roundMoney(reviewItems.reduce((total, item) => total + item.price * item.quantity, 0));
}

export function calculateCompareAtTotal(reviewItems: ReviewItem[]) {
  return roundMoney(
    reviewItems.reduce((total, item) => total + (item.compareAtPrice ?? item.price) * item.quantity, 0),
  );
}

export function SelectedProductsCount(bundle: BundleState, productIds: string[]) {
  return productIds.reduce((selectedCount, productId) => {
    const itemName = bundle[productId];
    const hasSelection = itemName ? Object.values(itemName.quantities).some((quantity) => quantity > 0) : false;

    return hasSelection ? selectedCount + 1 : selectedCount;
  }, 0);
}
