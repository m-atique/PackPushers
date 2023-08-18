import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Contact, DollarSign, Globe, List, Plus, Settings, ShipIcon, User,BarChart4,PackageOpen, UsersIcon,ListTodo, KeySquare, AtSign, StrikethroughIcon, Sailboat, MapPin, History, Star, Vegan, ListChecks, CheckCheck,CreditCard} from "lucide-react"
import { DashboardIcon } from "@radix-ui/react-icons"
import { Card } from "@/components/ui/card"


interface CustomerMenuProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function CustomerMenu({ className }: CustomerMenuProps) {
  return (
    <div className={cn("pb-12", "w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            DashBoard
          </h2>
          <div className="space-y-1">

          <Link href="/users/admin/dashboard" prefetch>
            <Button variant="secondary" className="w-full justify-start">
              <PackageOpen className="mr-2 h-4 w-4 mb-1"/>
              Welcome To Package Pusher
            </Button>
          </Link>

          <Link href="/users/admin/shipment" prefetch>
            <Button variant="ghost" className="w-full justify-start">
             <BarChart4 className="mr-2 h-4 w-4"/>
              Recent Activities Overview
            </Button>
            </Link>
            <Link href="/users/admin/customers" prefetch>
            <Button variant="ghost" className="w-full justify-start">
              <ListTodo className="mr-2 h-4 w-4" />
              Pending Deliveries
            </Button>

            </Link>
            <Link href="/users/admin/contacts" prefetch>
            <Button variant="ghost" className="w-full justify-start">
              <DollarSign  className="mr-2 h-4 w-4"/>
              Account Balance
            </Button>
            </Link>
          </div>
        </div>
{/* =====================Profile */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Profile
          </h2>
          <div className="space-y-1">
          <Link href="/users/customer/profile" prefetch>
            <Button variant="ghost" className="w-full justify-start">
             <User className="mr-2 h-4 w-4"/>
              EditProfile
            </Button>
            </Link>

            <Link href="/users/cutomer/changePassward" prefetch>
            <Button variant="ghost" className="w-full justify-start">
              <KeySquare className="mr-2 h-4 w-4"/>
              Change Passward
            </Button>
            </Link>

            <Link href="/users/cutomer/verifyEmail" prefetch>
            
            <Button variant="ghost" className="w-full justify-start">
              <AtSign className="mr-2 h-4 w-4"/>
              Verify Email
            </Button>
            </Link>
          </div>
        </div>
{/* ==============Address */}
<div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Address
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
            <Sailboat className="mr-2 h-4 w-4"/>
              Add/Update Shipment Address
            </Button>
            <Button variant="ghost" className="w-full justify-start">
            <MapPin className="mr-2 h-4 w-4"/>
              View Saved Addresses
            </Button>
          </div>
        </div>
{/* =====================Delivery History */}
<div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Payment Method
          </h2>
          <div className="space-y-1">
          <Link href="/users/customer/profile" prefetch>
            <Button variant="ghost" className="w-full justify-start">
             <CreditCard className="mr-2 h-4 w-4"/>
             Add/update card
            </Button>
            </Link>

            <Link href="/users/cutomer/changePassward" prefetch>
            <Button variant="ghost" className="w-full justify-start">
              <StrikethroughIcon className="mr-2 h-4 w-4"/>
             Connect Strip Account
            </Button>
            </Link>

          </div>
        </div>
        
{/* =====================Delivery History */}
<div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Delivery History
          </h2>
          <div className="space-y-1">
          <Link href="/users/customer/profile" prefetch>
            <Button variant="ghost" className="w-full justify-start">
             <History className="mr-2 h-4 w-4"/>
              View Previous Deliveries
            </Button>
            </Link>

            <Link href="/users/cutomer/changePassward" prefetch>
            <Button variant="ghost" className="w-full justify-start">
              <Star className="mr-2 h-4 w-4"/>
             Leave Rating and Reviews
            </Button>
            </Link>

          </div>
        </div>
        
{/* =====================Make a Delivery */}
<div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Make a Delivery
          </h2>
          <div className="space-y-1">
          <Link href="/users/customer/profile" prefetch>
            <Button variant="ghost" className="w-full justify-start">
             <Vegan className="mr-2 h-4 w-4"/>
              Choose Package Farwarder
            </Button>
            </Link>

            <Link href="/users/cutomer/changePassward" prefetch>
            <Button variant="ghost" className="w-full justify-start">
              <ListChecks className="mr-2 h-4 w-4"/>
              EnterDilvery Information
            </Button>
            </Link>

            <Link href="/users/cutomer/verifyEmail" prefetch>
            
            <Button variant="ghost" className="w-full justify-start">
              <CheckCheck className="mr-2 h-4 w-4"/>
              Confirm and Pay
            </Button>
            </Link>
          </div>
        </div>

{/* ==========================support  */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Support
          </h2>
          <div className="space-y-1">
          <Link href="/users/customer/contactSupport" prefetch>

            <Button variant="ghost" className="w-full justify-start">

              <Settings className="mr-2 h-4 w-4"/> Profile Settings      
            </Button>
            </Link>

            <Button variant="ghost" className="w-full justify-start">
             <DollarSign className="mr-2 h-4 w-4"/>
              FAQs
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Globe className="mr-2 h-4 w-4"/>
            Log Out
            </Button>            
          </div>
        </div>

      </div>
    </div>
  )
}
