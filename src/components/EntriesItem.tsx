import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { Entrie } from "@/types";
import { CardActionArea } from "@mui/material";

const EntriesItem: FC<Entrie> = ({ title, description, create }) => {

  const date=new Date(create).toString()
  return (
    <Card sx={{margin:"5px", backgroundColor: "transparent", marginBottom: "10px" }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {title}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", fontStyle: "italic" }}
        >
          {/* <Typography color="text.secondary">{create}</Typography> */}
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default EntriesItem;
