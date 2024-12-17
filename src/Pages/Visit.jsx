import React from 'react'
import RenewNigeriaSection from '../Components/RenewNigeriaSection/RenewNigeriaSection'
import WhoWillMeet from '../Components/WhoWillMeet/WhoWillMeet'
import ProductSector from '../Components/ProductSector/ProductSector'
import AtRenewNigeria from '../Components/AtRenewNigeria/AtRenewNigeria'
import NigeriaEnergy from '../Components/NigeriaEnergy/NigeriaEnergy'
import FindSuppliers from '../Components/FindSuppliers/FindSuppliers'
import HearFromVisitors from '../Components/HearFromVisitors/HearFromVisitors'

const Visit = () => {
  return (
    <div>
      <RenewNigeriaSection />
      <AtRenewNigeria />
      <ProductSector />
      <WhoWillMeet />
      <NigeriaEnergy />
      <FindSuppliers />
      <HearFromVisitors/>

    </div>
  )
}

export default Visit
