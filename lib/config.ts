/**
 * Hilo Demo Site Configuration
 * Edit these values to customize the site content
 */

export const siteConfig = {
  name: 'Hilo',
  title: 'Hilo — Adaptive Translator for the Real Web',
  description:
    'Perfect for English learners at any level. Adjust difficulty, take quizzes, and get summaries with CEFR levels (A1–C1).',
  url: 'https://hilo-demo.vercel.app', // Update with your actual domain
  
  // Choose one of the following:
  // Option 1: GitHub Releases (update with your repo)
  // downloadUrl: 'https://github.com/TODO_GH_USER/TODO_REPO/releases/download/v1.0.0/hilo-extension-1.0.0.zip',
  
  // Option 2: Host on Vercel (place ZIP in /public/downloads/)
  downloadUrl: '/downloads/hilo-main.zip',
  
  // Demo video (YouTube or Vimeo embed URL)
  demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',  // Replace with your actual demo video
  
  // Repository and project info
  repo: {
    url: 'https://github.com/leontsu/hilo',
    license: 'MIT',
  },
  
  version: '1.0.0',
  
  // Test links for users to try the extension
  testLinks: [
    {
      title: 'BBC News',
      url: 'https://www.bbc.com/news',
      type: 'Article',
    },
    {
      title: 'National Geographic',
      url: 'https://www.nationalgeographic.com',
      type: 'Article',
    },
    {
      title: 'The Guardian',
      url: 'https://www.theguardian.com',
      type: 'Article',
    },
  ],
  
  // Contact/social links
  contact: {
    email: 'leon.tsuboi@gmail.com', // Update with your contact 
  },
}

export type SiteConfig = typeof siteConfig


