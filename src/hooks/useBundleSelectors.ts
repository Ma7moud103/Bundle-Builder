import { useMemo } from 'react';
import type { BundleState } from '@/interfaces/products';
import { buildReviewItems, calculateSelectedCount, calculateTotalPrice } from '@/util/bundle';

export function useBundleSelectors(bundle: BundleState) {
  const reviewItems = useMemo(() => buildReviewItems(bundle), [bundle]);
  const selectedCount = useMemo(() => calculateSelectedCount(bundle), [bundle]);
  const totalPrice = useMemo(() => calculateTotalPrice(reviewItems), [reviewItems]);

  return useMemo(
    () => ({
      reviewItems,
      selectedCount,
      totalPrice,
    }),
    [reviewItems, selectedCount, totalPrice],
  );
}
