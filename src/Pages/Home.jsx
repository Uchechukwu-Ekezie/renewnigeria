import React from "react";
import HeroFour from "../Components/Hero/HeroFour";
import PricingPlans from "../Components/Pricing/PricingPlans";
import GainInsight from "../Components/GainInsight/GainInsight";
import WhyExhibit from "../Components/WhyExhibit/WhyExhibit";
import ShowFeatures from "../Components/Features/Features";
import ComingSoon from "../Components/ComingSoon/ComingSoon";
import ShowHighlights from "../Components/ShowHighlights/ShowHighlights";
import VideoGallery from "../Components/VideoGallery/VideoGallery";
import Slider from "../Components/Hero/Slider";
import HeroThree from "../Components/Hero/HeroThree";
import ShowFeatureinHero from "../Components/Features/ShowFeaturesinHero";


function Home() {
  return (
    <div>
      
      <Slider />
      <HeroThree />
      <HeroFour />

      <ShowFeatureinHero/>
      <ComingSoon />
      <ShowHighlights />
      <VideoGallery />
      <WhyExhibit />
      <GainInsight />
      <PricingPlans />
     
    </div>
  );
}

export default Home;