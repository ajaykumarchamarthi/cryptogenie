import React from "react";
import LandingPage from "./Landing Page/LandingPage";
import Hero from "./Landing Page/Hero/Hero";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import Footer from "./Footer/Footer";
import Line from "./Line/Line";

function MainPage() {
  return (
    <>
      {/* <Hero /> */}
      <LandingPage />
      <Line />
      <Features />
      <Line />
      <Pricing />
      <Footer />
    </>
  );
}

export default MainPage;
