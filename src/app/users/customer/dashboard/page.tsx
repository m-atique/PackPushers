"use client"
import { Metadata } from "next"
import Image from "next/image"
import React,{useEffect,useState} from "react"

import {
  Tabs,
  TabsContent,
 
} from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import CustomerDashboardLayout from "../customerDashboardLayout"
import { PendingDeliveryTable } from "@/components/users/components/customers/pendingDeliveryTable"
import { PaymentsTable } from "@/components/users/components/customers/paymentsTable"

// export const metadata: Metadata = {
//   title: "PackPushers",
//   description: "Track your packges",
// }
import axios from 'axios';
import Cookies from 'universal-cookie';

export default function UserDashb() {
  const cookies = new Cookies();

  const [dasboard, setdasboard] = useState({
    ts: 0,
    tsc: 0,
    rs: []
  });

  useEffect(() => {
     const token = (cookies.get('usertoken') == undefined) ? 'no' : cookies.get('usertoken');
     axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/dashboard`,{token:token }).then((res) => {
      // setdasboard(res.data.data);
       });

  }, []);

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
                        Total Shipment
                      </CardTitle>
                      {/* SVG Icon */}
                    </CardHeader>
                    <CardContent className="sm:pt-0 sm:px-5p-1  w-full">
                      <div className=" text-md  sm:text-2xl font-bold">{dasboard.ts}</div>
                      <p className="sm:text-xs text-[9px] text-muted-foreground w-full">
                       
                      </p>
                    </CardContent>
                  </Card>
                  {/* Card Component 2 */}
                  <Card className="h-fit sm:h-full">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 sm:p-5  p-2">
                      <CardTitle className="text-sm font-medium w-full">
                      Total Shipments Cost
                      </CardTitle>
                      {/* SVG Icon */}
                      </CardHeader>
                    <CardContent className="sm:pt-0 sm:px-5p-1  w-full">
                      <div className=" text-md  sm:text-2xl font-bold">{dasboard.tsc}</div>
                      <p className="sm:text-xs text-[9px] text-muted-foreground w-full">
                        
                      </p>
                    </CardContent>
                  </Card>

                    {/* Card Component 3 */}
                    <Card className="h-fit sm:h-full hidden sm:block">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 sm:p-5  p-2">
                      <CardTitle className="text-sm font-medium w-full">
                       Wallet
                      </CardTitle>
                      {/* SVG Icon */}
                      </CardHeader>
                    <CardContent className="sm:pt-0 sm:px-5p-1  w-full">
                      <div className=" text-md  sm:text-2xl font-bold">$1435</div>
                      <p className="sm:text-xs text-[9px] text-muted-foreground w-full">
                      
                      </p>
                    </CardContent>
                  </Card>                 
                  {/* More Card Components go here */}
                </div>
                {/* ------------------------------mobile view 4th card */}
<div className="grid gap-3 grid-cols-2 md:gap-3 sm:grid-cols-2 sm:hidden md:grid-cols-4 px-6">
              <Card className="h-fit sm:h-full col-span-4  sm:col-span-2 ml-4 mr-10">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 sm:p-5  p-2">
                      <CardTitle className="text-md font-bold flex flex-row justify-between w-full">
                        <div className="flex justify-center items-center">
                        Recent payment
                        </div>
                        <div>
                        $1435/2000
                        <CardContent className="sm:pt-0 sm:px-5 p-1  w-full">
                      <p className="sm:text-xs text-[9px] text-muted-foreground w-full">
                       pending Amount $565
                      </p>
                    </CardContent>
                        </div>
                      </CardTitle>
                      {/* SVG Icon */}
                      </CardHeader>
                  </Card>
                  </div>

                {/* =========  Graphs ==========  */}
                <div className="grid  col-span-1 sm:col-span-4 md:grid-cols-7 lg:col-span-7 gap-2  p-4">
                  {/* Card Component 3 */}
                  <Card className="md:col-span-4">
                  <CardHeader className="w-4/5">
                      <CardTitle>Payments Datail</CardTitle>
                      <CardDescription>
                       List of all pending deliveries
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <PaymentsTable />
                    </CardContent>
                  </Card>
                  {/* Card Component 4 */}
                  <Card className=" w-full md:col-span-3">
                    <CardHeader className="w-4/5">
                      <CardTitle>Pending Deliveries</CardTitle>
                      <CardDescription>
                        Total Amount Recieved $23,456.50
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PendingDeliveryTable />
                    </CardContent>
                  </Card>
                  {/* More Card Components go here */}
                </div>
              </TabsContent>
            </Tabs>
          </div>
                
      </CustomerDashboardLayout>

    </>
  )
}
