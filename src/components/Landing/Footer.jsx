import React from "react";

import { Typography, Grid } from "@material-ui/core";

import Facebook from "./../../assets/fb.svg";
import LinkedIn from "./../../assets/in.svg";
import Twitter from "./../../assets/tw.svg";
import Instagram from "./../../assets/ig.svg";

export default function Footer() {
  return (
    <Grid className="footer" item xs={12}>
      <Grid container justify="center">
        <Grid item>
          <Typography className="title">Company</Typography>
          <Typography>About us</Typography>
          <Typography>Term of Use</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Press & Media</Typography>
        </Grid>

        <Grid item>
          <Typography className="title">Products</Typography>
          <Typography>Marketplace</Typography>
          <Typography>Magazine</Typography>
          <Typography>Seller</Typography>
          <Typography>Wholesale</Typography>
          <Typography>Services</Typography>
        </Grid>

        <Grid item>
          <Typography className="title">Careers</Typography>
          <Typography>Become a Campus Rep</Typography>
          <Typography>Become a Vasiti Influencer</Typography>
          <Typography>Become a Campus writer</Typography>
          <Typography>Become an Affiliate</Typography>
        </Grid>

        <Grid item>
          <Typography className="title">Get in touch</Typography>
          <Typography>Contact us</Typography>
          <Typography>Partner with us</Typography>
          <Typography>Advertise with us</Typography>
          <Typography>Help/FAQs</Typography>
        </Grid>

        <Grid item>
          <Typography className="title">Join our community</Typography>
          <div className="icons">
            <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="instagram" />
            <img src={Twitter} alt="twitter" />
            <img src={LinkedIn} alt="linkedIn" />
          </div>
          <Typography>Email Newsletter</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
