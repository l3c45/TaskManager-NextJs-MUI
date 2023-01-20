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

interface FormInputs {
  title: string;
  description: string;
}

interface FormClicked {
  title: boolean;
  description: boolean;
}

const FormNewEntry: FC = () => {

  const { addEntrie } = useContext(EntriesContext);
  const { formIsOpen, openForm, closeForm } = useContext(UIContext);
  
  const [inputs, setInputs] = useState<FormInputs>({
    title: "",
    description: "",
  });
  const [clicked, setClicked] = useState<FormClicked>({
    title: false,
    description: false,
  });

  const handleClickOpen = () => {
    openForm();
  };

  const handleClose = () => {
    closeForm();
  };

  const handleChangueText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const OnSave = () => {
    setClicked({
      title: true,
      description: true,
    });

    if (inputs.title.length != 0 && inputs.description.length != 0) {
      addEntrie(inputs);
      handleClose();
      setClicked({
        title: false,
        description: false,
      });
      setInputs({
        title: "",
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
        sx={{ position: "absolute", bottom: "70px", left: "50px" }}
      >
        <AddOutlinedIcon />
      </Fab>
      <Dialog open={formIsOpen} onClose={handleClose}>
        <DialogTitle>Añadir tarea </DialogTitle>
        <DialogContent>
          <TextField
            value={inputs.title}
            margin="dense"
            id="title"
            label="Titulo"
            type="text"
            fullWidth
            helperText="Debe ingresar un titulo"
            variant="standard"
            onChange={handleChangueText}
            error={clicked.title && inputs.title.length <= 0 ? true : false}
            onFocus={() =>
              setClicked((prev) => ({ ...prev, title: !prev.title }))
            }
          />
          <TextField
            value={inputs.description}
            margin="dense"
            id="description"
            label="Descripcion"
            type="text"
            fullWidth
            variant="standard"
            helperText="Debe ingresar una descripción"
            onChange={handleChangueText}
            error={
              clicked.description && inputs.description.length <= 0
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
