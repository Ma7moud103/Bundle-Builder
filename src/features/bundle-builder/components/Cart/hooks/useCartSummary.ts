import { useCallback, useMemo } from 'react';
import { useBundle } from '@/contexts/BundlerContext';
import { STORAGE_KEY } from '@/features/bundle-builder/constants';
import { calculateCompareAtTotal } from '../../../util/bundle';
import { calculateSavings } from '../utils/calculateSavings';
import { groupReviewItems } from '../utils/groupReviewItems';
import type { CartSectionViewModel } from '../types';

export function useCartSummary() {
  const { bundle, decrement, increment, reviewItems, totalPrice } = useBundle();

  const groupedSections = useMemo<CartSectionViewModel[]>(() => {
    return groupReviewItems(reviewItems).map((section) => ({
      ...section,
      items: section.items.map((item) => {
        const variantId = item.variantId ?? 'default';

        return {
          ...item,
          onIncrement: () => increment(item.productId, variantId),
          onDecrement: () => decrement(item.productId, variantId),
        };
      }),
    }));
  }, [decrement, increment, reviewItems]);

  const compareAtTotal = useMemo(() => calculateCompareAtTotal(reviewItems), [reviewItems]);
  const savings = useMemo(() => calculateSavings(compareAtTotal, totalPrice), [compareAtTotal, totalPrice]);

  const handleSaveBundle = useCallback(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(bundle));
  }, [bundle]);

  const handleCheckout = useCallback(() => {
    window.alert('Checkout is not available in this prototype.');
  }, []);

  return {
    compareAtTotal,
    groupedSections,
    handleCheckout,
    handleSaveBundle,
    savings,
    totalPrice,
  };
}
