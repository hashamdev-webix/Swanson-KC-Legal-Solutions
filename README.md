# Swanson KC Legal Solutions

A professional, SEO-friendly website for a Canadian law firm built with Next.js.

## Tech Stack

- **Next.js 15.5.18** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## Design System

### Classic Navy & Gold Theme

A traditional, prestigious law-firm aesthetic featuring:

**Color Palette:**

- **Navy** (primary): Deep navy-800 for brand elements, navy-600 for primary UI
- **Gold** (accent): Gold-500 for highlights and calls-to-action
- **Cream**: Soft off-white (#FAF8F3) for backgrounds

**Typography:**

- **Headings**: Playfair Display (serif) - elegant, traditional
- **Body**: Inter (sans-serif) - clean, readable

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Homepage (placeholder)
│   └── globals.css        # Global styles and Tailwind
├── components/
│   ├── layout/            # Header, Footer (to be built)
│   ├── ui/                # Reusable UI components (to be built)
│   └── sections/          # Page section components (to be built)
├── lib/
│   └── site-config.ts     # Central site configuration
└── types/
    └── index.ts           # Shared TypeScript types
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Site Configuration

All site-wide settings are centralized in `src/lib/site-config.ts`:

- Firm name and contact information
- Navigation menu items
- Practice areas (Corporate, Civil, Property, Immigration Law)

**Note:** Contact information currently uses placeholder values and should be updated with real data.

## Next Steps

This is the foundation setup. Future steps will include:

1. Building the Header and Footer components
2. Creating the full homepage with hero, services, and CTA sections
3. Building individual practice area pages
4. Adding the team and about pages
5. Implementing the contact form
6. Adding the insights/blog section

## License

Private project for Swanson KC Legal Solutions.
