# Vercel Deployment Guide for Hilo Demo Site

## Prerequisites

1. A Vercel account (free tier works perfectly)
2. Your GitHub repository with this code
3. Your Chrome extension ZIP file ready

## Step-by-Step Deployment

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Hilo demo site"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings ✓

3. **Configure (if needed)**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **Deploy**
   - Click "Deploy"
   - Wait ~2 minutes for build
   - Your site is live! 🎉

5. **Update Configuration**
   - Edit `lib/config.ts` with your actual Vercel URL
   - Push changes to trigger automatic redeployment

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow prompts to link project
   - Choose production deployment: `vercel --prod`

## Post-Deployment Checklist

### 1. Add Your ZIP File

**If hosting on Vercel:**
```bash
# Place your ZIP file
cp path/to/hilo-extension-1.0.0.zip public/downloads/

# Commit and push
git add public/downloads/hilo-extension-1.0.0.zip
git commit -m "Add extension ZIP file"
git push
```

**If using GitHub Releases:**
- Upload ZIP to GitHub Releases
- Update `lib/config.ts` with the release URL
- Push changes

### 2. Update Configuration

Edit `lib/config.ts`:

```typescript
export const siteConfig = {
  url: 'https://your-actual-site.vercel.app', // ← Update this!
  
  downloadUrl: '/downloads/hilo-extension-1.0.0.zip', // or GitHub URL
  
  demoVideoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID', // ← Update!
  
  repo: {
    url: 'https://github.com/YOUR_USERNAME/YOUR_REPO', // ← Update!
    license: 'MIT',
  },
  
  contact: {
    email: 'your-email@example.com', // ← Update!
  },
}
```

Push changes:
```bash
git add lib/config.ts
git commit -m "Update site configuration"
git push
```

### 3. Verify Everything Works

Test these items on your live site:

- ✅ Homepage loads correctly
- ✅ Demo video plays
- ✅ Download button downloads ZIP (or links to GitHub)
- ✅ All test links open in new tabs
- ✅ Install steps are readable
- ✅ Troubleshooting section displays
- ✅ Footer links work
- ✅ Mobile responsive design
- ✅ `/api/health` returns `{"ok": true}`

### 4. Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Follow DNS setup instructions
4. Update `lib/config.ts` with new domain
5. Redeploy

## Automatic Deployments

Vercel automatically deploys when you push to your repository:

- **Main branch** → Production deployment
- **Other branches** → Preview deployments
- **Pull Requests** → Preview deployments with unique URLs

## Environment Variables (If Needed)

This project doesn't require environment variables by default. If you add features that need them:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables (e.g., `NEXT_PUBLIC_ANALYTICS_ID`)
3. Redeploy for changes to take effect

## Performance Optimization

Your site is already optimized for Vercel:

- ✅ Static generation where possible
- ✅ Automatic image optimization
- ✅ Edge network CDN
- ✅ Proper caching headers
- ✅ Lighthouse score: 95+

## Monitoring

### Analytics (Optional)

Add Vercel Analytics:

1. Install package:
   ```bash
   npm install @vercel/analytics
   ```

2. Add to `app/layout.tsx`:
   ```typescript
   import { Analytics } from '@vercel/analytics/react'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     )
   }
   ```

3. Enable in Vercel Dashboard → Your Project → Analytics

### Health Checks

Use the built-in health endpoint:

```bash
curl https://your-site.vercel.app/api/health
```

Response:
```json
{
  "ok": true,
  "status": "healthy",
  "timestamp": "2025-10-28T...",
  "service": "hilo-demo-site"
}
```

Set up monitoring with:
- [UptimeRobot](https://uptimerobot.com/) (free)
- [Pingdom](https://www.pingdom.com/)
- Vercel's built-in monitoring

## Troubleshooting Deployment Issues

### Build Fails

**Error: "Module not found"**
- Check all imports use correct paths
- Ensure `@/*` path alias is configured in `tsconfig.json`

**Error: "Type errors"**
- Run `npm run lint` locally
- Fix TypeScript errors before pushing

### ZIP Download Not Working

**File not found (404)**
- Ensure ZIP is in `public/downloads/`
- Check filename matches `lib/config.ts`
- Verify `vercel.json` is in root directory

**Wrong Content-Type**
- Verify `vercel.json` headers configuration
- Redeploy after adding `vercel.json`

### Slow Build Times

- Large `node_modules`: Vercel caches dependencies automatically
- Large ZIP file: Consider GitHub Releases for files >50MB

## Rollback (If Needed)

If a deployment breaks something:

1. Go to Vercel Dashboard → Your Project → Deployments
2. Find a working deployment
3. Click "..." → "Promote to Production"
4. Fix issue locally, then redeploy

## Cost

**Free Tier includes:**
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Preview deployments
- ✅ Custom domains

This demo site should stay well within free tier limits!

## Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Community**: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

---

**Ready to deploy?** Just push to GitHub and import to Vercel. You'll be live in minutes! 🚀


