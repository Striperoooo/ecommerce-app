# Audiophile E-commerce Platform

[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org) [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org) [![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com) [![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)](https://reactrouter.com/) [![Vitest](https://img.shields.io/badge/Vitest-8B5CF6?style=flat&logo=vitest&logoColor=white)](https://vitest.dev) [![React Testing Library](https://img.shields.io/badge/RTL-@testing--library%2Freact-ffdd57?style=flat&logo=testinglibrary&logoColor=black)](https://testing-library.com/docs/react-testing-library/intro/) [![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)

A multi-page e-commerce platform for high-end audio equipment. This project demonstrates a pixel-perfect implementation of a complex design system, featuring robust global state management, custom form validation, and a comprehensive testing suite.

Highlights
-----------------
- **Architecture:** Component-driven UI with reusable atoms (Buttons, Inputs) and molecules (Product Cards, Modals).
- **State Management:** `CartContext` handles complex business logic (merging duplicates, persistence, totals) without prop drilling.
- **Testing:** Provider-level integration tests using **Vitest** and **React Testing Library** to ensure reliability of core flows.
- **UX/UI:** Fully responsive design (Mobile/Tablet/Desktop) with optimized image loading and art direction.

Live demo: https://charles-ecommerce.netlify.app/
-----------------

![gif optimized ecommerce](https://github.com/user-attachments/assets/6588a101-8fb2-45b1-b134-9314d1e49e76)


Features
--------
- **Product Catalog:** Browse products by category (Headphones, Speakers, Earphones) with detailed product pages.
- **Shopping Cart:** Add/remove items, update quantities, and persistent cart state via LocalStorage.
- **Checkout Flow:** Multi-step checkout form with custom validation logic and order summary.
- **Responsive Design:** Adaptive layouts using Tailwind CSS grid/flexbox and `picture` elements for art direction.
- **Accessibility:** Semantic HTML structure and keyboard-navigable forms.

Selected Fixes & Technical Challenges
---------------------------------

### 1) Optimizing Image Loading & Art Direction
- **Problem:** High-resolution images caused layout shifts, and the "broken image" icon flashed briefly during navigation. Additionally, serving desktop images to mobile users wasted bandwidth.
- **Solution:** Implemented a `ResponsiveImage` component that encapsulates a skeleton loader state and smooth opacity transitions. Utilized the HTML `<picture>` element to serve distinct image assets for Mobile, Tablet, and Desktop viewports.
- **Result:** A seamless visual experience with zero layout shifts and optimized data usage across devices.

### 2) Ensuring Reliability with Testing
- **Problem:** As the application logic grew (especially the Cart reducer), manual testing became inefficient and error-prone.
- **Solution:** Configured a **Vitest** environment with JSDOM. Wrote integration tests for `CartContext` to verify adding/removing items and calculating totals, and unit tests for UI components like `QuantitySelector` and `CheckoutForm`.
- **Result:** Confidence in refactoring and ensuring no regressions in core business logic.

Quick start (local)
-------------------
1. Install dependencies

```powershell
npm ci
```

2. Run dev server

```powershell
npm run dev
```

3. Run tests

```powershell
npm run test
```

Contributing
------------
This is a personal project. Feedback is welcome!
