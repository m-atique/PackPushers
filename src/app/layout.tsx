import "./globals.css"
import { siteConfig } from "@/config/site"
import { Inter } from "next/font/google"
import { settings } from "@/config/settings"
import Navbar from "@/components/landing/layout/navbar"
import { ThemeProvider } from "@/components/landing/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
    "shadcn/ui",
    "React Query",
    "Portfolio",
  ],
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  creator: siteConfig.author,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#cfe3f7ba" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url.base}/og.jpg`],
    creator: "@_rdev7",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

interface RootLayoutProps {
  children: React.ReactNode;
  isDashboardPage?: boolean; // Change to optional
}

export default function RootLayout({ children, isDashboardPage }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-background text-primary`}
      >
        {settings.themeToggleEnabled ? (
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {isDashboardPage && <Navbar />} {/* Render Navbar only for dashboard */}
            {children}
          </ThemeProvider>
        ) : (
          <ThemeProvider attribute="class" forcedTheme="light" enableSystem>
            {children}
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
