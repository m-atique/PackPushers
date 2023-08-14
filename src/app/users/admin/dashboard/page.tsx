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

export default function Dashboard() {
  return (
     
  <>
    <DashboardLayout isDashboardPage={true}>  

          {/* Main Content  flex-1 space-y-4 p-8 pt-6 */}
          <div className="col-span-4 p-8 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>          
            <Tabs defaultValue="overview" className="space-y-4">
             
              <TabsContent value="overview" className="space-y-4">
                
                <div className="grid gap-2  grid-cols-2 md:gap-5  sm:grid-cols-2 md:grid-cols-4">
                  {/* Card Component 1 */}
                  <Card className="h-fit sm:h-full">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 sm:p-5  p-2">
                      <CardTitle className="text-sm font-medium w-full">
                        Total Revenue
                      </CardTitle>
                      {/* SVG Icon */}
                    </CardHeader>
                    <CardContent className="sm:pt-0 sm:px-5p-1  w-full">
                      <div className=" text-md  sm:text-2xl font-bold">$45,231.89</div>
                      <p className="sm:text-xs text-[9px] text-muted-foreground w-full">
                        +20.1% from last month
                      </p>
                    </CardContent>
                  </Card>
                  {/* Card Component 2 */}
                  <Card className="h-fit sm:h-full">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 sm:p-5  p-2">
                      <CardTitle className="text-sm font-medium w-full">
                        Subscriptions 01
                      </CardTitle>
                      {/* SVG Icon */}
                      </CardHeader>
                    <CardContent className="sm:pt-0 sm:px-5p-1  w-full">
                      <div className=" text-md  sm:text-2xl font-bold">+465,70</div>
                      <p className="sm:text-xs text-[9px] text-muted-foreground w-full">
                        480.1% from last month
                      </p>
                    </CardContent>
                  </Card>

                    {/* Card Component 3 */}
                    <Card className="h-fit sm:h-full">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 sm:p-5  p-2">
                      <CardTitle className="text-sm font-medium w-full">
                        Subscription 2
                      </CardTitle>
                      {/* SVG Icon */}
                      </CardHeader>
                    <CardContent className="sm:pt-0 sm:px-5p-1  w-full">
                      <div className=" text-md  sm:text-2xl font-bold">+45,567</div>
                      <p className="sm:text-xs text-[9px] text-muted-foreground w-full">
                        +180.1% from last month
                      </p>
                    </CardContent>
                  </Card>

                    {/* Card Component 4 */}
                    <Card className="h-fit sm:h-full">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 sm:p-5  p-2">
                      <CardTitle className="text-sm font-medium w-full">
                        Subscription 3
                      </CardTitle>
                      {/* SVG Icon */}
                      </CardHeader>
                    <CardContent className="sm:pt-0 sm:px-5p-1  w-full">
                      <div className=" text-md  sm:text-2xl font-bold">+75,231</div>
                      <p className="sm:text-xs text-[9px] text-muted-foreground w-full">
                        +150.1% from last month
                      </p>
                    </CardContent>
                  </Card>
                  {/* More Card Components go here */}
                </div>

                {/* =========  Graphs ==========  */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Card Component 3 */}
                  <Card className="md:col-span-4">
                  <CardHeader className="w-4/5">
                      <CardTitle>Package Sale Graph</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <Overview />
                    </CardContent>
                  </Card>
                  {/* Card Component 4 */}
                  <Card className="w-full md:col-span-3">
                    <CardHeader className="w-4/5">
                      <CardTitle>Recent Sales</CardTitle>
                      <CardDescription>
                        You made 265 sales this month.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentSales />
                    </CardContent>
                  </Card>
                  {/* More Card Components go here */}
                </div>
              </TabsContent>
            </Tabs>

            {/* <DashboardTable/> */}
          </div>
               
      </DashboardLayout>

    </>
  )
}
