import { Box, Grow, Slide, useTheme } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { DragEvent, useContext } from "react";
import { EntriesContext } from "@/context/entries";

const DeleteZone = () => {
  const { palette: theme } = useTheme();
  const { removeEntrie } = useContext(EntriesContext);

  const onDrop = (e: DragEvent) => {
    const id = e.dataTransfer.getData("id");
    removeEntrie(id);
  };

  const allow = (e: DragEvent) => {
    e.preventDefault();
  };

  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <Box
        onDrop={onDrop}
        onDragOver={allow}
        bgcolor={theme.error.main}
        sx={{
          width: "300px",
          textAlign: "center",
          padding: 2,
          position: "fixed",
          bottom: 0,
        }}
      >
        <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
      </Box>
    </Slide>
  );
};

export default DeleteZone;
