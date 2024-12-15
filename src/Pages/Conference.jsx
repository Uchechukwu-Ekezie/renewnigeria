import React from 'react'
import CleanEnergyConference from '../Components/ConferenceComponents/ConferenceHero'
import ComingSoon from '../Components/ComingSoon/ComingSoon'
import PricingPlans from '../Components/Pricing/PricingPlans'
import ConferenceSponsorship from '../Components/ConferenceComponents/Sponsorship'
import DelegateTestimonials from '../Components/ConferenceComponents/DelegateTestimonials'
import ConferenceHighlights from '../Components/ConferenceComponents/ConferenceHighlights'
import KeyThemes from '../Components/ConferenceComponents/KeyThemes'
import FooterInfo from '../Components/ConferenceComponents/Contact'

const Conference = () => {
  return (
    <div className='  w-full'>
        <CleanEnergyConference/>
        <FooterInfo/>
        <ComingSoon/>
        <KeyThemes/>
        <ConferenceHighlights/>
        <DelegateTestimonials/>
        <ConferenceSponsorship/>
        <PricingPlans/>
      
    </div>
  )
}

export default Conference
