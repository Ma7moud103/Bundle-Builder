import { QuantityStepper } from '@/components/ui/QuantityStepper';
import type { CartItemProps } from '@/interfaces/Cart';

export function CartItem({
  compareAtPrice,
  image,
  imageAlt,
  name,
  onDecrement,
  onIncrement,
  price,
  quantity,
  variantLabel,
}: CartItemProps) {
  return (
    <div className=" min-h-15 flex  justify-between  items-center gap-4 ">
      <div className="flex justify-between items-center gap-3 ">
        <span className=" aspect-square size-10.25 place-items-center rounded-md bg-white p-2">
          {image && <img src={image} alt={imageAlt} className="rounded-[5px] object-contain" loading="lazy" />}
        </span>
        <h4 className="min-w-0 wrap-break-word  text-sm leading-4 text-black-10-header">
          {name}
          {variantLabel ? ` (${variantLabel})` : ''}
        </h4>
        <div className="min-w">
          <QuantityStepper
            minsIconStyle={`text-dark`}
            minusStyle={'bg-white'}
            plusStyle={'bg-white'}

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
        </div>
      </div>

      <div className=" flex flex-col items-end whitespace-nowrap text-sm leading-4.5">
        {compareAtPrice && compareAtPrice > price ? (
          <del className="text-discount-text">${compareAtPrice.toFixed(2)}</del>
        ) : null}
        <strong className="text-purple-main">${(price * quantity).toFixed(2)}</strong>
      </div>
    </div>
  );
}
