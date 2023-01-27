"use client";
import { UIContext } from "@/context/ui";
import { Status } from "@/types";
import { Grid, Typography, Card, CardContent, useTheme } from "@mui/material";
import { useContext } from "react";
import EntriesList from "../EntriesList";
import FormNewEntry from "../FormNewEntry";
import Preview from "../Preview";
import DeleteZone from "./DeleteZone";

const Entries = () => {
  const { isDragging, endDragging } = useContext(UIContext);

  const { palette: theme } = useTheme();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              minHeight: "calc(100vh - 150px)",
              backgroundColor: theme.secondary.main,
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                Pendientes
              </Typography>
              <EntriesList type={Status.pending}></EntriesList>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              minHeight: "calc(100vh - 150px)",
              backgroundColor: theme.secondary.main,
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                En Curso
              </Typography>
              <EntriesList type={Status.current}></EntriesList>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              minHeight: "calc(100vh - 150px)",
              backgroundColor: theme.secondary.main,
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                Finalizadas
              </Typography>
              <EntriesList type={Status.done}></EntriesList>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <FormNewEntry></FormNewEntry>
      <Preview></Preview>

      {isDragging ? <DeleteZone></DeleteZone> : null}
    </>
  );
};

export default Entries;
