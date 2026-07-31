import { useEffect } from 'react';
import type { BundleState } from '@/interfaces/products';
import { STORAGE_KEY } from '@/util/constants';
import { productLookup } from '@/data/catalog';
import { getDefaultVariantId } from '@/util/selection';

type LegacySelectedVariant = string | { id: string; image?: string };

interface ISelectedProduct {
  activeVariant?: LegacySelectedVariant;
  activeVariantId?: string;
  quantities: Record<string, number>;
}

function getActiveVariant(productId: string, selectedProduct: ISelectedProduct) {
  if (selectedProduct.activeVariantId) {
    return selectedProduct.activeVariantId;
  }

  const ActiveVariant = selectedProduct.activeVariant;

  if (typeof ActiveVariant === 'string') {
    return ActiveVariant;
  }

  if (ActiveVariant && typeof ActiveVariant === 'object') {
    return ActiveVariant.id;
  }

  const product = productLookup.get(productId);

  if (product) {
    return getDefaultVariantId(product);
  }

  return Object.entries(selectedProduct.quantities).find(([, quantity]) => quantity > 0)?.[0] ?? 'default';
}

function normalizeBundleState(bundle: Record<string, ISelectedProduct>): BundleState {
  return Object.entries(bundle).reduce<BundleState>((accumulator, [productId, item]) => {
    accumulator[productId] = {
      activeVariantId: getActiveVariant(productId, item),
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

    return normalizeBundleState(JSON.parse(stored) as Record<string, ISelectedProduct>);
  } catch {
    return {};
  }
}

export function useBundleStorage(bundle: BundleState) {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(normalizeBundleState(bundle as Record<string, ISelectedProduct>)),
    );
  }, [bundle]);
}
