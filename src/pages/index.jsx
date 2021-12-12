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
              <Grid items md={6} xs={12}>
                <Introduction />
              </Grid>
              <Grid items md={6} xs={12} >
                {/* {add the componet of effects} */}
                {/* <Animate /> */}
                <div style={{ maxHeight: '100vh', overflow: 'auto' }}>
                  <CreateCards />
                </div>


                {/* <CustomCard /> */}


              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </ThemeProvider >
  );
};

export default IndexPage;
