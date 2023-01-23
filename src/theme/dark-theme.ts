import { createTheme } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";

export const darkMode = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fcba03",
      contrastText: '#fff'
    },
    secondary: {
      main: "#141414",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#121212",
      paper:"#121212"
    },

  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "",
        },
      },
    },
  },
});
