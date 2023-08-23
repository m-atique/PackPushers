"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Circle, GithubIcon, Mail } from "lucide-react"

const cookies = new Cookies();

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [Message, setMessage] = React.useState<boolean>(false)
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    password: '',
  });
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/login`, formData);
      cookies.set('usertoken', response.data.token, { path: '/' });
      window.location.href ='/users/dashboard'
    
    } catch (error:any) {
      if (typeof error.response != 'undefined') {
        setMessage(error.response.data.error)
      }
      console.error(error);
    }


    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.id;
    const value = event.target.value;
 
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          
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
