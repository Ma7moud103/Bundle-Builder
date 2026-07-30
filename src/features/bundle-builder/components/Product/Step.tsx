import { AccordionContent, AccordionItem, AccordionTrigger } from '#components/ui/Accordion';
import type { IStep } from '../../../../interfaces/steps';
import { ProductOptions } from './ProductOptions';
import { useUI } from '@/contexts/UIContext';
import arrowUp from '/images/icons/up.svg';
import arrowDown from '/images/icons/arrow-down.svg';
import { useBundle } from '@/contexts/BundleContext';
import { SelectedProductsCount } from '../../../../util/bundle';

export function Step({ step }: { step: IStep }) {
  const { icon, id, order, products, title, nextStepLabel } = step;
  const { openSteps, openNextStep } = useUI();
  const { bundle } = useBundle();

  const isOpen = openSteps.includes(id);
  const SelectedProdctsNames = products.map((product) => product.id);
  const selectedCount = SelectedProductsCount(bundle, SelectedProdctsNames);

  return (
    <AccordionItem
      className={`border-b-[0.5px] pt-1.25  border-black-1F-headerAndBorder ${isOpen ? 'lg:bg-purple-secondary md:rounded-[10px] md:border-b-0' : ''}`}
      value={id}
    >
      <div className="border-b-[0.5px] border-black-1F-headerAndBorder px-[15px] pb-2 pt-3 text-10px uppercase leading-none tracking-[1.6px] font-normal text-gray-48-sub-header">
        step {order} of 4
      </div>
      <AccordionTrigger className="items-center gap-4 rounded-none border-transparent px-[15px] py-5 text-18px font-semibold leading-none text-black-10-header hover:no-underline [&>svg]:hidden">
        <span className="flex min-w-0 items-center text-18px gap-2 whitespace-nowrap font-semibold">
          <img src={icon} alt={title} className="size-5 transition-all sm:size-6.5 shrink-0" />
          {title}
        </span>
        <div className="ml-auto flex shrink-0 items-center gap-1 text-center text-[14px] font-medium leading-4 text-purple-main   ">
          {selectedCount > 0 ? <span>{selectedCount} selected</span> : null}

          <img src={!isOpen ? arrowUp : arrowDown} alt="" className="size-3" />
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <ProductOptions stepId={id} products={products} onNext={openNextStep} nextLabel={nextStepLabel} />
      </AccordionContent>
    </AccordionItem>
  );
}
