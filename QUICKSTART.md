# 🚀 Quick Start Guide

Get the Hilo demo site running in 5 minutes!

## 1️⃣ Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

## 2️⃣ Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## 3️⃣ Customize Your Site

Edit `lib/config.ts` to update:

- Download URL (GitHub or `/public/downloads/`)
- Demo video URL
- Test links
- Repository info
- Contact email

## 4️⃣ Add Your ZIP File (Optional)

**If hosting on Vercel:**

Place your ZIP file at:
```
public/downloads/hilo-extension-1.0.0.zip
```

**If using GitHub Releases:**

Just update the `downloadUrl` in `lib/config.ts`

## 5️⃣ Deploy to Vercel

### One-Click Deploy

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Click "Deploy"

Done! ✅

### Or use Vercel CLI

```bash
npm i -g vercel
vercel
```

## 📝 Key Files to Edit

| File | Purpose |
|------|---------|
| `lib/config.ts` | All site content and links |
| `tailwind.config.ts` | Colors and theme |
| `app/globals.css` | Custom styles |
| `components/*.tsx` | Individual sections |

## 🎨 Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#YOUR_COLOR',
    600: '#YOUR_HOVER_COLOR',
  },
}
```

## 📦 Project Structure

```
hilo-demo-site/
├── lib/config.ts          ← Edit this first!
├── app/
│   ├── page.tsx          ← Main landing page
│   └── layout.tsx        ← SEO metadata
├── components/           ← UI sections
└── public/
    └── downloads/        ← Place ZIP here (optional)
```

## ✅ Pre-Deployment Checklist

- [ ] Update `lib/config.ts` with real values
- [ ] Add your demo video URL
- [ ] Update GitHub repo URLs
- [ ] Add ZIP file (if hosting on Vercel)
- [ ] Test locally: `npm run build && npm start`
- [ ] Verify all links work

## 🔧 Troubleshooting

**Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Need help?**
- Check `README.md` for full documentation
- Check `DEPLOYMENT_GUIDE.md` for Vercel setup
- Check `CONTRIBUTING.md` for development guide

## 📚 Additional Resources

- [Full README](./README.md)
- [Deployment Guide](./DEPLOYMENT_GUIDE.md)
- [Contributing Guide](./CONTRIBUTING.md)

---

**Need more help?** Open an issue or check the comprehensive README.md

Happy deploying! 🎉


