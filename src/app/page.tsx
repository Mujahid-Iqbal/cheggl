import FeatureCards from './components/FeatureCards'
import HeroCarousel from './components/HeroCarousel'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <FeatureCards />
      <HowItWorks />
      <Testimonials />
      {/* other sections */}
    </>
  )
}
