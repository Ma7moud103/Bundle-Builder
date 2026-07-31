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
    <fieldset className="flex flex-nowrap gap-2 pt-1 " aria-label="Product variants">
      {variants.map((variant) => {
        const isActive = value === variant.id;
        return (
          <label
            key={variant.id}
            htmlFor={`${productId}-${variant.id}`}
            className={` cursor-pointer flex items-center rounded-xs border px-1.25 py-px text-xs transition-colors focus-within:ring-2 focus-within:ring-[#00a88d] focus-within:ring-offset-1 ${
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
            <span className="capitalize text-black-1F-headerAndBorder">{variant.label}</span>
          </label>
        );
      })}
    </fieldset>
  );
}
