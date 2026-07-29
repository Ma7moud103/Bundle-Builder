import type { IProduct } from './products';

export type StepId = 'cameras' | 'plans' | 'sensors' | 'accessories';
export type StepIcon = 'camera' | 'plan' | 'sensor' | 'protection';

export interface ICategories {
  id: StepId;
  label: string;
  sortOrder: number;
}

export interface ISteps {
  id: StepId;
  number: number;
  title: string;
  category: StepId;
}

export interface IStep {
  id: StepId;
  order: number;
  title: string;
  products: IProduct[];
  icon: string;
  nextStepLabel?: string;
}
