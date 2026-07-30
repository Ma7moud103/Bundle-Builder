import { useEffect } from 'react';
import type { BundleState } from '@/interfaces/products';
import { STORAGE_KEY } from '@/util/constants';
import { productLookup } from '@/data/catalog';
import { getDefaultVariantId } from '@/util/selection';

type LegacySelectedVariant = string | { id: string; image?: string };
type LegacySelectedProduct = {
  activeVariant?: LegacySelectedVariant;
  activeVariantId?: string;
  quantities: Record<string, number>;
};

function getLegacyActiveVariantId(productId: string, item: LegacySelectedProduct) {
  if (item.activeVariantId) {
    return item.activeVariantId;
  }

  const legacyActiveVariant = item.activeVariant;

  if (typeof legacyActiveVariant === 'string') {
    return legacyActiveVariant;
  }

  if (legacyActiveVariant && typeof legacyActiveVariant === 'object') {
    return legacyActiveVariant.id;
  }

  const product = productLookup.get(productId);

  if (product) {
    return getDefaultVariantId(product);
  }

  return Object.entries(item.quantities).find(([, quantity]) => quantity > 0)?.[0] ?? 'default';
}

function normalizeBundleState(bundle: Record<string, LegacySelectedProduct>): BundleState {
  return Object.entries(bundle).reduce<BundleState>((accumulator, [productId, item]) => {
    accumulator[productId] = {
      activeVariantId: getLegacyActiveVariantId(productId, item),
      quantities: item.quantities,
    };

    return accumulator;
  }, {});
}

export function getBundleFromStorage(): BundleState {
  if (typeof window === 'undefined') {
    return {};
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return {};
    }

    return normalizeBundleState(JSON.parse(stored) as Record<string, LegacySelectedProduct>);
  } catch {
    return {};
  }
}

export function useBundleStorage(bundle: BundleState) {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeBundleState(bundle as Record<string, LegacySelectedProduct>)));
  }, [bundle]);
}
