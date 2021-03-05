import React from "react";

import { Typography, Grid } from "@material-ui/core";
import Subscribe from "./../../assets/subscribe.png";

export default function SectionFive() {
  return (
    <Grid className="section-five" item xs={12}>
      <Grid container justify="center">
        <Grid className="left" item>
          <img src={Subscribe} alt="" />
        </Grid>

        <Grid className="right" item>
          <Typography className="top">
            Be a member <br /> of our community 🎉
          </Typography>
          <Typography className="middle">
            We’d make sure you’re always first to know what’s <br /> happening
            on Vasiti—thus, the world.
          </Typography>
          <div className="bottom">
            <div className="text">enter your email address</div>
            <div className="button">SUBSCRIBE</div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
