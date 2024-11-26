import React from 'react'
import HeroOne from '../Components/Hero/HeroOne'
import HeroTwo from '../Components/Hero/HeroTwo'
import PricingPlans from '../Components/Pricing/PricingPlans'
import Partners from '../Components/Partners/Partners'
import GainInsight from '../Components/GainInsight/GainInsight'
import WhyExhibit from '../Components/WhyExhibit/WhyExhibit'
import ShowFeatures from '../Components/Features/Features'
import ComingSoon from '../Components/ComingSoon/ComingSoon'

function Home() {
  return (
    <div>
      <HeroOne/>
      <PricingPlans/>
      <ShowFeatures/>
      <ComingSoon/>
      <WhyExhibit/>
      <GainInsight/>
      <PricingPlans/>
      <Partners/>
    </div>
  )
}

export default Home