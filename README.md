# Bundle Builder

React/Vite prototype for the frontend bundle-builder take-home.

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run build
npm run lint
```

## Implementation notes

- Product content is rendered from `src/features/bundle-builder/data/products.json`.
- Selection state is centralized in `App`, so product-card and review-panel steppers stay synchronized.
- Variant quantities are tracked independently per product and variant; changing the active variant does not overwrite another variant's quantity.
- The review panel recalculates selected lines, totals, compare-at totals, and savings from the current selection.
- “Save my system for later” stores the current configuration in `localStorage` and restores it on the next visit.
- Step 1 is expanded initially, and the Next button advances the accordion to the following step.
- Styling uses the existing Tailwind setup and leaves `src/index.css` unchanged.
