import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <div className="hidden md:flex md:gap-4">
      <Link
        href="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/customers"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        href="/products"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
      </div>

      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 md:hidden ">
      <Link
        href="/dashboard"
        className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Overview
      </Link>
      <Link
        href="/customers"
        className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Customers
      </Link>
      <Link
        href="/examples/dashboard"
        className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Products
      </Link>
      <Link
        href="/products"
        className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Settings
      </Link>
                </div>
              
    </nav>
  )
}
