import { REVIEW_CATEGORY_LABELS, REVIEW_CATEGORY_ORDER } from './bundle';
import type { ReviewItem } from '../interfaces/products';
import type { CartSectionData } from '@/interfaces/Cart';

export function groupReviewItems(reviewItems: ReviewItem[]): CartSectionData[] {
  return REVIEW_CATEGORY_ORDER.map((category) => ({
    category,
    label: REVIEW_CATEGORY_LABELS[category],
    items: reviewItems.filter((item) => item.category === category),
  })).filter((section) => section.items.length > 0);
}
