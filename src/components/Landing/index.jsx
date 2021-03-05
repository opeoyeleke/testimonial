import React from "react";

import "./landing.scss";
import { data } from "./../../data";

import Navigation from "./Navigation";
import Banner from "./Banner";
import SectionOne from "./SectionOne";
import UsersSection from "./UsersSection";
import SectionThree from "./SectionThree";
import SectionFive from "./SectionFive";
import Footer from "./Footer";

export default function Landing() {
  return (
    <div className="landing-page">
      <Navigation />
      <Banner />
      <SectionOne />
      <UsersSection data={data.slice(0, 6)} />
      <SectionThree />
      <UsersSection data={data.slice(6, 12)} />
      <SectionFive />
      <Footer />
    </div>
  );
}
