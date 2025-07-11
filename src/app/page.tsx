import FeatureCards from './components/FeatureCards'
import HotSpotsCarousel from './components/HeroCarousel'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import spots from '../data/slides.json';


export default function HomePage() {
  return (
    <>
      <HotSpotsCarousel spots={spots} />
      <FeatureCards />
      <HowItWorks />
      <Testimonials />
      {/* other sections */}
    </>
  )
}
