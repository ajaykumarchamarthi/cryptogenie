import React from "react";
import LandingPage from "./Landing Page/LandingPage";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import Line from "./Line/Line";

function MainPage() {
  return (
    <>
      <LandingPage />
      <Line />
      <Features />
      <Line />
      <Pricing />
    </>
  );
}

export default MainPage;
