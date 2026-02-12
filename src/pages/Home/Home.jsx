import React from "react";
import HeroSlider from "./Heroheader";
import AboutSection from "./Aboutsection";
import ServicesGrid from "./ServicesGrid";
import TestimonialsSwiper from "./TestimonialSection";
import GallerySection from "./GallerySection";
import MakeupArtistSection from "./MakeupArtistSection";
import BrandSlider from "./Try";
import WhyWeStandOut from "./WhyWeStandOut";


const Home = () => {
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <ServicesGrid />
      <MakeupArtistSection/>
      {/* <SimplePinkSection/> */}
      {/* <FranchiseSection/> */}
      <WhyWeStandOut/>
      <TestimonialsSwiper />
    <GallerySection/>
    <BrandSlider/>

    </div>
  );
};

export default Home;
