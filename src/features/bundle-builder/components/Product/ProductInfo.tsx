interface ProductInfoProps {
  name: string;
  description?: string;
}

export function ProductInfo({ name, description }: ProductInfoProps) {
  return (
    <>
      <h3 className="m-0 text-4 font-semibold leading-5 text-black-10-header">{name}</h3>

      {description ? (
        <p className="m-0 text-12px leading-4 text-gray-48-sub-header">
          {description}{' '}
          <a href="#learn-more" className="text-12px inline leading-4 text-blue-700 underline ">
            Learn More
          </a>
        </p>
      ) : null}
    </>
  );
}
