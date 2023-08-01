import { Metadata } from "next"
import Image from "next/image"
// import { PlusCircledIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Sidebar } from "../../../components/sidebar"
import { playlists } from "../../../data/playlists"
import TeamSwitcher from "@/components/dashboard/components/team-switcher"
import { MainNav } from "@/components/dashboard/components/main-nav"
import { Search } from "@/components/dashboard/components/search"
import { UserNav } from "@/components/dashboard/components/user-nav"
import { CalendarDateRangePicker } from "@/components/dashboard/components/date-range-picker"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/dashboard/components/overview"
import { RecentSales } from "@/components/dashboard/components/recent-sales"
import { DashboardTable } from "@/components/dashboard/components/dashboardTable"
// import "../../components/dashboard/components/dashboardStyle.css"

export const metadata: Metadata = {
  title: "PackPushers",
  description: "Track your packges",
}

export default function MusicPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/music-light.png"
          width={1280}
          height={1114}
          alt="Music"
          className="block dark:hidden"
        />
        <Image
          src="/examples/music-dark.png"
          width={1280}
          height={1114}
          alt="Music"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden md:block">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-5 gap-4">
          {/* Sidebar */}
          <div className="col-span-1">
            <Sidebar playlists={playlists} className="hidden lg:block" />
          </div>

          {/* Main Content */}
          <div className="col-span-4 p-8 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center justify-between space-x-2 mb-4">
              
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          
            <Tabs defaultValue="overview" className="space-y-4">
             
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {/* Card Component 1 */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Revenue
                      </CardTitle>
                      {/* SVG Icon */}
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$45,231.89</div>
                      <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                      </p>
                    </CardContent>
                  </Card>
                  {/* Card Component 2 */}
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

                    {/* Card Component 3 */}
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
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  {/* Card Component 3 */}
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Package Sale Graph</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <Overview />
                    </CardContent>
                  </Card>
                  {/* Card Component 4 */}
                  <Card className="col-span-3">
                    <CardHeader>
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
          
        </div>
       
      </div>
    </>
  )
}
