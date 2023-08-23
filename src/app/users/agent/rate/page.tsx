"use client"
// import { Metadata } from "next"
import Image from "next/image"

import DashboardLayout from "../dashboardLayout"
import { DashboardTable } from "./Table"
import * as React from "react"
import axios from 'axios';
import Cookies from 'universal-cookie';

// export const metadata: Metadata = {
//   title: "PackPushers",
//   description: "Track your packges",
// }

export default function Dashboard() {
const cookies = new Cookies();

const [rateData, setrateData] = React.useState<boolean>({})

React.useEffect(() => {
     const token = (cookies.get('usertoken') == undefined) ? 'no' : cookies.get('usertoken');
  
    axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/agent/myrates`,{token:token }).then((res) => {
        
      let data=res.data.pfset
      
      var no=1;

      data.map((a)=>{ a.no = no; no = no+1; console.log(a) })

      setrateData(data);
     
       });

  }, []);



  return (
     
  <>
    <DashboardLayout isDashboardPage={true}>  

          
          <div className="col-span-4 p-8 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Shipment Rate List</h2> 

            <DashboardTable data={rateData} />
          </div>
               
      </DashboardLayout>

    </>
  )
}
