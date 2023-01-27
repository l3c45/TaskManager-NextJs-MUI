"use client";

import { Grid, Skeleton } from "@mui/material";

const LoadingEntry = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ justifyContent: "center", marginTop: "20px" }}
    >
      <Grid item xs={12} md={8} lg={6} height={"450px"}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={"100%"}
          height={"100%"}
        />
      </Grid>
    </Grid>
  );
};

export default LoadingEntry;
