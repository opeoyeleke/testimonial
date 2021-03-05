import React from "react";

import "./landing.scss";
import { Typography, Grid } from "@material-ui/core";
import Hero from "./../../assets/testimonial-hero.png";

export default function Banner() {
  return (
    <Grid className="banner" item xs={12}>
      <Grid container justify="center">
        <Grid className="left" item>
          <Typography className="top">
            Amazing <br /> Experiences from Our Wonderful Customers
          </Typography>
          <Typography className="bottom">
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </Typography>
        </Grid>
        <Grid className="right" item>
          <div className="ellipse-light"></div>
          <img src={Hero} alt="" />
        </Grid>
      </Grid>
    </Grid>
  );
}
