# 🚀 Quick Setup Guide

## Getting Started

Your retro portfolio is ready! The development server is running at:
**http://localhost:3001**

## ✅ What's Already Done

- ✅ Next.js 16.1 with App Router configured
- ✅ Tailwind CSS with retro 90s color palette
- ✅ Global retro styles (fonts, animations, effects)
- ✅ Complete navigation and footer
- ✅ All 7 pages fully implemented
- ✅ Retro UI component library
- ✅ Responsive design for all devices

## 📄 Pages Overview

1. **Home** (`/`) - Pixel avatar, skills showcase, terminal-style intro
2. **About** (`/about`) - Biography, work experience, certifications
3. **Projects** (`/projects`) - Polaroid-style project cards
4. **Achievements** (`/achievements`) - Trophy case with awards
5. **Dashboard** (`/dashboard`) - Dev stats (GitHub, Wakatime, Codewars)
6. **Chat Room** (`/chat`) - IRC-style messaging interface
7. **Contact** (`/contact`) - Vintage postcard contact form

## 🎨 Customization

### Update Your Information

Edit `lib/data.ts`:

```typescript
export const personalInfo = {
  name: 'Your Name',
  role: 'Your Role',
  email: 'your@email.com',
  phone: 'your-phone',
  location: 'Your Location',
  github: 'https://github.com/username',
  linkedin: 'https://linkedin.com/in/username',
  // ... more fields
};
```

### Add Projects

In `lib/data.ts`, update the `projects` array:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project',
    description: 'Description',
    tech: ['Python', 'React'],
    github: 'https://github.com/...',
    demo: 'https://...',
  },
  // Add more projects
];
```

### Modify Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  cream: "#FFF8E7",          // Change background
  "burnt-orange": "#E07A5F", // Change primary
  // ... more colors
}
```

## 🔌 API Integration (Optional)

### GitHub API (for Dashboard)

1. Go to https://github.com/settings/tokens
2. Generate a new token with `repo` and `user` scopes
3. Create `.env.local`:
   ```
   GITHUB_TOKEN=your_github_token_here
   ```
4. Update `app/dashboard/page.tsx` to fetch real data

### Firebase (for Chat Room)

1. Create project at https://console.firebase.google.com
2. Enable Realtime Database
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_DATABASE_URL=your_database_url
   ```
4. Update `app/chat/page.tsx` with Firebase logic

### Supabase (for Projects)

1. Create project at https://app.supabase.com
2. Create `projects` table
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

## 📦 Building for Production

```bash
# Build
npm run build

# Test production build
npm run start

# Deploy to Vercel (recommended)
npm install -g vercel
vercel
```

## 🎯 Next Steps

1. **Customize Content**: Update `lib/data.ts` with your info
2. **Add Images**: Place images in `public/` folder
3. **Connect APIs**: Set up GitHub, Firebase, Supabase (optional)
4. **Deploy**: Push to GitHub and deploy to Vercel
5. **Test**: Check all pages on mobile and desktop

## 🐛 Common Issues

### Port 3000 already in use
The dev server automatically uses port 3001 if 3000 is busy.

### Fonts not loading
The Google Fonts are imported via CDN in `globals.css`. Check internet connection.

### Tailwind styles not applying
Run `npm run dev` to restart the dev server.

## 📚 File Structure Reference

```
Key Files to Edit:
- lib/data.ts          → Your content (EDIT THIS FIRST!)
- app/page.tsx         → Homepage
- app/*/page.tsx       → Other pages
- components/ui/*      → UI components
- tailwind.config.ts   → Colors & theme
- globals.css          → Global styles
```

## 🎨 Retro Elements Included

- ✅ Pixel fonts (Press Start 2P, VT323)
- ✅ Retro color palette
- ✅ Chunky borders (3-5px)
- ✅ Polaroid-style frames
- ✅ Custom retro cursor
- ✅ Scanline effects
- ✅ Typewriter animations
- ✅ Glitch effects
- ✅ Wobble animations
- ✅ ASCII art
- ✅ Web ring buttons
- ✅ Visitor counter widget

## 💡 Tips

- The portfolio is fully functional without API integration
- All forms work in demo mode
- Chat stores messages locally
- Dashboard shows mock data by default
- Mobile responsive out of the box

## 🆘 Need Help?

- Check the main README.md
- Review component files in `components/`
- Look at example data in `lib/data.ts`

---

**Ready to launch!** 🚀

Just customize your content in `lib/data.ts` and you're good to go!
