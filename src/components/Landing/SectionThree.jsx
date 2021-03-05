import React from "react";

import "./landing.scss";
import { Typography, Grid } from "@material-ui/core";

import Shopping from "./../../assets/woman-shoppingbag-card.png";

export default function SectionThree({ setShowPopover }) {
  return (
    <Grid className="section-three light" item xs={12}>
      <Grid container justify="center" className="light">
        <Grid className="left" item>
          <div className="image light">
            <img src={Shopping} alt="shopping" />
          </div>
        </Grid>
        <Grid className="right light" item>
          <div className="wrapper">
            <div className="top">
              <Typography className="title">Josiah’s Experience</Typography>
              <Typography className="tag light">VENDOR</Typography>
            </div>

            <Typography className="middle">
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. <br /> I would definately be coming back! I had the
              best experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </Typography>

            <div className="bottom">
              <Typography
                className="share-button light"
                onClick={() => {
                  setShowPopover(true);
                }}
              >
                Share your own story!
              </Typography>
              <div className="line"></div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
