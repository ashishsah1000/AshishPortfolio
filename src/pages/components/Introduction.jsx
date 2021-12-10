import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";
import { Fade } from "@mui/material";

export default function Introduction() {
  return (
    <Fade in={true}>
      <Box>
        <Typography variant="h2">Hey! Everyone.</Typography>
      </Box>
    </Fade>
  );
}
