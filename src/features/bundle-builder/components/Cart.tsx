import { CartActions } from './Cart/CartActions';
import { CartEmptyState } from './Cart/CartEmptyState';
import { CartHeader } from './Cart/CartHeader';
import { CartSection } from './Cart/CartSection';
import { CartShipping } from './Cart/CartShipping';
import { CartSummary } from './Cart/CartSummary';
import { useCartSummary } from './Cart/hooks/useCartSummary';

export default function Cart() {
  const { compareAtTotal, groupedSections, handleCheckout, handleSaveBundle, savings, totalPrice } =
    useCartSummary();

  return (
    <section className="flex flex-col gap-[5px] bg-purple-secondary px-5 pb-[30px] pt-[15px] md:rounded-lg">
      <CartHeader />

      {groupedSections.length === 0 ? <CartEmptyState /> : null}

      {groupedSections.map((section) => (
        <CartSection key={section.category} category={section.category} label={section.label} items={section.items} />
      ))}

      <CartShipping />
      <CartSummary compareAtTotal={compareAtTotal} savings={savings} totalPrice={totalPrice} />
      <CartActions onCheckout={handleCheckout} onSave={handleSaveBundle} />
    </section>
  );
}
