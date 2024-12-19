import React from 'react'
import ExhibitingAtRenewNigeria from '../Components/ExhibitingAtRenewNigeria/ExhibitingAtRenewNigeria'
import StatsSection from '../Components/StatsSection/StatsSection'
import WhyParticipate from '../Components/WhyParticipate/WhyParticipate'
import ExhibitorFeedback from '../Components/ExhibitorFeedback/ExhibitorFeedback'

import ExhibitorTestimonials from '../Components/ExhibitorTestimonials/ExhibitorTestimonials'
import PartnershipOpportunities from '../Components/PartnershipOpportunities/PartnershipOpportunities'
import SponsorshipEnquiry from '../Components/SponsorshipEnquiry/SponsorshipEnquiry'
import Exhibi from '../Components/Features/Feat'

const Participate = () => {
  return (
    <div className=''>
        <ExhibitingAtRenewNigeria/>
        <StatsSection />
        <WhyParticipate/>
        <ExhibitorFeedback/>
        <Exhibi/>
        <ExhibitorTestimonials/>
        <SponsorshipEnquiry/>
        <PartnershipOpportunities/>

      
    </div>
  )
}

export default Participate
