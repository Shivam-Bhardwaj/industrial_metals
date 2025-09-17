# Industrial Metal Service Marketing Site

This repository contains a marketing website for Industrial Metal Service implemented with Next.js 14 (App Router). It is designed as a faithful, modern recreation of the industrialmetalservice.com experience, optimized for deployment on Vercel.

## Tech Stack

- **Next.js 14** with the App Router
- **TypeScript** for type safety
- **React Server Components** for fast page loads
- **CSS** modules via a single `globals.css` file for consistent styling

## Getting Started

1. Install dependencies (requires Node.js 18+):

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

   The site will be available at [http://localhost:3000](http://localhost:3000).

3. Create an optimized production build:

   ```bash
   npm run build
   npm run start
   ```

## Deploying to Vercel

1. Create a new project in the [Vercel dashboard](https://vercel.com/new) and import this repository.
2. Use the default Next.js build settings:
   - **Build Command:** `npm run build`
   - **Install Command:** `npm install`
   - **Output Directory:** `.next`
3. Set the `NODE_VERSION` project setting to `18` or higher.
4. Deploy. Vercel will automatically provision preview and production environments.

## Customization

- Content (inventory items, services, industries, testimonials, etc.) is centralized in [`app/data.ts`](./app/data.ts).
- Global styles live in [`app/globals.css`](./app/globals.css).
- Shared layout components such as the navigation and footer are located in [`app/components`](./app/components).

## License

This project is provided for demonstration purposes. Replace the placeholder copy with your official brand content before launching to production.
