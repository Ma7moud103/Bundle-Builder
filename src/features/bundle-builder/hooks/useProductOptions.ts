import { useMemo } from 'react';
import { useBundle } from '@/contexts/BundlerContext';
import type { IProduct, IProductOptionCard } from '../interfaces/products';
import { getActiveVariantId, getSelectedQuantity, hasSelection } from '../util/selection';
import { getPriceAfterDiscount } from '../util/bundle';
import { resolveImageSource } from '../util/images';

export function useProductOptions(products: IProduct[]) {
  const { bundle, increment, decrement, setVariant } = useBundle();

  const cards = useMemo<IProductOptionCard[]>(() => {
    return products.map((product) => {
      const selection = bundle[product.id];
      const activeVariantId = getActiveVariantId(product, selection);
      const salePrice = getPriceAfterDiscount(product);

      return {
        productId: product.id,
        name: product.name,
        description: product.description,
        imageSrc: resolveImageSource(product.image_url),
        discountLabel: product.discount ? `Save ${product.discount}` : undefined,
        price: salePrice,
        compareAtPrice: product.discount ? product.price : undefined,
        activeVariantId,
        quantity: getSelectedQuantity(selection, activeVariantId),
        isSelected: hasSelection(selection),
        variants: (product.variants ?? []).map((variant) => ({
          id: variant.title,
          label: variant.title,
        })),
        onVariantChange: (variantId: string) => setVariant(product.id, variantId),
        onIncrement: () => increment(product.id, activeVariantId),
        onDecrement: () => decrement(product.id, activeVariantId),
      };
    });
  }, [bundle, decrement, increment, products, setVariant]);

  return { cards };
}
