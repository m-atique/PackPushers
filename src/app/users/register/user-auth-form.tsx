"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

import axios from 'axios';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Circle, Mail } from "lucide-react"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [Message, setMessage] = React.useState<boolean>(false)
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    password: '',
  });


  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    setMessage(false)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/signup`, formData);
      // Handle the response as needed
      window.location.href = '/users/login'
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.id;
    const value = event.target.value;
   
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
        <div className="grid gap-1">
          {Message && (
              <div style={{color: 'darkgreen'}} className="alert alert-info" >{Message}</div>
            )}
            <Label className="sr-only" htmlFor="name">
              Type
            </Label>
            <select id="role" onChange={handleInputChange} disabled={isLoading} style={{padding: '9px',border: '1px solid #575454',borderRadius: '6px'}} >
              <option value="user" >User</option>
              <option value="agent" >Package Forwarder</option>
            </select>
            
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Name
            </Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              type="fullName"
              autoCapitalize="none"
              autoComplete="fullName"
              autoCorrect="off"
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
            Password
            </Label>
            <Input
              id="password"
              placeholder="*******"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </div>
          
          <Button disabled={isLoading}>
            {isLoading && (
              <Circle className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Circle className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Mail className="mr-2 h-4 w-4" />
        )}{" "}
        Gmail
      </Button>
    </div>
  )
}
