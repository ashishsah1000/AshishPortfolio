import * as React from "react";
import { Box, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import "./css/index.css";
import Navbar from "./components/Navbar";
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
          <Navbar />
          <div className="content">
            <Introduction />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default IndexPage;
