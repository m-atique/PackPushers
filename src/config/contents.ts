// import { HeroHeader, ContentSection, Logo } from "@/types/contents"

import { ContentSection, HeroHeader, Logo, Hero, Featue1, Featue2, FeatueCard, LoginDraw } from "../../types/contents"

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  header: `Transactions connected around the world`,
  subheader: ``,
  image: `/hero-img.webp`,
}

export const logo: Logo = {
  image: `/logo.png`,
}

export const hero: Hero = {
  image: `/hero.png`,
}

export const featue1: Featue1 = {
  image: `/feature1.png`,
}

export const featue2: Featue2 = {
  image: `/feature2.png`,
}

export const featueCard: FeatueCard = {
  image: `/featureCard.png`,
}

export const loginDraw: LoginDraw = {
  image: `/draw.svg`,
}


export const featureCards: ContentSection = {
  header: `Powered by`,
  subheader: `What makes Next Landing possible`,
  content: [
    {
      text: `Next.js`,
      subtext: `The React Framework`,
      image: `/next.svg`,
    },
    {
      text: `shadcn/ui`,
      subtext: `Beautifully designed components`,
      image: `/shadcn-ui.svg`,
    },
    {
      text: `Vercel`,
      subtext: `Develop. Preview. Ship.`,
      image: `/vercel.svg`,
    },
  ],
}

export const features: ContentSection = {
  header: `Features`,
  subheader: `Why use Next Landing?`,
  image: `/features-img.webp`,
  content: [
    {
      text: `SEO Optimized`,
      subtext: `Improved website visibility on search engines`,
      image: `/seo.svg`,
    },
    {
      text: `Highly Performant`,
      subtext: `Fast loading times and smooth performance`,
      image: `/performant.svg`,
    },
    {
      text: `Easy Customizability`,
      subtext: `Change your content and layout with little effort`,
      image: `/customize.svg`,
    },
  ],
}
