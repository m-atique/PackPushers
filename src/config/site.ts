import { SiteConfig, ContactConfig } from "../../types"

/* ====================
[> WEBSITE CONFIG <]
-- Fill the details about your website
 ==================== */

const baseUrl = "http://localhost:3000"

export const siteConfig: SiteConfig = {
  name: "PackPushers",
  author: "redpangilinan",
  description:
    "Best platform for package delivery",
  keywords: [
    "packages",
    "delivery",
    "track order",
    "delivery from china",
  ],
  url: {
    base: baseUrl,
    author: "isofttechn.app",
  },
  ogImage: `${baseUrl}/og.jpg`,
}

export const contactConfig: ContactConfig = {
  email: "isofttechn@gmail.com",
}