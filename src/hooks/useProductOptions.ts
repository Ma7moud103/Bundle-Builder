import { useMemo } from 'react';
import { useBundle } from '@/contexts/BundleContext';
import type { IProduct, IProductOptionCard } from '../interfaces/products';
import { getActiveVariantId, getSelectedQuantity, hasSelection } from '../util/selection';
import { getPriceAfterDiscount } from '../util/bundle';
import { resolveVariantImage } from '../data/catalog';

export function useProductOptions(products: IProduct[]) {
  const { bundle, increment, decrement, setVariant } = useBundle();

  const cards = useMemo<IProductOptionCard[]>(() => {
    return products.map((product) => {
      const selection = bundle[product.id];
      const activeVariantId = getActiveVariantId(product, selection);
      const activeVariant = product.variants?.find((variant) => variant.id === activeVariantId);
      const salePrice = getPriceAfterDiscount(product);
      const imageSrc = resolveVariantImage(product, activeVariantId);

      return {
        productId: product.id,
        name: product.name,
        description: product.description,
        imageSrc,
        imageAlt: activeVariant ? `${product.name}, ${activeVariant.label}` : product.name,
        discountLabel: product.discount ? `Save ${product.discount}` : undefined,
        price: salePrice,
        compareAtPrice: product.discount ? product.price : undefined,
        activeVariantId,
        quantity: getSelectedQuantity(selection, activeVariantId),
        isSelected: hasSelection(selection),
        variants: (product.variants ?? []).map((variant) => ({
          id: variant.id,
          label: variant.label,
          image: resolveVariantImage(product, variant.id),
        })),
        onVariantChange: (variantId: string) => setVariant(product.id, variantId),
        onIncrement: () => increment(product.id, activeVariantId),
        onDecrement: () => decrement(product.id, activeVariantId),
      };
    });
  }, [bundle, decrement, increment, products, setVariant]);

  return { cards };
}
