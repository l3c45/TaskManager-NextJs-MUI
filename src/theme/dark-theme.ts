import { createTheme } from "@mui/material";

export const darkMode=createTheme({
  palette:{
    mode:"dark",
    primary:{
      main: "#fcba03",
    }
  },
  components:{
    MuiAppBar:{
      defaultProps:{
        elevation:0
      },
      styleOverrides:{
        root:{
          backgroundColor:""
        }
      }
      
      },
    }
  })