import * as React from "react";
import { Box, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./css/index.css";
import Navbar from "./components/Navbar";
import Animate from "./components/Animate";
import CustomCard from "./components/CustomCard";
import CreateCards from "./components/CreateCards";
import SideNav from "./components/SideNav";
// import { ThemeProvider, createMuiTheme } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
const theme = createTheme(theme, {


  palette: {
    mode: "light",
  },
  typography: {
    body1: {
      color: "grey",
    },

    button: {
      textTransform: "none"

    }
  }
});
//
// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <div className="appParalax">
          <div className="content">
            {/* <Navbar /> */}
            <Grid container>
              <SideNav />

              <Grid items md={12} xs={12} style={{ height: "100vh" }}>

                <Introduction />
              </Grid>
              <Grid items md={12} xs={12}>
                {/* {add the componet of effects} */}
                {/* <Animate /> */}
                <div className="rightHolder" >
                  {/* <Typography variant="h3">Contributed Projects:</Typography> */}
                  {/* <CreateCards /> */}
                  <Grid container>
                    <Grid items md={6} lg={6} sm={12}>
                      <div className="pdisc">
                        <Typography variant="h3">Let explore some projects:</Typography>
                        <Typography variant="body1" style={{ marginTop: "30px" }}>I have contributed to few of the projects. While learning
                          and while working we all have it here at one place and that is updated time to time. Have a look on the projects pannel.
                        </Typography>
                      </div>
                    </Grid>
                    <Grid items md={6} lg={6} sm={12}>
                      <Projects />
                    </Grid>
                  </Grid>



                </div>

                {/* <CustomCard /> */}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default IndexPage;
