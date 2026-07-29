import type { CartActionsProps } from './types';

export function CartActions({ onCheckout, onSave }: CartActionsProps) {
  return (
    <>
      <button
        type="button"
        onClick={onCheckout}
        className="w-full rounded bg-purple-main px-4 py-3 text-[17px] font-bold text-white"
      >
        Checkout
      </button>
      <button
        type="button"
        onClick={onSave}
        className="mt-[5px] block w-full text-center text-[11px] italic text-[#6f7882] underline"
      >
        Save my system for later
      </button>
    </>
  );
}
