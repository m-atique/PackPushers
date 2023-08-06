import "../globals.css"
import { siteConfig } from "@/config/site"
import { Inter } from "next/font/google"
import { settings } from "@/config/settings"
import { ThemeProvider } from "@/components/landing/theme-provider"
import { Sidebar } from "@/components/sidebar"
import TeamSwitcher from "@/components/admin/components/team-switcher"
import { MainNav } from "@/components/users/components/main-nav"
import { Search } from "@/components/users/components/search"
import { UserNav } from "@/components/users/components/user-nav"
import { ModeToggle } from "@/components/landing/mode-toggle"

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
  children: React.ReactNode
}

export default function DashboardLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-background text-primary`}
      >
        {settings.themeToggleEnabled ? (
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

<div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>

            {settings.themeToggleEnabled && (
            <div className="hidden md:block">
              <ModeToggle />
            </div>
          )}
          
          </div>
        </div>
            
    <div className="flex flex-grow">
        <Sidebar />
        <main>{children}</main>
      </div>
           
          </ThemeProvider>
        ) : (
          <ThemeProvider attribute="class" forcedTheme="light" enableSystem>
           
          </ThemeProvider>
        )}
      </body>
    </html>
  )
}