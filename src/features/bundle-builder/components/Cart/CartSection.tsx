import { CartItem } from './CartItem';
import type { CartSectionViewModel } from './types';

export function CartSection({ items, label }: CartSectionViewModel) {
  return (
    <div className="border-t border-t-[#CED6DE] pt-3.75 ">
      <div className="mb-2 text-10px tracking-[1.6px] text-prodcuts-header">{label}</div>
      <div className="space-y-2.5">
        {items.map((item) => (
          <CartItem
            key={`${item.productId}-${item.variantId ?? 'default'}`}
            compareAtPrice={item.compareAtPrice}
            image={item.image}
            imageAlt={item.imageAlt}
            name={item.name}
            onDecrement={item.onDecrement}
            onIncrement={item.onIncrement}
            price={item.price}
            quantity={item.quantity}
            variantLabel={item.variantLabel ?? item.variant}
          />
        ))}
      </div>
    </div>
  );
}
