interface IProductVariant {
  id: string;
  label: string;
}

interface IProps {
  variants: IProductVariant[];
  value: string;
  onChange: (variantId: string) => void;
}

export function ProductVariantSelector({ variants, value, onChange }: IProps) {
  if (variants.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 pt-1" role="radiogroup" aria-label="Product variants">
      {variants.map((variant) => {
        const isActive = value === variant.id;

        return (
          <button
            key={variant.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(variant.id)}
            className={`rounded border px-2 py-1 text-xs transition-colors ${
              isActive ? 'border-[#00a88d]' : 'border-[#d9dee4]'
            }`}
          >
            {variant.label}
          </button>
        );
      })}
    </div>
  );
}
