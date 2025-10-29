# Hilo Demo Site

A production-ready demo site for the **Hilo** Chrome extension, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Optimized for fast deployment on Vercel.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or compatible runtime
- npm, yarn, or pnpm package manager

### Local Development

1. **Clone and install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000) to see the site.

## 📝 Configuration

All site content and settings are centralized in **`lib/config.ts`** for easy editing.

### Key Configuration Options

#### 1. Download URL (ZIP hosting)

Choose one of two options:

**Option A: Host on Vercel (Recommended for quick setup)**

1. Place your ZIP file at: `public/downloads/hilo-extension-1.0.0.zip`
2. In `lib/config.ts`, use:
   ```typescript
   downloadUrl: '/downloads/hilo-extension-1.0.0.zip'
   ```

**Option B: Use GitHub Releases**

1. Upload your ZIP to GitHub Releases
2. In `lib/config.ts`, update:
   ```typescript
   downloadUrl: 'https://github.com/YOUR_USERNAME/YOUR_REPO/releases/download/v1.0.0/hilo-extension-1.0.0.zip'
   ```

#### 2. Demo Video

Update the YouTube or Vimeo embed URL in `lib/config.ts`:

```typescript
demoVideoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
```

#### 3. Test Links

Edit the `testLinks` array in `lib/config.ts` to customize the article/YouTube links users can test with:

```typescript
testLinks: [
  {
    title: 'Your Article Title',
    url: 'https://example.com/article',
    type: 'Article',
  },
  // Add more links...
]
```

#### 4. Repository & Contact Info

Update these fields in `lib/config.ts`:

```typescript
repo: {
  url: 'https://github.com/YOUR_USERNAME/YOUR_REPO',
  license: 'MIT',
},
contact: {
  email: 'your-email@example.com',
}
```

#### 5. Site URL & Metadata

Update for proper SEO and social sharing:

```typescript
url: 'https://your-actual-domain.vercel.app'
```

## 🎨 Customization

### Styling

- **Tailwind Config**: Edit `tailwind.config.ts` to change colors, fonts, or spacing
- **Global Styles**: Modify `app/globals.css` for custom CSS utilities
- **Theme Colors**: Primary color scheme uses `primary-*` utility classes (default: blue)

### Components

All components are in the `components/` directory:

- `Hero.tsx` - Landing section with headline, video, and CTAs
- `About.tsx` - "What is Hilo?" section with feature cards
- `InstallSteps.tsx` - Step-by-step installation guide
- `TestLinks.tsx` - Curated test links for users
- `Troubleshooting.tsx` - Common issues and solutions
- `Footer.tsx` - Footer with "For Judges" section and links

### Adding Images

Place images in `public/images/` and reference them:

```typescript
<img src="/images/your-image.png" alt="Description" />
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

#### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO)

#### Manual Deploy

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to link your project

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Environment Variables

This project requires **no environment variables** by default. All configuration is in `lib/config.ts`.

### Build Verification

Test the production build locally:

```bash
npm run build
npm run start
```

## 📦 Project Structure

```
hilo-demo-site/
├── app/
│   ├── api/
│   │   └── health/          # Health check API route
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Main landing page
│   ├── globals.css          # Global styles & Tailwind
│   └── sitemap.ts           # Dynamic sitemap generation
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── InstallSteps.tsx
│   ├── TestLinks.tsx
│   ├── Troubleshooting.tsx
│   └── Footer.tsx
├── lib/
│   └── config.ts            # Centralized configuration
├── public/
│   ├── downloads/           # ZIP file hosting (optional)
│   ├── images/              # Screenshots and assets
│   └── robots.txt
├── vercel.json              # Vercel configuration
└── package.json
```

## 🔍 Features

### Core Features

- ✅ Single-page responsive design
- ✅ SEO optimized with metadata and OG tags
- ✅ Accessible (WCAG compliant)
- ✅ Dark/light theme support via Tailwind
- ✅ Keyboard navigable
- ✅ Mobile-first responsive design

### Technical Features

- ✅ Next.js 14 App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ ESLint + Prettier for code quality
- ✅ API health check endpoint (`/api/health`)
- ✅ Dynamic sitemap generation
- ✅ Optimized for Vercel deployment
- ✅ Proper caching headers for ZIP downloads

## 🛠️ Development Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Format code with Prettier
npm run format
```

## 📱 Testing

### Local Testing

1. Run `npm run dev`
2. Test all CTAs and links
3. Verify the download button works
4. Check responsive design on mobile/tablet
5. Test keyboard navigation (Tab, Enter, etc.)

### Pre-Deployment Checklist

- [ ] Update `lib/config.ts` with real values
- [ ] Replace demo video URL with actual video
- [ ] Update GitHub repo URLs
- [ ] Add actual ZIP file (if hosting on Vercel)
- [ ] Test download link
- [ ] Verify all external links open in new tabs
- [ ] Check metadata and OG tags
- [ ] Test on multiple devices/browsers
- [ ] Run `npm run build` successfully

## 🎯 For Judges

This section appears prominently in the footer and includes:

- **Version**: Current extension version
- **License**: Open source license (MIT)
- **Repository**: Direct link to source code
- **Testing Instructions**: Quick link to GitHub testing guide

## 🐛 Troubleshooting

### Build Errors

**"Module not found" errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
```bash
npm run lint
```

### Vercel Deployment Issues

**Build fails on Vercel:**
- Ensure all dependencies are in `package.json` (not devDependencies for production deps)
- Check build logs for specific errors
- Verify Next.js version compatibility

**ZIP download not working:**
- Ensure file is in `public/downloads/`
- Check `vercel.json` headers configuration
- Verify file size is under Vercel's limits

## 📄 License

MIT License - see repository for details.

## 🤝 Contributing

For hackathon judges: This site is designed for easy evaluation and testing. All configuration is centralized in `lib/config.ts` for quick edits.

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/YOUR_USERNAME/YOUR_REPO/issues)
- **Email**: Update in `lib/config.ts`

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS.


