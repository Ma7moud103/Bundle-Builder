/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { StepId } from '@/interfaces/steps';

export const STEP_ORDER: StepId[] = ['cameras', 'plans', 'sensors', 'accessories'];

interface IUIContext {
  openSteps: StepId[];
  setOpenSteps: (steps: StepId[]) => void;
  openNextStep: () => void;
}

const UIContext = createContext<IUIContext | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [openSteps, setOpenSteps] = useState<StepId[]>(['cameras']);

  const openNextStep = useCallback(() => {
    const currentStep = openSteps[0];

    const currentIndex = STEP_ORDER.indexOf(currentStep);

    if (currentIndex < STEP_ORDER.length - 1) {
      setOpenSteps([STEP_ORDER[currentIndex + 1]]);
    }
  }, [openSteps]);

  const value = useMemo(
    () => ({
      openSteps,
      setOpenSteps,
      openNextStep,
    }),
    [openSteps, openNextStep],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const context = useContext(UIContext);

  if (!context) {
    throw new Error('useUI must be used within UIProvider');
  }

  return context;
}
