import { useUI } from '@/contexts/UIContext';
import { useProductOptions } from '../hooks/useProductOptions';
import type { ProductOptionsProps } from '../interfaces/products';
import { ProductOptionCard } from './ProductOptionCard';

export function ProductOptions({ onNext, nextLabel, products, stepId }: ProductOptionsProps) {
  const { cards } = useProductOptions(products);

  const { openSteps } = useUI();
  const isOpen = openSteps.includes(stepId);

  return (
    <section className={`px-3.75 py-5 lg:py-0 lg:block ${isOpen && 'bg-purple-secondary md:bg-auto '}`}>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {cards.map((card) => (
          <ProductOptionCard key={card.productId} {...card} />
        ))}
      </div>

      {nextLabel && (
        <button
          type="button"
          onClick={onNext}
          className="mx-auto mt-4 block rounded-md border border-purple-main px-6 py-2 text-17px text-purple-main"
        >
          {nextLabel}
        </button>
      )}
    </section>
  );
}
