import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";
import { Fade } from "@mui/material";
import "./css/introduction.css"
import { MailOutline,Instagram,GitHub,LinkedIn,PlayCircle } from "@mui/icons-material";

export default function Introduction() {
  var styles = {
    resize : "50px"
  }
  return (
    <Fade in={true}>
      <Box className="information"> 
        <Typography variant="h2"> Hey! Everyone.</Typography>
        <Typography variant="h5" style={{color:"rgba(222,222,222,.7)"}}><PlayCircle fontSize="small" />
        &nbsp;<b>Flekenstine | Ashish Sah</b></Typography>
        <br />
        <Typography variant="body1"> I am a developer form Jamshedpur, Jharkhand India.
        I have around 3 years in Web Development and right now I am working in React JS 
        and Node JS. I am a Data Strcuture and Algorithm enthusiast. I have worked on many JS framework and right now expanding to 
        Cryptocurrency BlockChain and Data Science. I have Contributed to OpenSource. Worked
        as a React Developer in corporates. I have also experience in Freelancing and have
        contributed to few of the NGO's with my Skills. 
         </Typography>
        <br />
        <div>
          <div className="icons">
            <div className="iconHolder">
            <MailOutline fontSize="medium" />
            </div>
            <div className="infoIcons" >
            &nbsp;ashishsah1000@gmail.com

            </div>
          </div>
          <div className="icons">
            <div className="iconHolder">
            <Instagram fontSize="medium" />
            </div>
            <div className="infoIcons" >
            &nbsp;me.dev.ashish

            </div>
          </div>
          <div className="icons">
            <div className="iconHolder">
            <GitHub fontSize="medium" />
            </div>
            <div className="infoIcons" >
            &nbsp;https://github.com/ashishsah1000

            </div>
          </div>
          <div className="icons">
            <div className="iconHolder">
            <LinkedIn fontSize="medium" />
            </div>
            <div className="infoIcons" >
            &nbsp;https://linkedin.com/u/ashishsah1000

            </div>
          </div>
          
        </div>
      </Box>
    </Fade>
  );
}
