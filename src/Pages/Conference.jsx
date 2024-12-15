import React from 'react'
import CleanEnergyConference from '../Components/ConferenceComponents/ConferenceHero'
import ComingSoon from '../Components/ComingSoon/ComingSoon'
import PricingPlans from '../Components/Pricing/PricingPlans'
import ConferenceSponsorship from '../Components/ConferenceComponents/Sponsorship'

const Conference = () => {
  return (
    <div className='  w-full'>
        <CleanEnergyConference/>
        <ComingSoon/>
        <ConferenceSponsorship/>
        <PricingPlans/>
      
    </div>
  )
}

export default Conference
