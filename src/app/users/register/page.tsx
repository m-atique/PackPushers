import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { UserAuthForm } from "@/app/users/register/user-auth-form"
import Footer from "@/components/landing/layout/footer"
import Navbar from "@/components/landing/layout/navbar"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>
    <Navbar/>
      <div className="container h-[800px] md:grid md:place-items-center">
       
        <div className="lg:p-8">
          <div className="mx-auto flex flex-col items-center w-full max-w-[350px] space-y-6">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />

            <div className="flex justify-center mt-6 space-x-2 text-xs">
              <a rel="noopener noreferrer" href="#" className="dark:text-gray-400">Forgot Password?</a>
              <span className="dark:text-gray-400">/</span>
              <a rel="noopener noreferrer" href="/users/login" className="dark:text-gray-400">Sign In</a>
            </div>

            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}
