import type { StepId } from './steps';

interface IVarients {
  title: string;
  image_url: string;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  image_url: string;
  price: number;
  discount?: string;

  initialVariant?: string;

  variants?: IVarients[];
}

export interface ISelectedProduct {
  activeVariant?: string;
  quantities: Record<string, number>;
}

export type BundleState = Record<string, ISelectedProduct>;

export interface ReviewItem {
  productId: string;
  category: string;
  name: string;
  image: string;
  variantId?: string;
  variantLabel?: string;
  variant?: string;
  quantity: number;
  price: number;
  compareAtPrice?: number;
}

export const EBundleAction = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  SET_VARIANT: 'SET_VARIANT',
  RESTORE: 'RESTORE',
  RESET: 'RESET',
} as const;

export type BundleActionType = (typeof EBundleAction)[keyof typeof EBundleAction];

export type BundleAction =
  | {
      type: typeof EBundleAction.INCREMENT;
      payload: {
        productId: string;
        variantId: string;
      };
    }
  | {
      type: typeof EBundleAction.DECREMENT;
      payload: {
        productId: string;
        variantId: string;
      };
    }
  | {
      type: typeof EBundleAction.SET_VARIANT;
      payload: {
        productId: string;
        variantId: string;
      };
    }
  | {
      type: typeof EBundleAction.RESTORE;
      payload: BundleState;
    }
  | {
      type: typeof EBundleAction.RESET;
    };

export interface IBundleContext {
  bundle: BundleState;
  reviewItems: ReviewItem[];
  selectedCount: number;
  totalPrice: number;

  increment(productId: string, variantId: string): void;

  decrement(productId: string, variantId: string): void;

  setVariant(productId: string, variantId: string): void;

  restore(bundle: BundleState): void;

  reset(): void;
}

export interface ProductVariantViewModel {
  id: string;
  label: string;
}

export interface IProductOptionCard {
  productId: string;
  name: string;
  description?: string;
  imageSrc: string;
  discountLabel?: string;
  price: number;
  compareAtPrice?: number;
  activeVariantId: string;
  quantity: number;
  isSelected: boolean;
  variants: ProductVariantViewModel[];
  onVariantChange: (variantId: string) => void;
  onIncrement: () => void;
  onDecrement: () => void;
}

export interface ProductOptionsProps {
  stepId: StepId;
  products: IProduct[];
  onNext: () => void;
  nextLabel?: string;
}

export type ProductSelectionMap = Record<string, ISelectedProduct | undefined>;
