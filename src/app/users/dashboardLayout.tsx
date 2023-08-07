import "../globals.css";
import { Inter } from "next/font/google";
import { settings } from "@/config/settings";
import { Sidebar } from "@/components/sidebar";
import { MainNav } from "@/components/users/components/main-nav";
import { Search } from "@/components/users/components/search";
import { UserNav } from "@/components/users/components/user-nav";
import { ModeToggle } from "@/components/landing/mode-toggle";
import TeamSwitcher from "@/components/users/components/team-switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // ... (metadata configuration)
};

interface RootLayoutProps {
  children: React.ReactNode;
  isDashboardPage?: boolean;
}

export default function DashboardLayout({ children, isDashboardPage }: RootLayoutProps) {
  return (
    <div className={`${inter.className} flex min-h-screen bg-background text-primary`}>
      <div className="flex flex-grow">
        {isDashboardPage ? (
          <Sidebar className="w-64" /> // Set the width of the sidebar as needed
        ) : null}
        <div className="flex-grow">
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
          <main className="p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
