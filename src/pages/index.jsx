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
// import { ThemeProvider, createMuiTheme } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
const theme = createTheme({
  palette: {
    mode: "light",
  },
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
              <Grid items md={12} xs={12} style={{ height: "100vh" }}>
                <Introduction />
              </Grid>
              <Grid items md={12} xs={12}>
                {/* {add the componet of effects} */}
                {/* <Animate /> */}
                <div className="rightHolder" >
                  {/* <Typography variant="h3">Contributed Projects:</Typography> */}
                  <CreateCards />
                  {/* <Projects /> */}
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
