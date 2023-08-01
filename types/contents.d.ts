import { type } from "os"

export type HeroHeader = {
    header: string
    subheader: string
    image: string
  }
  
  export type Content = {
    text: string
    subtext: string
    image: string
  }
  
  export type ContentSection = {
    header: string
    subheader: string
    image?: string
    content: Array<Content>
  }

  export type Logo={
    image: string
  }

  export type Hero={
    image: string
  }

  export type Featue1={
    image: string
  }

  export type Featue2={
    image: string
  }

  export type FeatueCard={
    image: string
  }
  
  export type LoginDraw={
    image: string
  }