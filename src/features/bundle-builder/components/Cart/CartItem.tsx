import { QuantityStepper } from '@/components/ui/QuantityStepper';
import type { CartItemProps } from './types';

export function CartItem({
  compareAtPrice,
  image,
  name,
  onDecrement,
  onIncrement,
  price,
  quantity,
  variantLabel,
}: CartItemProps) {
  return (
    <div className="grid min-h-[60px] grid-cols-12 items-center gap-4">
      <div className="col-span-2 grid aspect-square place-items-center rounded-[8px] bg-white p-2">
        <img src={image} alt="" className="rounded-[5px] object-contain" loading="lazy" />
      </div>
      <span className="col-span-5 min-w-0 break-words text-sm leading-4 text-black-10-header">
        {name}
        {variantLabel ? ` (${variantLabel})` : ''}
      </span>
      <QuantityStepper
        value={quantity}
        onChange={(nextValue) => {
          if (nextValue > quantity) {
            onIncrement();
            return;
          }

          if (nextValue < quantity) {
            onDecrement();
          }
        }}
      />
      <div className="col-span-2 flex flex-col items-end whitespace-nowrap text-sm leading-[18px]">
        {compareAtPrice && compareAtPrice > price ? (
          <del className="text-[#6F7882]">${compareAtPrice.toFixed(2)}</del>
        ) : null}
        <strong className="text-purple-main">${(price * quantity).toFixed(2)}</strong>
      </div>
    </div>
  );
}
