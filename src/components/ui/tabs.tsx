/* eslint-disable react-refresh/only-export-components */
import { Tabs as TabsPrimitive } from '@base-ui/react/tabs';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const Tabs = TabsPrimitive.Root;

export function TabsList({ className, ...props }: ComponentProps<typeof TabsPrimitive.List>) {
  return <TabsPrimitive.List className={cn('flex flex-wrap gap-1', className)} {...props} />;
}

export function TabsTrigger({ className, ...props }: ComponentProps<typeof TabsPrimitive.Tab>) {
  return (
    <TabsPrimitive.Tab
      className={cn(
        'inline-flex items-center gap-1.5 rounded border border-border px-2 py-1 text-xs data-active:border-primary data-active:ring-1 data-active:ring-primary',
        className,
      )}
      {...props}
    />
  );
}

export const TabsContent = TabsPrimitive.Panel;
