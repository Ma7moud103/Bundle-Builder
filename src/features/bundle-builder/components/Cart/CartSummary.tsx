import type { CartSummaryProps } from './types';
import iconSatsification from '/images/satsification.png';

export function CartSummary({ compareAtTotal, savings, totalPrice }: CartSummaryProps) {
  return (
    <div className="flex flex-col gap-3 py-4">
      <div className="flex items-center justify-between">
        <span className=" size-19.5 ">
          <img loading="lazy" src={iconSatsification} alt="iconSatsification" />
        </span>
        <div className="text-end">
          <span className="mb-1.75  rounded-[3px] bg-purple-main px-1.75 py-1.25 text-10px text-white">
            as low as $19.19/mo
          </span>
          <div className="flex items-center">
            <del className="text-18px text-discount-text font-medium">
              {compareAtTotal > totalPrice ? `$${compareAtTotal.toFixed(2)}` : '$0.00'}
            </del>
            <p className="ml-1 text-24px text-purple-main font-bold">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
      {savings > 0 ? (
        <div className="text-center text-[11px] text-checkout-des-green mb-1">
          Congrats! You&apos;re saving ${savings.toFixed(2)} on your security bundle!
        </div>
      ) : null}
    </div>
  );
}
