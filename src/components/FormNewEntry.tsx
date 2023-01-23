import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ChangeEvent, FC, useContext, useState } from "react";
import { Fab } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";

export interface FormInputs {
  description: string;
}

interface FormClicked {
  description: boolean;
}

const FormNewEntry: FC = () => {
  const { addEntrie } = useContext(EntriesContext);
  const { formIsOpen, openForm, closeForm } = useContext(UIContext);

  const [input, setInput] = useState<FormInputs>({ description: "" });
  const [clicked, setClicked] = useState<FormClicked>({
    description: false,
  });

  const handleClickOpen = () => {
    openForm();
  };

  const handleClose = () => {
    closeForm();
  };

  const handleChangueText = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ description: e.target.value }));
  };

  const OnSave = () => {
    setClicked({
      description: true,
    });

    if (input.description.length != 0) {
      addEntrie(input);
      handleClose();
      setClicked({
        description: false,
      });
      setInput({
        description: "",
      });
    }
  };

  return (
    <div>
      <Fab
        onClick={handleClickOpen}
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: "70px", left: "50px" }}
      >
        <AddOutlinedIcon />
      </Fab>
      <Dialog fullWidth sx={{}} open={formIsOpen} onClose={handleClose}>
        <DialogTitle>Añadir tarea </DialogTitle>
        <DialogContent>
          
          <TextField
            multiline
            value={input.description}
            margin="dense"
            id="description"
            label="Descripcion"
            type="text"
            fullWidth
            variant="standard"
            helperText="Debe ingresar una descripción"
            onChange={handleChangueText}
            error={
              clicked.description && input.description.length <= 0
                ? true
                : false
            }
            onFocus={() =>
              setClicked((prev) => ({
                ...prev,
                description: !prev.description,
              }))
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={OnSave}>Añadir</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormNewEntry;
