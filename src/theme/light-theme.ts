import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const lightMode = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#E1D7C6",
      paper:"#ECE8DD"
    },
    primary: {
      main: "#579BB1",
      contrastText: '#0e0e0e'
    },
    secondary: {
      main: "#ECE8DD",
      
    },
    error: {
      main: red.A400,
    },
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
});
