import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ModernSidebar from '@/components/layout/ModernSidebar';
import MobileMenu from '@/components/layout/MobileMenu';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Razeen Iqbal - Portfolio",
  description: "Data Engineer & AI Specialist. Explore my projects, skills, and achievements in data engineering and artificial intelligence.",
  keywords: ["Razeen Iqbal", "Data Engineer", "AI Specialist", "Portfolio", "Machine Learning", "Data Science"],
  authors: [{ name: "Razeen Iqbal" }],
  openGraph: {
    title: "Razeen Iqbal - Portfolio",
    description: "Data Engineer & AI Specialist portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ModernSidebar />
        <MobileMenu />
        <main className="min-h-screen bg-primary-50 dark:bg-primary-950">
          <div className="pt-16 lg:pt-0 lg:max-w-3xl lg:mx-auto lg:translate-x-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
