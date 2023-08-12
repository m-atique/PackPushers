"use client"

import React, { useState } from "react";
import "../globals.css";
import { Inter } from "next/font/google";
import { settings } from "@/config/settings";
import { Sidebar } from "@/components/sidebar";
import { MainNav } from "@/components/users/components/main-nav";
import { Search } from "@/components/users/components/search";
import { UserNav } from "@/components/users/components/user-nav";
import { ModeToggle } from "@/components/landing/mode-toggle";
import TeamSwitcher from "@/components/users/components/team-switcher";
import { Transition } from "@headlessui/react";
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // ... (metadata configuration)
};

interface RootLayoutProps {
  children: React.ReactNode;
  isDashboardPage?: boolean;
}

export default function DashboardLayout({ children, isDashboardPage }: RootLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className={`${inter.className} flex min-h-screen bg-background text-primary`}>
      <div className="flex flex-grow">
        {isDashboardPage ? (
          <Sidebar className="w-64 hidden md:block" /> // Set the width of the sidebar as needed
        ) : null}
        <div className="flex-grow">
          {/* desktop view */}
          <div className="border-b p-2 hidden md:block">
            <div className="flex h-16 items-center">
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
          {/* ------------------------Mobile  */}
          <div>

            <div className="flex items-center justify-between p-2 h-17  md:hidden">
              {/* ====user toggler and menu */}
              <UserNav />
              <div className="flex flex-row gap-4 px-2">
                {settings.themeToggleEnabled && (
                  <div className="">
                    <ModeToggle />
                  </div>
                )}
                {/* mobile menue button */}

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-600 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {/* Mobile Menu */}
            <Transition
              show={isOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {() => (
                <div className="md:hidden border-b-2" id="mobile-menu">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Search />
                    <TeamSwitcher />
                    <MainNav className="flex flex-col gap-2 justify-start items-start" />

                    {settings.themeToggleEnabled && (
                      <div className="hidden md:block">
                        <ModeToggle />
                      </div>
                    )}

                  </div>
                </div>
              )}
            </Transition>
          </div>

          <Sheet >
            <SheetTrigger>
              <button
                type="button"
                className="md:hidden bg-gray-900 w-6 h-6 items-center justify-center rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white m-2"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className='font-extrabold'>{'...'}</span></button>
            </SheetTrigger>
               <SheetContent side={'left'}>
            <ScrollArea className="h-screen">
               {isDashboardPage ? (
                  <Sidebar className="w-60 " /> // Set the width of the sidebar as needed
                ) : null}
            </ScrollArea>
              </SheetContent> 
             </Sheet>
          <div className="flex flex-row  p-1">

            <main className=" md:p-8">{children}</main>
          </div>
        </div>

      </div>


    </div>

  );
}
