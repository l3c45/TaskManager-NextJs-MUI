import { FC, useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Paper, Typography } from "@mui/material";

import { UIContext } from "@/context/ui";
import { useRouter } from "next/navigation";
import { getFormatDistanceToNow } from "@/utils";

export interface FormInputs {
  description: string;
}

interface FormClicked {
  description: boolean;
}

const Preview: FC = () => {
  const router = useRouter();
  const { PreviewModal, togglePreview } = useContext(UIContext);

  const handleClose = () => {
    togglePreview(false);
  };

  const navigate = () => {
    router.push(`entry/${PreviewModal.entry?._id}`);
    togglePreview(false);
  };

  return (
    <div>
      <Dialog
        fullWidth
        sx={{}}
        open={PreviewModal.isOpen}
        onClose={handleClose}
      >
        <DialogTitle>Detalle de Tarea </DialogTitle>

        <DialogContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="subtitle1">
              Estado: {PreviewModal.entry?.status}
            </Typography>
            <Typography sx={{ fontStyle: "italic" }} variant="subtitle1">
             Creado hace {getFormatDistanceToNow(PreviewModal.entry?.create!)}
            </Typography>
          </Box>
<Paper elevation={9} >
          <Typography  sx={{padding:"5px 1rem",margin:"5px 0"}} variant="subtitle1">
          <pre style={{ fontFamily: 'inherit' }}>
          {PreviewModal.entry?.description}
    </pre>
          
          </Typography>
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
          <Button onClick={navigate}>Editar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Preview;
