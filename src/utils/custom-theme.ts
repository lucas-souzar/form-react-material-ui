import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f44336",
    },
    success: {
      main: "#00cA5f",
      contrastText: "#ffffff",
    },
    error: {
      main: "#fa5b79",
    },
  },
});
