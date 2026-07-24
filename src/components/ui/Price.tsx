import { cn } from '@/lib/utils';

type PriceProps = { value: number; compareAt?: number; className?: string };
export function Price({ value, compareAt, className }: PriceProps) {
  return (
    <span className={cn('inline-flex items-baseline gap-2', className)}>
      {compareAt && <del className="text-muted-foreground">${compareAt.toFixed(2)}</del>}
      <strong className="text-primary">${value.toFixed(2)}</strong>
    </span>
  );
}
