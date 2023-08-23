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
    
     const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/agent/setting`, {
       token: token,
       warehouseName: formData.warehouseName,
    fullAddress: formData.fullAddress,
    country: formData.country,
    city: formData.city,
    whatsapp: formData.whatsapp,
    accountNo: formData.accountNo,
    bankName: formData.bankName
     });
      
    } catch (error) {
      
      console.error(error);
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  React.useEffect(() => {
     const token = (cookies.get('usertoken') == undefined) ? 'no' : cookies.get('usertoken');
  
    axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/agent/getsetting`,{token:token }).then((res) => {
      setFormData(res.data.pfset);
     
       });

  }, []);
  

  return (
    <DashboardLayout isDashboardPage={true}>
          
      <form onSubmit={onSubmit} >
          <div >
            <label >Warehouse/Shipping Location Address</label>
            <br/>
            <textarea id="warehouseName" value={formData.warehouseName} onChange={handleInputChange} cols="100" style={{ width: '70%', border: '1px solid black', borderRadius: '5px',padding: '10px', marginBottom: '10px' }} >
              
            </textarea>
           </div>

          <div >
            <label >full address</label>
            <br/>
            <textarea id="fullAddress" value={formData.fullAddress} onChange={handleInputChange} cols="100" style={{ width: '70%', border: '1px solid black', borderRadius: '5px',padding: '10px', marginBottom: '10px' }} >
              
            </textarea>
           </div>

          <div >
            <label >Country</label>
            <br/>
            <input id="country" Value={formData.country} onChange={handleInputChange} cols="100" style={{ width: '70%', border: '1px solid black', borderRadius: '5px',padding: '10px', marginBottom: '10px' }} />
           </div>

           <div >
            <label >City</label>
            <br/>
            <input id="city" Value={formData.city} onChange={handleInputChange} cols="100" style={{ width: '70%', border: '1px solid black', borderRadius: '5px',padding: '10px', marginBottom: '10px' }} />
           </div>

           <div >
            <label >Whatsapp</label>
            <br/>
            <input id="whatsapp" Value={formData.whatsapp} onChange={handleInputChange} cols="100" style={{ width: '70%', border: '1px solid black', borderRadius: '5px',padding: '10px', marginBottom: '10px' }} />
           </div>
           <br/>
           <hr/>
           <label style={{marginTop: '50px',color: 'grey'}} >Bank Detail</label>
           <div >
            <label >Account No</label>
            <br/>
            <input id="accountNo" Value={formData.accountNo} onChange={handleInputChange} cols="100" style={{ width: '70%', border: '1px solid black', borderRadius: '5px',padding: '10px', marginBottom: '10px' }} />
           </div>

           <div >
            <label >Bank Name</label>
            <br/>
            <input id="bankName" Value={formData.bankName} onChange={handleInputChange} cols="100" style={{ width: '70%', border: '1px solid black', borderRadius: '5px',padding: '10px', marginBottom: '10px' }} />
           </div>
           <br/>
                 <Button disabled={isLoading}>
                  {isLoading && (
                    <Circle className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Update
                </Button>
        </form>
    
    </DashboardLayout>
  )
}

export default ProfileSettings;