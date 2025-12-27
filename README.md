# 🎮 Retro Indie/90s Portfolio - Razeen Iqbal

A nostalgic, retro-themed portfolio website inspired by the indie/90s internet aesthetic. Built with Next.js 14+, TypeScript, and Tailwind CSS.

![Retro Portfolio Banner](https://img.shields.io/badge/Style-Retro%2090s-E07A5F?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 Retro Aesthetic Design
- **Color Palette**: Cream, Burnt Orange, Mustard Yellow, Olive Green
- **Typography**: Press Start 2P (pixel font), VT323 (terminal font), Courier New
- **Visual Elements**: Chunky borders, Polaroid frames, dithered textures, custom cursor, scanlines

### 📄 Pages

1. **Home** - Pixel art avatar, typewriter animation, skills showcase
2. **About** - Personal background, work experience, certifications
3. **Projects** - Portfolio showcase with Polaroid-style cards
4. **Achievements** - Trophy case with awards and milestones
5. **Dashboard** - Developer statistics (GitHub, Wakatime, Codewars)
6. **Chat Room** - IRC-style retro messaging interface
7. **Contact** - Vintage postcard-style contact form

### 🛠️ Tech Stack

- Next.js 16.1 with App Router
- TypeScript 5.9
- Tailwind CSS 4.1
- Framer Motion (animations)
- Zustand (state management)
- SWR (data fetching)
- Supabase, Firebase, Nodemailer (ready to integrate)

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_DATABASE_URL=your_firebase_database_url

# APIs
GITHUB_TOKEN=your_github_token
```

### Customize Content

Edit `lib/data.ts` to update your personal information, projects, skills, and achievements.

## 📁 Project Structure

```
retro-portfolio/
├── app/                  # Pages (home, about, projects, etc.)
├── components/
│   ├── layout/          # Nav and Footer
│   └── ui/              # Retro UI components
├── lib/
│   └── data.ts          # Portfolio content
├── types/               # TypeScript types
└── public/              # Static assets
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Cream | #FFF8E7 | Background |
| Burnt Orange | #E07A5F | Primary |
| Mustard Yellow | #F4A261 | Secondary |
| Olive Green | #81B29A | Success |
| Dark Brown | #4A3728 | Text |

## 🔌 API Integration

### GitHub API
1. Create token at [GitHub Settings](https://github.com/settings/tokens)
2. Add to `.env.local`: `GITHUB_TOKEN=your_token`
3. Update `app/dashboard/page.tsx`

### Firebase Chat
1. Create project at [Firebase Console](https://console.firebase.google.com)
2. Enable Realtime Database
3. Add config to `.env.local`

## 🎯 Easter Eggs

- Custom retro cursor
- Visitor counter widget
- "Best viewed in Netscape Navigator" joke
- ASCII art footer
- Web ring buttons

## 📱 Responsive Design

Fully responsive with optimized layouts for mobile, tablet, and desktop.

## 🚧 Future Enhancements

- [ ] Konami code easter egg
- [ ] Background MIDI music toggle
- [ ] Real-time chat with Firebase
- [ ] Live API integrations
- [ ] Blog with MDX

## 👤 Author

**Razeen Iqbal**
- Email: razeeniqbal98@gmail.com
- GitHub: [@razeeniqbal](https://github.com/razeeniqbal)
- LinkedIn: [@razeeniqbal](https://linkedin.com/in/razeeniqbal)

## 📄 License

MIT License

---

<div align="center">
  <p>Made with ❤️ and lots of coffee</p>
  <p><strong>© 2025 Razeen Iqbal • Best viewed in Netscape Navigator 😄</strong></p>
</div>
