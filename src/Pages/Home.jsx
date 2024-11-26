import React from 'react'
import HeroOne from '../Components/Hero/HeroOne'
import HeroTwo from '../Components/Hero/HeroTwo'
import PricingPlans from '../Components/Pricing/PricingPlans'
import Partners from '../Components/Partners/Partners'
import GainInsight from '../Components/GainInsight/GainInsight'
import WhyExhibit from '../Components/WhyExhibit/WhyExhibit'
import ShowFeatures from '../Components/Features/Features'

function Home() {
  return (
    <div>
      <HeroOne/>
      <HeroTwo/>
      <PricingPlans/>
      <ShowFeatures/>
      <WhyExhibit/>
      <GainInsight/>
      <PricingPlans/>
      <Partners/>
    </div>
  )
}

export default Home