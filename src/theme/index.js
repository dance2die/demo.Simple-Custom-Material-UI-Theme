import { createMuiTheme } from "@material-ui/core/styles";

import themeData from "./light-theme.json";

const overrides = {
  MuiButton: {}
};

const theme = createMuiTheme({
  ...themeData,
  overrides
});

console.info(`themeData`, themeData);

export default theme;
