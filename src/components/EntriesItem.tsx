import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DragEvent, DragEventHandler, FC, useContext } from "react";
import { Entrie } from "@/types";
import { CardActionArea } from "@mui/material";
import { UIContext } from "@/context/ui";

const EntriesItem: FC<Entrie> = ({ id,title, description, create }) => {

  const {startDragging,endDragging} = useContext(UIContext)

  const onDragStart=(e:DragEvent)=>{
    startDragging()

e.dataTransfer.setData("id",id)
  }

  const onDragEnd=()=>{
    endDragging()
    console.log("FIN")
  }

  const date=new Date(create).toString()
  return (
    <Card draggable onDragEnd={onDragEnd} onDragStart={onDragStart} sx={{margin:"5px", backgroundColor: "transparent", marginBottom: "10px" }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {title}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", fontStyle: "italic" }}
        >
        
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default EntriesItem;
