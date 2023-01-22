"use client";

import { Status } from "@/types";
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
import { ChangeEvent, FC, useState } from "react";

const EntrieDetail: FC = () => {
  const [input, setInput] = useState<string>("");
  const [status, setStatus] = useState<Status>(Status.pending);
  const [touched, setTouched] = useState<boolean>(false);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => e.target.value);
  };
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus((prev) => e.target.value as Status);
  };

  const onSave = () => {
    if (input.length <= 0) return;
    console.log(input, status);
    setTouched(false);
    setInput("");
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
                value={status}
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
                variant="contained"
                onClick={onSave}
              >
                Guardar
              </Button>
            </FormControl>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EntrieDetail;
