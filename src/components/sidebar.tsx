import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Contact, DollarSign, Globe, List, Plus, Settings, ShipIcon, User, UsersIcon } from "lucide-react"
import { DashboardIcon } from "@radix-ui/react-icons"


interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", "w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">

          <Link href="/users/admin/dashboard" prefetch>
            <Button variant="secondary" className="w-full justify-start">
              <DashboardIcon className="mr-2 h-4 w-4"/>
              Dashboard
            </Button>
          </Link>

          <Link href="/users/admin/shipment" prefetch>
            <Button variant="ghost" className="w-full justify-start">
             <ShipIcon className="mr-2 h-4 w-4"/>
              Shipment
            </Button>
            </Link>
            <Link href="/users/admin/customers" prefetch>
            <Button variant="ghost" className="w-full justify-start">
              <UsersIcon className="mr-2 h-4 w-4" />
              Customers
            </Button>

            </Link>
            <Link href="/users/admin/contacts" prefetch>
            <Button variant="ghost" className="w-full justify-start">
              <Contact className="mr-2 h-4 w-4"/>
              Contacts
            </Button>
            </Link>
          </div>
        </div>

        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage Users
          </h2>
          <div className="space-y-1">
          <Link href="/users/admin/users-panel" prefetch>
            <Button variant="ghost" className="w-full justify-start">
             <UsersIcon className="mr-2 h-4 w-4"/>
              Users Control Panel
            </Button>
            </Link>

            <Link href="/users/admin/create-user" prefetch>
            <Button variant="ghost" className="w-full justify-start">
              <Plus className="mr-2 h-4 w-4"/>
              Create User
            </Button>
            </Link>

            <Link href="/users/admin/users-list" prefetch>
            
            <Button variant="ghost" className="w-full justify-start">
              <List className="mr-2 h-4 w-4"/>
              List of Users
            </Button>
            </Link>
          </div>
        </div>

        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Shipment
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M21 15V6" />
                <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M12 12H3" />
                <path d="M16 6H3" />
                <path d="M12 18H3" />
              </svg>
              Shipping Control Panel
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <circle cx="8" cy="18" r="4" />
                <path d="M12 18V2l7 4" />
              </svg>
              Create Shipment
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              List of Shipment
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                <circle cx="17" cy="7" r="5" />
              </svg>
              List of Payment
            </Button>
            
          </div>
        </div>

        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Settings
          </h2>
          <div className="space-y-1">
          <Link href="/users/admin/settings" prefetch>

            <Button variant="ghost" className="w-full justify-start">

              <Settings className="mr-2 h-4 w-4"/> Profile Settings      
            </Button>
            </Link>

            <Button variant="ghost" className="w-full justify-start">
             <DollarSign className="mr-2 h-4 w-4"/>
              Payment Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Globe className="mr-2 h-4 w-4"/>
             Site Settings
            </Button>

            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4"/>
              Users Settings
            </Button>
            
          </div>
        </div>

      </div>
    </div>
  )
}
