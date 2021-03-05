import React from "react";

import "./landing.scss";
import { AppBar, Button, Link } from "@material-ui/core";

import Logo from "./../../assets/logo.svg";

export default function Navigation() {
  return (
    <div>
      <AppBar className="navbar-main" position="fixed">
        <div className="left">
          <img src={Logo} alt="" />
        </div>
        <div className="right">
          <ul>
            <li>
              <Link href="#">ABOUT US</Link>
            </li>
            <li>
              <Link href="#">STORIES</Link>
            </li>
            <li>
              <Link href="#">CONTACT</Link>
            </li>
            <li className="custom">
              <Link href="#">LOG IN</Link>
            </li>
            <li className="custom">
              <Link href="#">
                <Button variant="contained">SIGN UP</Button>
              </Link>
            </li>
          </ul>
        </div>
      </AppBar>
      <AppBar className="navbar-sec" position="relative">
        <div className="wrapper">
          <ul>
            <li>
              <Link href="#">MARKETPLACE</Link>
            </li>
            <li>
              <Link href="#">WHOLESALE CENTER</Link>
            </li>
            <li>
              <Link href="#">SELLER CENTER</Link>
            </li>
            <li>
              <Link href="#">SERVICES</Link>
            </li>
            <li>
              <Link href="#">INTERNSHIPS</Link>
            </li>
            <li>
              <Link href="#">EVENTS</Link>
            </li>
          </ul>
        </div>
      </AppBar>
    </div>
  );
}
