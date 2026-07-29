interface ProductInfoProps {
  name: string;
  description?: string;
  learnMoreHref?: string;
}

export function ProductInfo({ name, description, learnMoreHref = '#learn-more' }: ProductInfoProps) {
  return (
    <>
      <h3 className="m-0 text-[16px] font-semibold leading-5 text-black-10-header">{name}</h3>

      {description ? <p className="m-0 text-[12px] leading-4 text-[#484848]">{description}</p> : null}

      <a href={learnMoreHref} className="text-[12px] leading-4 text-blue-700 underline">
        Learn More
      </a>
    </>
  );
}
