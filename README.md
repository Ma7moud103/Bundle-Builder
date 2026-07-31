# Bundle Builder

A React-based multi-step bundle builder that allows users to configure a custom home security system while reviewing their selections in real time.

The application is entirely data-driven and closely follows the provided Figma design while focusing on maintainability, scalability, accessibility, and responsiveness.

---

## Features

* Multi-step accordion workflow
* Variant selection support
* Variant-specific quantity management
* Live review panel updates
* Persistent state management using `localStorage`
* Responsive layout
* Data-driven product catalog
* Shared image resolution pipeline
* Type-safe implementation with TypeScript
* Centralized state management using React Context and `useReducer`

---

## Demo

You can add your deployed application URL here.

```text
https://your-deployment-url.com
```

---

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* Context API
* React Hooks
* ESLint
* Prettier

---

## Project Structure

```text
src/
├── components/
├── contexts/
├── data/
│   ├── accessories.json
│   ├── cameras.json
│   ├── plans.json
│   └── sensors.json
├── features/
├── hooks/
├── interfaces/
├── util/
└── styles/

public/
└── images/
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd <project-name>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

---

## Architecture

The application follows a data-driven architecture in which products, variants, and images are defined within the catalog itself.

### Main building blocks

* Product catalog
* Bundle context
* Reducer-based state management
* Derived selectors
* Shared image resolver
* Review panel view models

---

## Variant Management

Each variant maintains its own quantity independently.

For example:

```text
Camera
├── Black (quantity: 2)
└── White (quantity: 1)
```

Changing the selected variant updates the quantity stepper while preserving the quantities of previously selected variants.

---

## Image Management

All product and variant images are stored within the catalog and resolved through a single shared image pipeline.

```text
Catalog
      ↓
Bundle state
      ↓
Image resolver
      ↓
Builder
      ↓
Review panel
```

This approach avoids duplicated logic and ensures consistency across the application.

---

## Persistence

The bundle configuration is persisted using `localStorage`.

The saved state includes:

* Selected products
* Variant selections
* Quantities

The application restores the bundle automatically after a page refresh.

---

## Accessibility

The application includes:

* Semantic HTML elements
* Keyboard navigation support
* Screen-reader-friendly labels
* Accessible form controls
* Responsive layouts

---

## Responsiveness

The application is designed to work across multiple viewport sizes, including:

* Desktop
* Tablet
* Mobile

---

## Trade-offs

Some decisions were intentionally made to optimize maintainability and readability:

* React Context was chosen over external state management libraries.
* The application remains entirely data-driven.
* The image pipeline was centralized to eliminate duplicated logic.
* `localStorage` was chosen instead of a backend service.



## Notes

The focus of the implementation was correctness, maintainability, scalability, accessibility, and consistency with the provided design.

---

## Author

Developed by ** Mahmoud Shawky **.
