import { useBundle } from '@/contexts/BundleContext';

interface IProps {
  productId: string;
  variantId: string;
  quantity: number;
}

export function QuantityStepper({ productId, quantity, variantId }: IProps) {
  const { increment, decrement } = useBundle();

  return (
    <div className="flex items-center justify-between gap-2 rounded-[4px] py-1 text-[13px]">
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={quantity === 0}
        className="grid size-5 place-items-center rounded-[4px] border border-[#d7dce1] bg-white text-[#74808b] disabled:opacity-50"
        onClick={() => decrement(productId, variantId)}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="grid size-5 place-items-center rounded-[4px] bg-[#eef2f5] text-[#74808b]"
        onClick={() => increment(productId, variantId)}
      >
        +
      </button>
    </div>
  );
}
