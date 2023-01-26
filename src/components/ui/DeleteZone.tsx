import { Box, useTheme } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { DragEvent, useContext } from "react";
import { EntriesContext } from "@/context/entries";

const DeleteZone = () => {
  const { palette: theme } = useTheme();
  const {removeEntrie } = useContext(EntriesContext);

  const onDrop = (e: DragEvent) => {
    const id = e.dataTransfer.getData("id");
    removeEntrie(id)
  };

  const allow = (e: DragEvent) => {
    e.preventDefault();
  };

  return (
    <Box
      onDrop={onDrop}
      onDragOver={allow}
      bgcolor={theme.error.main}
      sx={{ width: "300px", textAlign: "center", padding: 3, marginTop: 2 }}
    >
      <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
    </Box>
  );
};

export default DeleteZone;
