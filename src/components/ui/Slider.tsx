"use client";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { UIContext } from "@/context/ui";
import { useContext } from "react";
import Link from "next/link";

const Slider = () => {
  const theme=useTheme()
  const { slideMenu, closeSlide } = useContext(UIContext);

  return (
    <Drawer anchor={"left"} open={slideMenu} onClose={closeSlide}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => console.log("clok")}
        onKeyDown={() => console.log("key")}
      >
        <Box onClick={closeSlide}>
          <Typography sx={{ padding: "1rem" }} variant="h4">
            Menu
          </Typography>
        </Box>
        <Divider />
        <List>
          <ListItem><Link style={{textDecoration:"none" , color:theme.palette.primary.contrastText}} href={"/"}>
            <ListItemButton onClick={closeSlide}>
              <ListItemIcon>
                <HomeOutlinedIcon  />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
            </Link>     </ListItem>

          <ListItem><Link style={{textDecoration:"none" , color:theme.palette.primary.contrastText}} href={"/calendar"}>
            <ListItemButton onClick={closeSlide}>
              <ListItemIcon>
                <CalendarMonthOutlinedIcon  />
              </ListItemIcon>
              <ListItemText primary={"Calendario"} />
            </ListItemButton>
            </Link>   </ListItem>

          <ListItem><Link  style={{textDecoration:"none" , color:theme.palette.primary.contrastText}} href={"/profile"}>
            <ListItemButton onClick={closeSlide}>
              <ListItemIcon>
                <Person2OutlinedIcon  />
              </ListItemIcon>
              <ListItemText primary={"Perfil"} />
            </ListItemButton>
            </Link>  </ListItem>

          <ListItem><Link style={{textDecoration:"none" , color:theme.palette.primary.contrastText}} href={"/about"}>
            <ListItemButton onClick={closeSlide}>
              <ListItemIcon>
                <InfoOutlinedIcon  />
              </ListItemIcon>
              <ListItemText primary={"Acerca"} />
            </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Slider;
