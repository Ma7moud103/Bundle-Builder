import type { ICategories, ISteps } from '../interfaces/steps';

export const categories: ICategories[] = [
  { id: 'cameras', label: 'Cameras', sortOrder: 1 },
  { id: 'sensors', label: 'Sensors', sortOrder: 2 },
  { id: 'accessories', label: 'Accessories', sortOrder: 3 },
  { id: 'plan', label: 'Plan', sortOrder: 4 },
];

export const builderSteps: ISteps[] = [
  { id: 'cameras', number: 1, title: 'Choose your cameras', category: 'cameras' },
  { id: 'plan', number: 2, title: 'Choose your plan', category: 'plan' },
  { id: 'sensors', number: 3, title: 'Choose your sensors', category: 'sensors' },
  { id: 'protection', number: 4, title: 'Add extra protection', category: 'accessories' },
];
