import Steps from './features/bundle-builder/components/Product/Steps';
import Cart from './features/bundle-builder/components/Cart/Cart';
import { UIProvider } from './contexts/UIContext';
import { BundleProvider } from './contexts/BundleContext';

export default function App() {
  return (
    <UIProvider>
      <BundleProvider>
        <main className="flex min-h-313 flex-col text-[#17191d]">
          <header className="flex flex-1 items-center justify-center px-4 py-6 lg:hidden">
            <h1 className="m-0 text-[31px] font-bold tracking-[-1.2px]">Let&apos;s get started!</h1>
          </header>
          <section className="min-h-291.5 w-full   lg:justify-center  lg:grid lg:grid-cols-[minmax(auto,768px)_399px] lg:gap-7.5  lg:px-20 lg:py-12">
            <Steps />
            <Cart />
          </section>
        </main>
      </BundleProvider>
    </UIProvider>
  );
}
