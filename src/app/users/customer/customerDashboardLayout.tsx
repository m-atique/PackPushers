"use client"

import React, { useState,useEffect } from "react";
import "../../globals.css"
import { Inter } from "next/font/google";
import { settings } from "@/config/settings";
import { UserNav } from "@/components/users/components/user-nav";
import { ModeToggle } from "@/components/landing/mode-toggle";
import { ScrollArea ,ScrollBar} from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetTrigger,
  SheetContent,

} from '@/components/ui/sheet'
import { CustomerMenu } from "@/components/users/components/customers/customerMenu.tsx/page";

import axios from 'axios';
import Cookies from 'universal-cookie';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // ... (metadata configuration)
};

interface RootLayoutProps {
  children: React.ReactNode;
  isDashboardPage?: boolean;
}

export default function CustomerDashboardLayout({ children, isDashboardPage }: RootLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState('Customer');

const cookies = new Cookies();

const [IsUser, setIsUser] = React.useState<boolean>(false)
const [UserData, setUserData] = React.useState<boolean>({})

useEffect(() => {
  const token = (cookies.get('usertoken') == undefined) ? 'no' : cookies.get('usertoken');
    axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/verify`,{token:token }).then((res) => {
      setIsUser(res.data.user);
      if (!res.data.user){ 
        window.location.href ='/users/login';
      }
       });

    axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/getuser`,{token:token }).then((res) => {
      if (res.data.user.role == 'agent') {
        window.location.href = '/agent/dashboard'
      }
      if (res.data.user.role == 'admin') {
        window.location.href = '/admin/dashboard'
      }
      setUserData(res.data.user);

       });
      if (cookies.get('usertoken') == undefined) {
         setIsUser(false)
      }
  }, []);

 

  return (
    <div className={`${inter.className} flex min-h-screen bg-background  text-primary `}>
      <div className="flex flex-grow ">
        {isDashboardPage ? (
          <CustomerMenu className="w-80 hidden md:block" UserData={UserData} /> // Set the width of the sidebar as needed
        ) : null}
        <div className="flex-grow ">
          {/* desktop view */}
          <div className="border-b p-2 hidden md:block">
            <div className="flex h-16 items-center">
             
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
           Hello <span className="pl-2">{currentUser}</span>
          </h2>
              <div className="ml-auto flex items-center space-x-4 px-2">
              
                <UserNav UserData={UserData}/>
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

            <div className="flex items-center justify-between  p-2 h-17  md:hidden">
              {/* ====user toggler and menu */}
              <UserNav UserData={UserData}/>
              <div className="flex flex-row gap-4 px-2">
                {settings.themeToggleEnabled && (
                  <div className="">
                    <ModeToggle />
                  </div>
                )}
                {/* mobile menue button */}
{/* this can be used in case to open sub menu for users  */}
                {/* <button
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
                </button> */}
              </div>
            </div>
            {/* Mobile Menu */}
{/* this can be used in case of any sub menu for users  */}
            {/* <Transition
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
                      {settings.themeToggleEnabled && (
                      <div className="hidden md:block">
                        <ModeToggle />
                      </div>
                    )}

                  </div>
                </div>
              )}
            </Transition> */}
          </div>
          <div className="flex flex-row gap-10 pb-2 mt-2 border-b md:border-b-0 ">
          <Sheet >
            <SheetTrigger>
              <button
                type="button"
                className="bg-slate-700 inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ml-3 md:hidden"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {/* <span className='font-extrabold'>{'...'}</span> */}
                    {<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-panel-right-open"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="15" x2="15" y1="3" y2="21"/><path d="m10 15-3-3 3-3"/></svg>}

                </button>
            </SheetTrigger>
               <SheetContent side={'left'}>
            <ScrollArea className="h-screen">
               {isDashboardPage ? (
                  <CustomerMenu className="w-72 " /> // Set the width of the sidebar as needed
                ) : null}
            </ScrollArea>
      
              </SheetContent> 
             </Sheet>
             <h2 className="text-3xl font-bold tracking-tight  md:mt-5">Dashboard</h2> 
             </div>
              <ScrollArea className="h-screen scroll-smooth md:hidden">
          <div className="flex flex-row  p-1 h-full">

            <main className=" md:p-8">{children}</main>
          </div>
          </ScrollArea>
          <div className="md:flex flex-row  p-1 h-full hidden">

<main className=" md:p-8">{children}</main>
</div>
        </div>

      </div>


    </div>

  );
}
