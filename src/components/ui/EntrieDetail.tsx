"use client";

import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";
import { Entry, Status } from "@/types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, useContext, useEffect, useState } from "react";

interface Props {
  entry: Entry;
}

const EntrieDetail: FC<Props> = ({ entry }) => {
  const router = useRouter();
  const { loadingToEntry } = useContext(UIContext);
  const { updateEntrie, removeEntrie } = useContext(EntriesContext);
  const [input, setInput] = useState<string>(entry.description);
  const [state, setState] = useState<Status>(entry.status);
  const [touched, setTouched] = useState<boolean>(false);

  useEffect(() => {
    loadingToEntry("");
  }, []);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => e.target.value);
  };
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prev) => e.target.value as Status);
  };

  const onSave = () => {
    if (input.length <= 0) return;

    const updatedEntry = {
      ...entry,
      description: input,
      status: state,
    };
    updateEntrie(updatedEntry);
    setTouched(false);
    setInput("");
    router.push("/");
  };

  const onDelete = () => {
    removeEntrie(entry._id);

    router.push("/");
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ justifyContent: "center", marginTop: "20px" }}
    >
      <Grid item xs={12} md={8} lg={6}>
        <Card sx={{ padding: "10px" }}>
          <CardContent sx={{ padding: 0 }}>
            <Typography
              sx={{ fontSize: 26 }}
              color="text.secondary"
              gutterBottom
            >
              Editar Tarea
            </Typography>
            <TextField
              multiline
              sx={{ width: "100%" }}
              id="standard-basic"
              label="Descripción"
              variant="standard"
              value={input}
              onFocus={() => setTouched(true)}
              onChange={onChangeText}
              error={touched && input.length <= 0 ? true : false}
            />
          </CardContent>
          <CardActions sx={{ padding: "20px 0" }}>
            <FormControl sx={{ width: "100%" }}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Estado
              </FormLabel>
              <RadioGroup
                value={state}
                onChange={onStatusChange}
                row
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value={Status.pending}
                  control={<Radio />}
                  label="Pendiente"
                />
                <FormControlLabel
                  value={Status.current}
                  control={<Radio />}
                  label="En curso"
                />
                <FormControlLabel
                  value={Status.done}
                  control={<Radio />}
                  label="Finalizada"
                />
              </RadioGroup>
              <Button
                sx={{ marginTop: "20px" }}
                variant="outlined"
                onClick={onSave}
              >
                Guardar
              </Button>
              <Button
                sx={{ marginTop: "20px" }}
                variant="outlined"
                onClick={onDelete}
                color="error"
              >
                Borrar
              </Button>
            </FormControl>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EntrieDetail;
