"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import DashboardLayout from "../dashboardLayout"
import * as React from "react"
import { Circle, GithubIcon, Mail } from "lucide-react"
import axios from 'axios';
import Cookies from 'universal-cookie';



function ProfileSettings() {

const cookies = new Cookies();

const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const [formData, setFormData] = React.useState({
    warehouseName: '',
    fullAddress: '',
    country: '',
    city: '',
    whatsapp: '',
    accountNo: '',
    bankName: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.id;
    const value = event.target.value;
 
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    try {
       const token = (cookies.get('usertoken') == undefined) ? 'no' : cookies.get('usertoken');
    
     const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/agent/rate`, {
       token: token,
       weight: formData.weight,
    rate: formData.rate,
    
     });
     window.location.href = '/agent/rate'
      
    } catch (error) {
      
      console.error(error);
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  React.useEffect(() => {
     const token = (cookies.get('usertoken') == undefined) ? 'no' : cookies.get('usertoken');
  
    // axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/agent/getsetting`,{token:token }).then((res) => {
    //   setFormData(res.data.pfset);
     
    //    });

  }, []);
  

  return (
    <DashboardLayout isDashboardPage={true}>
         
         <h2 className="text-3xl font-bold tracking-tight mb-5">
          Create Package Forwarder Rate
        </h2>
      <form onSubmit={onSubmit} >
         
          <div >
            <label >Weight (in Kg)</label>
            <br/>
            <input id="weight" Value={formData.weight} onChange={handleInputChange} cols="100" style={{ width: '70%', border: '1px solid black', borderRadius: '5px',padding: '10px', marginBottom: '10px' }} />
           </div>

           <div >
            <label >Price</label>
            <br/>
            <input id="rate" Value={formData.rate} onChange={handleInputChange} cols="100" style={{ width: '70%', border: '1px solid black', borderRadius: '5px',padding: '10px', marginBottom: '10px' }} />
           </div>
           <br/>
                 <Button disabled={isLoading}>
                  {isLoading && (
                    <Circle className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Add
                </Button>
        </form>
    
    </DashboardLayout>
  )
}

export default ProfileSettings;