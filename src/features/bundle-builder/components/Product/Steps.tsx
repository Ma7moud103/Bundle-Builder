import { memo, useMemo } from 'react';
import { accessoryProducts, cameraProducts, planProducts, sensorProducts } from '../../../../data/catalog';
import { Step } from './Step';
import type { IStep } from '../../../../interfaces/steps';
import { Accordion } from '#components/ui/Accordion';
import { useUI } from '@/contexts/UIContext';

function Steps() {
  const steps = useMemo<IStep[]>(
    () => [
      {
        id: 'cameras',
        order: 1,
        title: 'Choose your cameras',
        products: cameraProducts,
        icon: '/images/icons/camera-icon.svg',
        nextStepLabel: 'Choose your plan',
      },

      {
        id: 'plans',
        order: 2,
        title: 'Choose your plan',
        products: planProducts,
        nextStepLabel: 'Choose your sensors',
        icon: '/images/icons/plan-icon.svg',
      },
      {
        id: 'sensors',
        order: 3,
        title: 'Choose your sensors',
        products: sensorProducts,
        nextStepLabel: 'Add extra protection',
        icon: '/images/icons/sensors-icon.svg',
      },
      {
        id: 'accessories',
        order: 4,
        title: 'Add extra protection',
        products: accessoryProducts,
        icon: '/images/icons/protection-icon.svg',
      },
    ],
    [],
  );
  const { openSteps, setOpenSteps } = useUI();

  return (
    <Accordion multiple={false} value={openSteps} onValueChange={(value) => setOpenSteps(value)} className="w-full">
      {steps.map((step) => (
        <Step key={step.id} step={step} />
      ))}
    </Accordion>
  );
}

export default memo(Steps);
