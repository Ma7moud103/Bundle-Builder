import type { CartSummaryProps } from './types';

export function CartSummary({ compareAtTotal, savings, totalPrice }: CartSummaryProps) {
  return (
    <div className="flex flex-col gap-3 py-4">
      <div className="flex items-center justify-between">
        <span className="grid size-[76px] rotate-[-12deg] place-content-center rounded-full bg-purple-main text-center text-[18px] font-bold text-white">
          100%
          <small className="text-[7px] font-medium leading-2">
            Wyze
            <br />
            satisfaction
            <br />
            guarantee
          </small>
        </span>
        <div className="text-right">
          <div className="mb-[7px] rounded-[3px] bg-purple-main px-[5px] py-0.5 text-[10px] text-white">
            as low as $19.19/mo
          </div>
          <del className="text-base text-[#6f7882]">
            {compareAtTotal > totalPrice ? `$${compareAtTotal.toFixed(2)}` : '$0.00'}
          </del>{' '}
          <strong className="ml-1 text-[21px] text-purple-main">${totalPrice.toFixed(2)}</strong>
        </div>
      </div>
      {savings > 0 ? (
        <div className="text-center text-[11px] text-checkout-des-green">
          Congrats! You&apos;re saving ${savings.toFixed(2)} on your security bundle!
        </div>
      ) : null}
    </div>
  );
}
