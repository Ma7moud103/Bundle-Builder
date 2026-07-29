import type { IProduct, ISelectedProduct } from '../interfaces/products';

export function getDefaultVariantId(product: Pick<IProduct, 'initialVariant' | 'variants'>) {
  return product.initialVariant ?? product.variants?.[0]?.title ?? 'default';
}

export function getActiveVariantId(product: IProduct, selection?: ISelectedProduct) {
  return selection?.activeVariant ?? getDefaultVariantId(product);
}

export function getSelectedQuantity(selection: ISelectedProduct | undefined, variantId: string) {
  return selection?.quantities[variantId] ?? 0;
}

export function hasSelection(selection: ISelectedProduct | undefined) {
  return Boolean(selection && Object.values(selection.quantities).some((quantity) => quantity > 0));
}
