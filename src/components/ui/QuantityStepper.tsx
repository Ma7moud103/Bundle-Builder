import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type ClassValue } from 'clsx';

interface IProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  className?: ClassValue;
  minusStyle?: ClassValue;
  minsIconStyle?: ClassValue;
  plusStyle?: ClassValue;
}
export function QuantityStepper({
  value,
  onChange,
  min = 0,
  className,
  minusStyle = 'border border-[#E6EBF0]',
  plusStyle = 'bg-[#F0F4F7]',
  minsIconStyle = 'text-[#CED6DE]',
}: IProps) {
  return (
    <div className={cn('inline-flex shrink-0 items-center gap-1', className)}>
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
        className={cn('grid size-6 place-items-center rounded disabled:opacity-50', minusStyle)}
      >
        <Minus className={cn(minsIconStyle)} size={12} />
      </button>
      <span className="min-w-4 text-center text-sm" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(value + 1)}
        className={cn('grid size-6 place-items-center rounded', plusStyle)}
      >
        <Plus size={12} />
      </button>
    </div>
  );
}
