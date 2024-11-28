import React from 'react'
import Hero from '../Components/Hero/Hero'
// import HeroTwo from '../Components/Hero/HeroTwo'
import HeroThree from '../Components/Hero/HeroThree'
import HeroFour from '../Components/Hero/HeroFour'
import PricingPlans from '../Components/Pricing/PricingPlans'
import Partners from '../Components/Partners/Partners'
import GainInsight from '../Components/GainInsight/GainInsight'
import WhyExhibit from '../Components/WhyExhibit/WhyExhibit'
import ShowFeatures from '../Components/Features/Features'
import ComingSoon from '../Components/ComingSoon/ComingSoon'
import ShowHighlights from '../Components/ShowHighlights/ShowHighlights'
import VideoGallery from '../Components/VideoGallery/VideoGallery'
import Slider from '../Components/Hero/Slider'
import HeroOne from '../Components/Hero/HeroOne'

function Home() {
  return (
    <div>
      <Hero/>
      <HeroOne />
      <Slider/>
      {/* <HeroOne/> */}
      <HeroThree/>
      <HeroFour/>
      <ShowFeatures/>
      <ComingSoon/>
      <ShowHighlights/>
      <VideoGallery/>
      <WhyExhibit/>
      <GainInsight/>
      <PricingPlans/>
      <Partners/>
    </div>
  )
}

export default Home