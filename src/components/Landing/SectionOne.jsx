import React from "react";

import "./landing.scss";
import { Typography, Grid } from "@material-ui/core";

import Ladies from "./../../assets/black-beautiful-ladies-smiling.png";

export default function SectionOne({ setShowPopover }) {
  return (
    <Grid className="section-one" item xs={12}>
      <Grid container justify="center">
        <Grid className="left" item>
          <div className="ellipse-dark"></div>
          <div className="image">
            <img src={Ladies} alt="ladies" />
          </div>
        </Grid>
        <Grid className="right" item>
          <div className="wrapper">
            <div className="top">
              <Typography className="title">Tolu & Joy’s Experience</Typography>
              <Typography className="tag">CUSTOMER</Typography>
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
                className="share-button"
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
