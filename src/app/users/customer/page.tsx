// "use client"
import { Metadata } from "next"
import Image from "next/image"

import {
  Tabs,
  TabsContent,
 
} from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import CustomerDashboardLayout from "./customerDashboardLayout"
import { Overview } from "@/components/users/components/overview"
import { RecentSales } from "@/components/users/components/recent-sales"
import { DashboardTable } from "@/components/users/components/dashboardTable"
import { CustomerMenu } from "@/components/users/components/customers/customerMenu.tsx/page"

export const metadata: Metadata = {
  title: "PackPushers",
  description: "Track your packges",
}

export default function UserDashb() {
  return (
    <>
    <CustomerDashboardLayout isDashboardPage={true}>  

          {/* Main Content  flex-1 space-y-4 p-8 pt-6 */}
                 
          <div className="col-span-4  pt-6">
                    
            <Tabs defaultValue="overview" className="space-y-4">
             
              <TabsContent value="overview" className="space-y-4">
                 {/* ===========Account Balance */}
                 <div className="grid gap-3 grid-cols-2 md:gap-3 sm:grid-cols-2 md:grid-cols-4 px-6 ">
              <Card className="h-fit sm:h-full col-span-4  sm:col-span-2 ml-4 mr-10">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 sm:p-5  p-2">
                      <CardTitle className="text-md font-bold flex flex-row justify-between w-full">
                        <div>
                        Account Balance
                        </div>
                        <div>
                          $457623
                        </div>
                      </CardTitle>
                      {/* SVG Icon */}
                      </CardHeader>
                  </Card>
                  </div>
                
                <div className="grid gap-3 grid-cols-2 md:gap-5  sm:grid-cols-2 md:grid-cols-4 p-6 ">
               
                  {/* Card Component 1 */}
                  <Card className="h-fit sm:h-full">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 sm:p-5  p-2">
                      <CardTitle className="text-sm font-medium w-full">
                        Recent Recieved Orders
                      </CardTitle>
                      {/* SVG Icon */}
                    </CardHeader>
                    <CardContent className="sm:pt-0 sm:px-5p-1  w-full">
                      <div className=" text-md  sm:text-2xl font-bold">1432</div>
                      <p className="sm:text-xs text-[9px] text-muted-foreground w-full">
                        Latest at 05:45 pm today
                      </p>
                    </CardContent>
                  </Card>
                  {/* Card Component 2 */}
                  <Card className="h-fit sm:h-full">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 sm:p-5  p-2">
                      <CardTitle className="text-sm font-medium w-full">
                       Pending Deliveries
                      </CardTitle>
                      {/* SVG Icon */}
                      </CardHeader>
                    <CardContent className="sm:pt-0 sm:px-5p-1  w-full">
                      <div className=" text-md  sm:text-2xl font-bold">12</div>
                      <p className="sm:text-xs text-[9px] text-muted-foreground w-full">
                        Deadline 31 August 2023
                      </p>
                    </CardContent>
                  </Card>

                    {/* Card Component 3 */}
                    <Card className="h-fit sm:h-full col-span-4">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 sm:p-5  p-2">
                      <CardTitle className="text-sm font-medium w-full">
                        Recent payment
                      </CardTitle>
                      {/* SVG Icon */}
                      </CardHeader>
                    <CardContent className="sm:pt-0 sm:px-5p-1  w-full">
                      <div className=" text-md  sm:text-2xl font-bold">$1435/2000</div>
                      <p className="sm:text-xs text-[9px] text-muted-foreground w-full">
                       pending Amount $565
                      </p>
                    </CardContent>
                  </Card>

                  
                    
                  {/* More Card Components go here */}
                </div>

                {/* =========  Graphs ==========  */}
                <div className="grid  col-span-1 sm:col-span-4 md:grid-cols-7 lg:col-span-7 gap-2  p-4">
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
                  <Card className=" w-full md:col-span-3">
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
            
              <DashboardTable/>
          </div>
                
      </CustomerDashboardLayout>

    </>
  )
}
