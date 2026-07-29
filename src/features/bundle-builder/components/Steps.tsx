import { memo, useMemo } from 'react';

import CameraProduct from '../data/cameras.json';
import PlanProduct from '../data/plans.json';
import SensorProduct from '../data/sensors.json';
import AccessoryProduct from '../data/accessories.json';

import cameraIcon from '/camera-icon.svg';
import planIcon from '/plan-icon.svg';
import sensorIcon from '/sensors-icon.svg';
import protectionIcon from '/protection-icon.svg';
import { Step } from './Step';
import type { IStep } from '../interfaces/steps';
import { Accordion } from '#components/ui/Accordion';
import { useUI } from '@/contexts/UIContext';

function Steps() {
  const steps = useMemo<IStep[]>(
    () => [
      {
        id: 'cameras',
        order: 1,
        title: 'Choose your cameras',
        products: CameraProduct,
        icon: cameraIcon,
        nextStepLabel: 'Choose your plan',
      },

      {
        id: 'plans',
        order: 2,
        title: 'Choose your plan',
        products: PlanProduct,
        nextStepLabel: 'Choose your sensors',
        icon: planIcon,
      },
      {
        id: 'sensors',
        order: 3,
        title: 'Choose your sensors',
        products: SensorProduct,
        nextStepLabel: 'Add extra protection',
        icon: sensorIcon,
      },
      {
        id: 'accessories',
        order: 4,
        title: 'Add extra protection',
        products: AccessoryProduct,
        icon: protectionIcon,
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
