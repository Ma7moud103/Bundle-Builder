interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProductImage({ src, alt, className = '' }: ProductImageProps) {
  return (
    <div className="flex items-center justify-center pt-7 w-25.25 h-33.5 overflow-hidden">
      <img src={src} alt={alt} className={`size-20 rounded-[5px] object-contain  ${className}`} loading="lazy" />
    </div>
  );
}
