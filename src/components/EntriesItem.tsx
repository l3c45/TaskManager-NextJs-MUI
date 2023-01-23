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
import { useRouter } from "next/navigation";
import { getFormatDistanceToNow } from "@/utils/dateToNow";

const EntriesItem: FC<Entrie> = ({ _id,title, description, create }) => {

  const router=useRouter()

  const {startDragging,endDragging} = useContext(UIContext)

  const onDragStart=(e:DragEvent)=>{
    startDragging()

e.dataTransfer.setData("id",_id)
  }

  const onDragEnd=()=>{
    endDragging()
    
  }
  const navigate=()=>{
    router.push(`entry/${_id}`)
  }


  return (
    <Card onClick={navigate} draggable onDragEnd={onDragEnd} onDragStart={onDragStart} sx={{margin:"5px", backgroundColor: "transparent", marginBottom: "10px" }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {title}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", fontStyle: "italic" }}
        >
        <Typography sx={{fontSize:14}} variant="h6" color="text.secondary" gutterBottom>
            {`hace ${getFormatDistanceToNow(create)}`}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default EntriesItem;
