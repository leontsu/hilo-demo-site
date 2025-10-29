# Contributing to Hilo Demo Site

Thank you for your interest in the Hilo demo site! This guide will help you understand the project structure and make changes.

## Quick Overview

This is a **Next.js 14** demo site showcasing the Hilo Chrome extension. It's designed to be:

- Easy to customize via `lib/config.ts`
- Fast to deploy on Vercel
- Accessible and SEO-friendly
- Simple for judges and users to navigate

## Getting Started

### 1. Prerequisites

- Node.js 18+ (or compatible runtime)
- npm, yarn, or pnpm
- Basic knowledge of React/Next.js

### 2. Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd hilo-demo-site

# Install dependencies
npm install

# Start development server
npm run dev
```

### 3. Project Structure

```
hilo-demo-site/
├── app/                      # Next.js App Router
│   ├── api/health/          # Health check endpoint
│   ├── layout.tsx           # Root layout (metadata, fonts)
│   ├── page.tsx             # Home page (imports all components)
│   ├── globals.css          # Global styles + Tailwind utilities
│   └── sitemap.ts           # Dynamic sitemap
├── components/              # React components
│   ├── Hero.tsx            # Landing hero section
│   ├── About.tsx           # "What is Hilo?" section
│   ├── InstallSteps.tsx    # Step-by-step guide
│   ├── TestLinks.tsx       # Test article/video links
│   ├── Troubleshooting.tsx # Common issues
│   └── Footer.tsx          # Footer with "For Judges"
├── lib/
│   └── config.ts           # **MAIN CONFIG FILE** ⭐
├── public/
│   ├── downloads/          # ZIP hosting (optional)
│   └── images/             # Screenshots and assets
├── tailwind.config.ts      # Tailwind theme
├── vercel.json             # Vercel headers for ZIP
└── package.json            # Dependencies and scripts
```

## Making Changes

### Updating Content

**All content is centralized in `lib/config.ts`.**

Example changes:

```typescript
// lib/config.ts

// Change the download URL
downloadUrl: '/downloads/hilo-extension-1.0.0.zip',

// Update test links
testLinks: [
  {
    title: 'Your Custom Link',
    url: 'https://example.com',
    type: 'Article',
  },
],

// Update repo info
repo: {
  url: 'https://github.com/your-username/your-repo',
  license: 'MIT',
},
```

### Styling Changes

**Colors:**

Edit `tailwind.config.ts` to change the primary color:

```typescript
colors: {
  primary: {
    // Change these values
    500: '#0ea5e9', // main color
    600: '#0284c7', // hover state
    // ...
  },
}
```

**Global Styles:**

Edit `app/globals.css` for custom utility classes:

```css
.btn-primary {
  @apply /* your styles */;
}
```

### Adding New Sections

1. Create a new component in `components/YourSection.tsx`
2. Import and add to `app/page.tsx`:

```typescript
import YourSection from '@/components/YourSection'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <YourSection /> {/* Add here */}
      <InstallSteps />
      {/* ... */}
    </>
  )
}
```

### Modifying Install Steps

Edit the `steps` array in `components/InstallSteps.tsx`:

```typescript
const steps = [
  'Your step 1',
  'Your step 2',
  // ...
]
```

### Changing Troubleshooting Issues

Edit the `issues` array in `components/Troubleshooting.tsx`:

```typescript
const issues = [
  {
    title: 'Your Issue Title',
    solution: 'Your solution description',
  },
  // ...
]
```

## Development Workflow

### 1. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 2. Make Changes

Edit files and see live updates (Hot Module Replacement enabled).

### 3. Test Your Changes

- Check all interactive elements (buttons, links)
- Test responsive design (mobile, tablet, desktop)
- Verify keyboard navigation (Tab, Enter)
- Test with screen readers if possible

### 4. Lint and Format

```bash
# Check for errors
npm run lint

# Format code
npm run format
```

### 5. Build for Production

```bash
npm run build
npm run start
```

Test the production build locally before deploying.

## Component Guidelines

### Accessibility

All components should be accessible:

- Use semantic HTML (`<button>`, `<nav>`, `<section>`)
- Include `aria-label` for icon buttons
- Ensure proper heading hierarchy (h1 → h2 → h3)
- Add `alt` text for images
- Use `rel="noopener noreferrer"` for external links

### Styling

- Use Tailwind utility classes (avoid custom CSS when possible)
- Follow the existing design system (spacing, colors, typography)
- Ensure responsive design with `sm:`, `md:`, `lg:` breakpoints
- Test dark mode if implementing

### Performance

- Use Next.js `<Image>` component for images
- Lazy load heavy content if needed
- Keep bundle sizes small
- Optimize fonts (already using `next/font`)

## Testing Checklist

Before submitting changes:

- [ ] Site builds without errors (`npm run build`)
- [ ] No TypeScript errors (`npm run lint`)
- [ ] All links work correctly
- [ ] Download button works
- [ ] Mobile responsive design
- [ ] Keyboard navigation works
- [ ] No console errors in browser
- [ ] Proper meta tags (check with browser dev tools)
- [ ] Fast page load (check Lighthouse score)

## Deployment

### To Vercel

```bash
# Push to GitHub
git add .
git commit -m "Your descriptive message"
git push

# Vercel auto-deploys on push (if connected)
# Or use Vercel CLI:
vercel --prod
```

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## Common Tasks

### Add a New Test Link

```typescript
// lib/config.ts
testLinks: [
  // ... existing links
  {
    title: 'Your New Link',
    url: 'https://example.com/article',
    type: 'Article', // or 'YouTube', 'Video', etc.
  },
]
```

### Change the Hero Headline

```typescript
// lib/config.ts
title: 'Your New Headline',
description: 'Your new description',
```

### Update Contact Email

```typescript
// lib/config.ts
contact: {
  email: 'newemail@example.com',
}
```

### Replace Demo Video

```typescript
// lib/config.ts
demoVideoUrl: 'https://www.youtube.com/embed/YOUR_NEW_VIDEO_ID',
```

## Getting Help

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind Docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **TypeScript Docs**: [typescriptlang.org/docs](https://www.typescriptlang.org/docs)

## Code Style

This project uses:

- **ESLint** for code quality
- **Prettier** for formatting
- **TypeScript** for type safety

Configuration:
- `.eslintrc.json` - ESLint rules
- `.prettierrc` - Prettier settings
- `tsconfig.json` - TypeScript config

Follow these automatically:

```bash
npm run lint    # Check for issues
npm run format  # Auto-format code
```

## Questions?

Open an issue on GitHub or contact the team via the email in `lib/config.ts`.

---

Happy coding! 🚀


