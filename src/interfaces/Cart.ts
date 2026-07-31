import type { ProductCategory } from '@/data/catalog';
import type { ReviewItem } from './products';

export interface CartSectionData {
  category: ProductCategory;
  label: string;
  items: ReviewItem[];
}

export interface CartItemViewModel extends ReviewItem {
  onIncrement: () => void;
  onDecrement: () => void;
}

export interface CartItemProps {
  compareAtPrice?: number;
  image: string;
  imageAlt: string;
  name: string;
  onDecrement: () => void;
  onIncrement: () => void;
  price: number;
  quantity: number;
  variantLabel?: string;
}

export interface CartSectionViewModel {
  category: ProductCategory;
  label: string;
  items: CartItemViewModel[];
}

export interface CartSummaryProps {
  compareAtTotal: number;
  totalPrice: number;
}

export interface CartActionsProps {
  onCheckout: () => void;
  onSave: () => void;
  savingAmount: number;
}
