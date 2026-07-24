import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

type QuantityStepperProps = { value: number; onChange: (value: number) => void; min?: number; className?: string };
export function QuantityStepper({ value, onChange, min = 0, className }: QuantityStepperProps) {
  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
        className="grid size-6 place-items-center rounded border border-border disabled:opacity-50"
      >
        <Minus size={12} />
      </button>
      <span className="min-w-4 text-center text-sm" aria-live="polite">
        {value}
      </span>
      <button type="button" aria-label="Increase quantity" onClick={() => onChange(value + 1)} className="grid size-6 place-items-center rounded bg-muted">
        <Plus size={12} />
      </button>
    </div>
  );
}
