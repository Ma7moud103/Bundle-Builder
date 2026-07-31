import cameras from './cameras.json';
import plans from './plans.json';
import sensors from './sensors.json';
import accessories from './accessories.json';
import type { IProduct } from '@/interfaces/products';
import type { StepId } from '@/interfaces/steps';

export type ProductCategory = StepId;

type CatalogProduct = IProduct & {
  category: ProductCategory;
};

export const cameraProducts: IProduct[] = cameras;
export const planProducts: IProduct[] = plans;
export const sensorProducts: IProduct[] = sensors;
export const accessoryProducts: IProduct[] = accessories;

export const REVIEW_CATEGORY_ORDER: ProductCategory[] = ['cameras', 'sensors', 'accessories', 'plans'];

export const REVIEW_CATEGORY_LABELS: Record<ProductCategory, string> = {
  cameras: 'CAMERAS',
  sensors: 'SENSORS',
  accessories: 'ACCESSORIES',
  plans: 'PLAN',
};

export const productCatalog: CatalogProduct[] = [
  ...cameraProducts.map((product) => ({ ...product, category: 'cameras' as const })),
  ...sensorProducts.map((product) => ({ ...product, category: 'sensors' as const })),
  ...accessoryProducts.map((product) => ({ ...product, category: 'accessories' as const })),
  ...planProducts.map((product) => ({ ...product, category: 'plans' as const })),
];

export const productLookup = new Map(productCatalog.map((product) => [product.id, product] as const));

const FALLBACK_IMAGE = '/images/icons/image-placeholder.svg';

export function resolveVariantImage(product: Pick<IProduct, 'image' | 'variants'>, variantId?: string) {
  const variant = product.variants?.find((variant) => variant.id === variantId);

  return variant?.image ? product.image : FALLBACK_IMAGE;
}
