import { Truck } from 'lucide-react';

export function CartShipping() {
  return (
    <div className="mt-2.5 flex min-h-14.25 items-center gap-3.25">
      <div className="grid size-10.25 place-items-center rounded-[5px] bg-white text-checkout-des-green">
        <Truck size={23} />
      </div>
      <span className="text-xs">Fast Shipping</span>
      <div className="ml-auto flex flex-col items-end text-[11px] leading-[15px]">
        <del className="text-discount-text">$5.99</del>
        <b className="text-purple-main">FREE</b>
      </div>
    </div>
  );
}
