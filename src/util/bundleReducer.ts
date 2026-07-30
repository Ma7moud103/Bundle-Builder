import { EBundleAction, type BundleAction, type BundleState } from '@/interfaces/products';

function updateVariantQuantity(
  state: BundleState,
  productId: string,
  variantId: string,
  quantity: number,
): BundleState {
  const nextQuantities = { ...(state[productId]?.quantities ?? {}) };
  const activeVariantId = state[productId]?.activeVariantId ?? variantId;

  if (quantity > 0) {
    nextQuantities[variantId] = quantity;
  } else {
    delete nextQuantities[variantId];
  }

  return {
    ...state,
    [productId]: {
      activeVariantId,
      quantities: nextQuantities,
    },
  };
}

export function bundleReducer(state: BundleState, action: BundleAction): BundleState {
  switch (action.type) {
    case EBundleAction.SET_VARIANT: {
      const item = state[action.payload.productId];

      return {
        ...state,
        [action.payload.productId]: {
          activeVariantId: action.payload.variantId,
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
