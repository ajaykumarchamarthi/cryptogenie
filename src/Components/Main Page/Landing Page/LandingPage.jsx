import React from "react";
import Header from "../Header/Header";
import Hero from "./Hero/Hero";
import Line from "../Line/Line";

function LandingPage() {
  return (
    <div id="Home">
      <Header />
      <hr className="m-0" />
      <Hero />
      <Line />
    </div>
  );
}

export default LandingPage;
