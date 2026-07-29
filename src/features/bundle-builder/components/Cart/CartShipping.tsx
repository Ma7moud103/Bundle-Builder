import { Truck } from 'lucide-react';

export function CartShipping() {
  return (
    <div className="mt-2.5 flex min-h-[57px] items-center gap-[13px]">
      <div className="grid size-10 place-items-center rounded-[5px] bg-white text-[#00a88d]">
        <Truck size={23} />
      </div>
      <span className="text-xs">Fast Shipping</span>
      <div className="ml-auto flex flex-col items-end text-[11px] leading-[15px]">
        <del className="text-[#6f7882]">$5.99</del>
        <b className="text-purple-main">FREE</b>
      </div>
    </div>
  );
}
