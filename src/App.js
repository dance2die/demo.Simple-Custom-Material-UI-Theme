import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

// import white from "@material-ui/core/colors/white";

import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box m={5}>
        <Box mb={5}>
          <Typography variant="h2">
            Start editing to see some magic happen!
          </Typography>
        </Box>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
      </Box>
    </ThemeProvider>
  );
}
