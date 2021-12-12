import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";
import { Fade } from "@mui/material";
import "./css/introduction.css";
import logo from "../../images/logo.png";
import { Button,Stack } from "@mui/material";

import {
  MailOutline,
  Instagram,
  GitHub,
  LinkedIn,
  Code,
  Cloud
} from "@mui/icons-material";

export default function Introduction() {
  var styles = {
    resize: "50px",
  };
  return (
    <Fade in={true}>
      <Box className="information">
        <Typography variant="h2" style={{ color: "#ee7e2d" }}>
          <img
            src={logo}
            style={{
              position: "relative",
              top: "35px",
              height: "100px",
            }}
          />
          <b>&nbsp;Flekenstine</b>{" "}
        </Typography>
        <Typography
          variant="h5"
          style={{
            color: "rgba(222,222,222,.7)",
            marginLeft: "110px",
            marginTop: "-20px",
            fontWeight: "200",
          }}
        >
          &nbsp;
          <b>
            {" "}
            Ashish Sah{" "}
            <Code
              style={{ position: "relative", top: "10px", color: "#ee7e2d" }}
              fontSize="large"
            />{" "}
            Web developer
          </b>
        </Typography>
        <br />
        <Typography variant="body1">
          {" "}
          I am a developer form Jamshedpur, Jharkhand India. I have around 3
          years in Web Development. I am a Data Strcuture and Algorithm
          enthusiast.
        </Typography>
        <br />
        <div>
          <div className="icons">
            <div className="iconHolder">
              <MailOutline fontSize="medium" />
            </div>
            <div className="infoIcons">&nbsp;ashishsah1000@gmail.com</div>
          </div>
          <div className="icons">
            <div className="iconHolder">
              <Instagram fontSize="medium" />
            </div>
            <div className="infoIcons">&nbsp;me.dev.ashish</div>
          </div>
          <div className="icons">
            <div className="iconHolder">
              <GitHub fontSize="medium" />
            </div>
            <div className="infoIcons">
              &nbsp;https://github.com/ashishsah1000
            </div>
          </div>
          <div className="icons">
            <div className="iconHolder">
              <LinkedIn fontSize="medium" />
            </div>
            <div className="infoIcons">
              &nbsp;https://linkedin.com/u/ashishsah1000
            </div>
          </div>
        </div>
        <Box style={{marginTop:"30px"}}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button size="large" startIcon={<GitHub />} variant="contained" style={{background:"#ee7e2d",color:"white"}}>Projects</Button>
          <Button size="large" startIcon={<Cloud />} variant="contained" style={{background:"#ee7e2d",color:"white"}}>Live Apps</Button>
          </Stack>
        </Box>
      </Box>
    </Fade>
  );
}
