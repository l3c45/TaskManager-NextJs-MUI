"use client";
import { Status } from "@/types";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import EntriesList from "../EntriesList";
import FormNewEntry from "../FormNewEntry";

const Entries = () => {

  const {palette:theme}=useTheme()
  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card  sx={{ minHeight: "calc(100vh - 150px)" ,backgroundColor:theme.secondary.main}}>
          <CardContent >
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
        <Card sx={{ minHeight: "calc(100vh - 150px)",backgroundColor:theme.secondary.main }}>
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
        <Card sx={{ minHeight: "calc(100vh - 150px)",backgroundColor:theme.secondary.main }}>
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
  
  </>
  );
};

export default Entries;
