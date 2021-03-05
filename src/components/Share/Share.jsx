import React, { useState, useRef } from "react";
import {
  Typography,
  Grid,
  Button,
  TextField,
  RadioGroup,
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import Success from "./../../assets/77.png";

export default function Share({ dataState, setDataState, setShowPopover }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [picture, setPicture] = useState(null);
  const [pictureName, setPictureName] = useState(false);
  const [story, setStory] = useState("");
  const [userType, setUserType] = useState("");
  const [city, setCity] = useState("");
  const [completed, setCompleted] = useState(false);

  const inputFile = useRef(null);

  const onImageButtonClick = () => {
    inputFile.current.click();
  };

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const handleChange = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile) {
      if (types.includes(selectedFile.type)) {
        setPicture(selectedFile);
      } else {
        setPicture(null);
        alert("Please select an image file (png or jpg)");
      }
    }
  };

  const onFinish = (event) => {
    event.preventDefault();
    setDataState([
      {
        id: Math.random() * 100,
        name: `${firstname} ${lastname}`,
        img: URL.createObjectURL(picture),
        user_type: userType,
        text: story,
        location: city,
      },
      ...dataState,
    ]);
    setCompleted(true);
  };

  return (
    <div className="share-container">
      <div className="wrapper">
        {!completed ? (
          <div>
            <div className="title">
              <Typography>Share your amazing story!</Typography>
              <Typography
                onClick={() => {
                  setShowPopover(false);
                }}
              >
                <CloseIcon />
              </Typography>
            </div>

            <form onSubmit={onFinish} className="form">
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Upload your Picture
                    </FormLabel>
                    <div
                      className="upload"
                      onClick={() => {
                        onImageButtonClick();
                      }}
                    >
                      <div className="left">
                        {pictureName ? "Image Selected" : "Choose Image"}
                      </div>
                      <div className="right">
                        <AttachFileIcon />
                      </div>
                      <input
                        type="file"
                        id="file"
                        ref={inputFile}
                        accept="image/*"
                        onChange={(event) => {
                          handleChange(event);
                          setPictureName(true);
                        }}
                        style={{ display: "none" }}
                      />
                    </div>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">First Name</FormLabel>
                    <TextField
                      required
                      variant="outlined"
                      size="small"
                      onChange={(event) => {
                        setFirstname(event.target.value);
                      }}
                      value={firstname}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Last Name</FormLabel>
                    <TextField
                      required
                      variant="outlined"
                      size="small"
                      onChange={(event) => {
                        setLastname(event.target.value);
                      }}
                      value={lastname}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Share your story</FormLabel>
                    <TextField
                      required
                      variant="outlined"
                      size="small"
                      multiline
                      rows={4}
                      onChange={(event) => {
                        setStory(event.target.value);
                      }}
                      value={story}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} className="radio-line">
                  <Grid item xs={6}>
                    <FormControl
                      component="fieldset"
                      style={{ marginTop: "10px" }}
                    >
                      <FormLabel component="legend">
                        What did you interact with Vasiti as?
                      </FormLabel>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <RadioGroup
                      required
                      row
                      aria-label="position"
                      name="position"
                      defaultValue="top"
                      onChange={(event) => {
                        setUserType(event.target.value);
                      }}
                      value={userType}
                      style={{ justifyContent: "flex-end" }}
                    >
                      <FormControlLabel
                        value="customer"
                        control={
                          <Radio color="primary" className="custom-radio" />
                        }
                        label="Customer"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="vendor"
                        control={
                          <Radio color="primary" className="custom-radio" />
                        }
                        label="Vendor"
                        labelPlacement="end"
                      />
                    </RadioGroup>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      City or Higher Institution (for Students)
                    </FormLabel>
                    <TextField
                      required
                      variant="outlined"
                      size="small"
                      onChange={(event) => {
                        setCity(event.target.value);
                      }}
                      value={city}
                    />
                  </FormControl>
                </Grid>
                <Grid item className="button-right">
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    size="large"
                    // onClick={() => {
                    //   onFinish();
                    // }}
                  >
                    Share your story!
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        ) : (
          <div className="success-wrapper">
            <div className="row-one">
              <img src={Success} alt="" />
            </div>
            <div className="row-two">Thank you for sharing your story!</div>
            <div className="row-three">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="row-four">
              <Button
                type="submit"
                color="primary"
                variant="contained"
                size="large"
                onClick={() => {
                  setShowPopover(false);
                }}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
