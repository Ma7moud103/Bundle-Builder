/* eslint-disable react-refresh/only-export-components */
import {
  EBundleAction,
  type BundleAction,
  type BundleState,
  type IBundleContext,
} from '@/features/bundle-builder/interfaces/products';
import { STORAGE_KEY } from '@/features/bundle-builder/constants';
import { buildReviewItems, calculateSelectedCount, calculateTotalPrice } from '@/features/bundle-builder/util/bundle';
import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, type ReactNode } from 'react';

function getInitialBundle(): BundleState {
  if (typeof window === 'undefined') {
    return {};
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return {};
    }

    return JSON.parse(stored) as BundleState;
  } catch {
    return {};
  }
}

function updateVariantQuantity(
  state: BundleState,
  productId: string,
  variantId: string,
  quantity: number,
): BundleState {
  const currentItem = state[productId];
  const nextQuantities = { ...(currentItem?.quantities ?? {}) };

  if (quantity > 0) {
    nextQuantities[variantId] = quantity;
  } else {
    delete nextQuantities[variantId];
  }

  return {
    ...state,
    [productId]: {
      activeVariant: variantId,
      quantities: nextQuantities,
    },
  };
}

function reducer(state: BundleState, action: BundleAction): BundleState {
  switch (action.type) {
    case EBundleAction.SET_VARIANT: {
      const item = state[action.payload.productId];

      return {
        ...state,
        [action.payload.productId]: {
          activeVariant: action.payload.variantId,
          quantities: item?.quantities ?? {},
        },
      };
    }

    case EBundleAction.INCREMENT: {
      const { productId, variantId } = action.payload;
      const currentQuantity = state[productId]?.quantities?.[variantId] ?? 0;

      return updateVariantQuantity(state, productId, variantId, currentQuantity + 1);
    }

    case EBundleAction.DECREMENT: {
      const { productId, variantId } = action.payload;
      const currentQuantity = state[productId]?.quantities?.[variantId] ?? 0;

      return updateVariantQuantity(state, productId, variantId, Math.max(0, currentQuantity - 1));
    }

    case EBundleAction.RESTORE:
      return action.payload;

    case EBundleAction.RESET:
      return {};

    default:
      return state;
  }
}

const BundleContext = createContext<IBundleContext | null>(null);

interface IProps {
  children: ReactNode;
}

export function BundleProvider({ children }: IProps) {
  const [bundle, dispatch] = useReducer(reducer, undefined, getInitialBundle);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(bundle));
  }, [bundle]);

  const increment = useCallback((productId: string, variantId: string) => {
    dispatch({
      type: EBundleAction.INCREMENT,
      payload: {
        productId,
        variantId,
      },
    });
  }, []);

  const decrement = useCallback((productId: string, variantId: string) => {
    dispatch({
      type: EBundleAction.DECREMENT,
      payload: {
        productId,
        variantId,
      },
    });
  }, []);

  const setVariant = useCallback((productId: string, variantId: string) => {
    dispatch({
      type: EBundleAction.SET_VARIANT,
      payload: {
        productId,
        variantId,
      },
    });
  }, []);

  const restore = useCallback((nextBundle: BundleState) => {
    dispatch({
      type: EBundleAction.RESTORE,
      payload: nextBundle,
    });
  }, []);

  const reset = useCallback(() => {
    dispatch({
      type: EBundleAction.RESET,
    });
  }, []);

  const reviewItems = useMemo(() => buildReviewItems(bundle), [bundle]);
  const selectedCount = useMemo(() => calculateSelectedCount(bundle), [bundle]);
  const totalPrice = useMemo(() => calculateTotalPrice(reviewItems), [reviewItems]);

  const value = useMemo(
    () => ({
      bundle,
      reviewItems,
      selectedCount,
      totalPrice,
      increment,
      decrement,
      setVariant,
      restore,
      reset,
    }),
    [bundle, decrement, increment, reset, restore, reviewItems, selectedCount, setVariant, totalPrice],
  );

  return <BundleContext.Provider value={value}>{children}</BundleContext.Provider>;
}

export function useBundle() {
  const context = useContext(BundleContext);

  if (!context) {
    throw new Error('useBundle must be used within BundleProvider');
  }

  return context;
}
