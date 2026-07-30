interface ProductPriceProps {
  price: number;
  compareAtPrice?: number;
}

export function ProductPrice({ price, compareAtPrice }: ProductPriceProps) {
  return (
    <div className="flex flex-col items-end text-xs leading-4">
      {compareAtPrice ? <del className="text-[#D8392B]">${compareAtPrice.toFixed(2)}</del> : null}
      <span className="text-[#484848]">${price.toFixed(2)}</span>
    </div>
  );
}
