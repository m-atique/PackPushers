import FeatureCards from "@/components/landing/feature-cards"
import FeatureCard3 from "@/components/landing/featureCard3"
import FeatureSection1 from "@/components/landing/featureSection1"
import FeatureSection2 from "@/components/landing/featureSection2"
import HeroHeader from "@/components/landing/hero"
import Footer from "@/components/landing/layout/footer"

export default function Home() {
  return (
    <main>
      <HeroHeader/>
      <FeatureSection1/>
      <FeatureSection2/>
      <FeatureCards/>
      <FeatureCard3/>
      <Footer/>
    </main>
  )
}