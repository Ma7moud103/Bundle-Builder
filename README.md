# Bundle Builder foundation

Production-oriented foundation for the Bundle Builder assessment. The Figma UI is intentionally not implemented in this stage.

## Run

```bash
npm install
npm run dev
```

## Foundation decisions

- Domain models and mock catalog data live under `src/features/bundle-builder`.
- Zustand persist stores accordion state, active variant per product, and independent quantity per variant.
- Reusable visual primitives live under `src/components/ui` and use Tailwind utilities only.
- Design tokens are CSS variables in `src/app/styles/tokens.css` and are exposed through Tailwind v4's `@theme inline` block.
- `@/*` resolves to `src/*` in both TypeScript and Vite.

Useful checks: `npm run build`, `npm run lint`, and `npm run format:check`.
