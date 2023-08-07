import { Metadata } from "next"
import Image from "next/image"
import {
  Tabs,
  TabsContent,
} from "@/components/ui/tabs"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardLayout from "../../dashboardLayout"
import { Overview } from "@/components/users/components/overview"
import { RecentSales } from "@/components/users/components/recent-sales"
import { DashboardTable } from "@/components/users/components/dashboardTable"

export const metadata: Metadata = {
  title: "PackPushers",
  description: "Track your packges",
}

export default function UserPanel() {
  return (
     
  <>
    <DashboardLayout isDashboardPage={true}>  

          {/* Main Content  flex-1 space-y-4 p-8 pt-6 */}
          <div className="col-span-4 p-8 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Users Panel</h2>          
            <Tabs defaultValue="overview" className="space-y-4">
             
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {/* Card Component 1 */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Admin
                      </CardTitle>
                      {/* SVG Icon */}
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">105</div>
                      <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                      </p>
                    </CardContent>
                  </Card>
                  {/* Card Component 2 */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Agents
                      </CardTitle>
                      {/* SVG Icon */}
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2350</div>
                      <p className="text-xs text-muted-foreground">
                        +180 added from last month
                      </p>
                    </CardContent>
                  </Card>

                    {/* Card Component 3 */}
                    <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Customers
                      </CardTitle>
                      {/* SVG Icon */}
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+2350</div>
                      <p className="text-xs text-muted-foreground">
                        1900 from last six month
                      </p>
                    </CardContent>
                  </Card>

                    {/* Card Component 4 */}
                    <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Subscriptions
                      </CardTitle>
                      {/* SVG Icon */}
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+2350</div>
                      <p className="text-xs text-muted-foreground">
                        +180.1% from last month
                      </p>
                    </CardContent>
                  </Card>
                  {/* More Card Components go here */}
                </div>
               
              </TabsContent>
            </Tabs>

            <DashboardTable/>
          </div>
               
      </DashboardLayout>

    </>
  )
}
