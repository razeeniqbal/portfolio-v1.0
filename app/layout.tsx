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
        <MobileMenu />

        {/* Desktop: Connected Floating Window */}
        <div className="hidden lg:flex min-h-screen items-center justify-center p-8">
          <div className="flex bg-primary-50/80 dark:bg-primary-950/80 backdrop-blur-xl rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh]">
            {/* Sidebar */}
            <ModernSidebar />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto overflow-x-hidden rounded-r-2xl">
              {children}
            </main>
          </div>
        </div>

        {/* Mobile: Original Layout */}
        <main className="lg:hidden min-h-screen pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
