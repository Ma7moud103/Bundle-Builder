import type { IProductOptionCard } from '../interfaces/products';
import { ProductImage } from './ProductImage';
import { ProductInfo } from './ProductInfo';
import { ProductPrice } from './ProductPrice';
import { ProductQuantity } from './ProductQuantity';
import { ProductVariantSelector } from './ProductVariantSelector';

export function ProductOptionCard({
  name,
  description,
  imageSrc,
  discountLabel,
  price,
  compareAtPrice,
  activeVariantId,
  quantity,
  isSelected,
  variants,
  onVariantChange,
  onIncrement,
  onDecrement,
}: IProductOptionCard) {
  return (
    <article
      className={`relative grid grid-cols-[7rem_minmax(0,1fr)] gap-4 rounded-[10px] bg-white p-2.75  lg:min-h-37 ${
        isSelected && 'border-2 border-[#8066ec]'
      }
      
    
        sm:odd:last:col-span-2
        sm:odd:last:justify-self-center
        sm:odd:last:w-full
        sm:odd:last:max-w-[calc((100%-(--spacing(4)))/2)]
      
      
      
      
      
        `}
    >
      {discountLabel ? (
        <span
          className="absolute left-2.5 top-2.5 rounded-full bg-purple-main px-2 py-0.5 text-[11px] font-semibold text-white
        

        
        
        
        
        "
        >
          {discountLabel}
        </span>
      ) : null}

      <ProductImage src={imageSrc} alt={name} />

      <div className="">
        <ProductInfo name={name} description={description} />

        {variants.length > 0 ? (
          <ProductVariantSelector variants={variants} value={activeVariantId} onChange={onVariantChange} />
        ) : null}

        <div className="mt-auto flex items-end justify-between gap-3">
          <ProductQuantity quantity={quantity} onIncrement={onIncrement} onDecrement={onDecrement} />
          <ProductPrice price={price} compareAtPrice={compareAtPrice} />
        </div>
      </div>
    </article>
  );
}
