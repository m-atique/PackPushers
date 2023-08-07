import { Metadata } from "next"
import Image from "next/image"

import DashboardLayout from "../../dashboardLayout"
import { DashboardTable } from "@/components/users/components/dashboardTable"

export const metadata: Metadata = {
  title: "PackPushers",
  description: "Track your packges",
}

export default function Dashboard() {
  return (
     
  <>
    <DashboardLayout isDashboardPage={true}>  

          {/* Main Content  flex-1 space-y-4 p-8 pt-6 */}
          <div className="col-span-4 p-8 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Users List</h2> 

            <DashboardTable/>
          </div>
               
      </DashboardLayout>

    </>
  )
}
