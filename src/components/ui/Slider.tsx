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
} from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { UIContext } from "@/context/ui";
import { useContext } from "react";

const icons = [
  <HomeOutlinedIcon />,
  <InfoOutlinedIcon />,
  <CalendarMonthOutlinedIcon />,
  <Person2OutlinedIcon />,
];

const Slider = () => {
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
          {["Home", "Calendario", "Perfil", "Acerca"].map((text, index) => (
            <ListItem key={text}>
              <ListItemButton onClick={closeSlide}>
                <ListItemIcon>{icons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Slider;
