import { useCallback, useMemo, type Dispatch } from 'react';
import { EBundleAction, type BundleAction, type BundleState } from '@/interfaces/products';

export function useBundleActions(dispatch: Dispatch<BundleAction>) {
  const increment = useCallback(
    (productId: string, variantId: string) => {
      dispatch({
        type: EBundleAction.INCREMENT,
        payload: {
          productId,
          variantId,
        },
      });
    },
    [dispatch],
  );

  const decrement = useCallback(
    (productId: string, variantId: string) => {
      dispatch({
        type: EBundleAction.DECREMENT,
        payload: {
          productId,
          variantId,
        },
      });
    },
    [dispatch],
  );

  const setVariant = useCallback(
    (productId: string, variantId: string) => {
      dispatch({
        type: EBundleAction.SET_VARIANT,
        payload: {
          productId,
          variantId,
        },
      });
    },
    [dispatch],
  );

  const restore = useCallback(
    (nextBundle: BundleState) => {
      dispatch({
        type: EBundleAction.RESTORE,
        payload: nextBundle,
      });
    },
    [dispatch],
  );

  const reset = useCallback(() => {
    dispatch({
      type: EBundleAction.RESET,
    });
  }, [dispatch]);

  return useMemo(
    () => ({
      increment,
      decrement,
      setVariant,
      restore,
      reset,
    }),
    [decrement, increment, reset, restore, setVariant],
  );
}
