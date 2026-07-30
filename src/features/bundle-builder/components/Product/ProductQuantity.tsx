import { QuantityStepper } from '@/components/ui/QuantityStepper';

interface ProductQuantityProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function ProductQuantity({ quantity, onIncrement, onDecrement }: ProductQuantityProps) {
  return (
    <QuantityStepper
      value={quantity}
      onChange={(nextValue) => {
        if (nextValue > quantity) {
          onIncrement();
          return;
        }

        if (nextValue < quantity) {
          onDecrement();
        }
      }}
    />
  );
}
