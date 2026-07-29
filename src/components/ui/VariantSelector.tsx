import { Tabs, TabsList, TabsTrigger } from './tabs';

type Variant = { id: string; label: string; swatch: string };
type VariantSelectorProps = { variants: Variant[]; value: string; onChange: (variantId: string) => void };

export function VariantSelector({ variants, value, onChange }: VariantSelectorProps) {
  return (
    <Tabs value={value} onValueChange={(next) => onChange(String(next))}>
      <TabsList aria-label="Product variants" className="mt-2">
        {variants.map((variant) => (
          <TabsTrigger type="button" key={variant.id} value={variant.id}>
            <span className="size-3 rounded-sm border border-border" style={{ backgroundColor: variant.swatch }} />
            {variant.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
