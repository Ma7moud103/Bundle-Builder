import { useCartSummary } from '../../../../hooks/useCartSummary';
import { CartActions } from './CartActions';
import { CartEmptyState } from './CartEmptyState';
import { CartHeader } from './CartHeader';
import { CartSection } from './CartSection';
import { CartShipping } from './CartShipping';
import { CartSummary } from './CartSummary';

export default function Cart() {
  const { compareAtTotal, groupedSections, handleCheckout, handleSaveBundle, savingAmount, totalPrice } =
    useCartSummary();

  //
  return (
    <section className="flex flex-col md:grid md:grid-cols-[minmax(auto,552px)_minmax(auto,486px)] gap-1.25 md:gap-13 lg:flex lg:flex-col lg:gap-1.25 bg-purple-secondary px-5 pb-7.5 pt-[15px] md:rounded-lg lg:self-start ">
      <div className="">
        <CartHeader />

        {groupedSections.length === 0 && <CartEmptyState />}

        {groupedSections.map((section) => (
          <CartSection key={section.category} category={section.category} label={section.label} items={section.items} />
        ))}

        <CartShipping />
      </div>
      <div className="">
        <CartSummary compareAtTotal={compareAtTotal} totalPrice={totalPrice} />
        <CartActions onCheckout={handleCheckout} savingAmount={savingAmount} onSave={handleSaveBundle} />
      </div>
    </section>
  );
}
