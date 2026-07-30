/* eslint-disable react-refresh/only-export-components */
import { createContext, createElement, useContext, useMemo, useReducer, type ReactNode } from 'react';
import type { IBundleContext } from '@/interfaces/products';
import { bundleReducer } from '../util/bundleReducer';
import { useBundleActions } from '../hooks/useBundleActions';
import { getBundleFromStorage, useBundleStorage } from '../hooks/useBundleStorage';
import { useBundleSelectors } from '../hooks/useBundleSelectors';

export const BundleContext = createContext<IBundleContext | null>(null);

export function useBundle() {
  const context = useContext(BundleContext);

  if (!context) {
    throw new Error('useBundle must be used within BundleProvider');
  }

  return context;
}

interface IProps {
  children: ReactNode;
}

export function BundleProvider({ children }: IProps) {
  const [bundle, dispatch] = useReducer(bundleReducer, undefined, getBundleFromStorage);

  useBundleStorage(bundle);

  const actions = useBundleActions(dispatch);
  const selectors = useBundleSelectors(bundle);

  const value = useMemo<IBundleContext>(
    () => ({
      bundle,
      ...selectors,
      ...actions,
    }),
    [actions, bundle, selectors],
  );

  return createElement(BundleContext.Provider, { value }, children);
}
