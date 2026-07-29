export function CartHeader() {
  return (
    <div className="flex flex-col gap-[5px]">
      <div className="mb-5 text-[10px] tracking-[1.6px] text-[#484848]">REVIEW</div>
      <h2 className="m-0 text-[21px] tracking-[-.4px]">Your security system</h2>
      <p className="mb-[11px] text-[11.5px] leading-[15px] tracking-[.1px] text-[#484848]">
        Review your personalized protection system designed to
        <br className="hidden md:block" /> keep what matters most safe.
      </p>
    </div>
  );
}
