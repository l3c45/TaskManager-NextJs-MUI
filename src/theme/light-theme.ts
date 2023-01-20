import { createTheme } from "@mui/material";

export const lightMode=createTheme({
  palette:{
    mode:"light"
  },
  components:{
    MuiAppBar:{
      defaultProps:{
        elevation:0
      }
      
      },
    }
  }
  )