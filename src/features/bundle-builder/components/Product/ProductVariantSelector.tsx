import type { IProductVariant } from '../../../../interfaces/products';

interface IProps {
  variants: IProductVariant[];
  value: string;
  onChange: (variantId: string) => void;
  productId: string;
}

export function ProductVariantSelector({ productId, variants, value, onChange }: IProps) {
  if (variants.length === 0) {
    return null;
  }

  return (
    <fieldset className="flex flex-wrap gap-2 pt-1" aria-label="Product variants">
      <legend className="sr-only">Product variants</legend>
      {variants.map((variant) => {
        const isActive = value === variant.id;
        return (
          <label
            key={variant.id}
            htmlFor={`${productId}-${variant.id}`}
            className={`flex cursor-pointer items-center justify-center gap-1 rounded border px-2 py-1 text-xs transition-colors focus-within:ring-2 focus-within:ring-[#00a88d] focus-within:ring-offset-1 ${
              isActive ? 'border-[#00a88d]' : 'border-[#d9dee4]'
            }`}
          >
            <input
              id={`${productId}-${variant.id}`}
              type="radio"
              name={productId}
              checked={isActive}
              onChange={() => onChange(variant.id)}
              className="sr-only"
            />
            <img className="h-6 w-6.25" src={variant.image ?? ''} alt="" aria-hidden="true" />
            <span>{variant.label}</span>
          </label>
        );
      })}
    </fieldset>
  );
}
