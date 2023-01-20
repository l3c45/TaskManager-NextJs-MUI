"use client";
import Image from "next/image";
import { Roboto } from "@next/font/google";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";

const label = { inputProps: { "aria-label": "Switch demo" } };

const roboto = Roboto({ weight: "400" });

export default function Home() {
  return (
    <main style={{ padding: "2rem" }} className={`${roboto.className}`}>
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm={4}>
          <Card sx={{ minHeight:'calc(100vh - 150px)'}}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Pendientes
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Añadir</Button>
            </CardActions>
          </Card>
        </Grid>


        <Grid item xs={12} sm={4}>
          <Card sx={{ minHeight:'calc(100vh - 150px)'}}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                En Curso
              </Typography>
            </CardContent>
            
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ minHeight:'calc(100vh - 150px)'}}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Finalizadas
              </Typography>
            </CardContent>
           
          </Card>
        </Grid>
      </Grid>
    </main>
  );
}
