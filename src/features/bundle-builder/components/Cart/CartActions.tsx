import type { CartActionsProps } from '@/interfaces/Cart';

export function CartActions({ onCheckout, onSave, savings }: CartActionsProps) {
  return (
    <>
      {savings > 0 ? (
        <div className="text-center text-[11px] text-checkout-des-green ">
          Congrats! You&apos;re saving ${savings.toFixed(2)} on your security bundle!
        </div>
      ) : null}
      <button
        type="button"
        onClick={onCheckout}
        className="w-full rounded bg-purple-main px-4 py-3 text-17px font-bold text-white"
      >
        Checkout
      </button>
      <button
        type="button"
        onClick={onSave}
        className="block w-full text-center text-[11px] italic text-discount-text underline"
      >
        Save my system for later
      </button>
    </>
  );
}
