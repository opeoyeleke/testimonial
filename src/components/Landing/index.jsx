import React, { useState } from "react";
import { Popover } from "@material-ui/core";

import "./landing.scss";
import { data } from "./../../data";

import Navigation from "./Navigation";
import Banner from "./Banner";
import SectionOne from "./SectionOne";
import UsersSection from "./UsersSection";
import SectionThree from "./SectionThree";
import SectionFive from "./SectionFive";
import Footer from "./Footer";
import Share from "./../Share/Share";

export default function Landing() {
  const [dataState, setDataState] = useState(data);
  const [showPopover, setShowPopover] = useState(false);

  return (
    <div className="landing-page">
      <Popover
        className="custom-popover"
        onClose={() => {
          setShowPopover(false);
        }}
        open={showPopover}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 100, left: 40 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <Share
          setShowPopover={setShowPopover}
          setDataState={setDataState}
          dataState={dataState}
        />
      </Popover>

      <Navigation />
      <Banner />
      <SectionOne setShowPopover={setShowPopover} />
      <UsersSection data={dataState && dataState.slice(0, 6)} />
      <SectionThree setShowPopover={setShowPopover} />
      <UsersSection data={dataState && dataState.slice(6, 12)} />
      <SectionFive />
      <Footer />
    </div>
  );
}
