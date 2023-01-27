import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DragEvent, FC, useContext } from "react";
import { CardActionArea, Grow, LinearProgress } from "@mui/material";
import { UIContext } from "@/context/ui";
import { useRouter } from "next/navigation";
import { getFormatDistanceToNow } from "@/utils/dateToNow";
import { Entry } from "@/types";

const EntriesItem: FC<Entry> = ({ _id,  description, create,status }) => {
 
  

  const {handlePreviewModal, startDragging, endDragging, loadingToEntry, loadingEntry,togglePreview } =
    useContext(UIContext);

  const onDragStart = (e: DragEvent) => {
    startDragging();

    e.dataTransfer.setData("id", _id);
  };

  const onDragEnd = () => {
    endDragging();
  };

  const setModal=()=>{
    const entry:Entry={
      _id, 
      description,
       status,
        create
    }
    handlePreviewModal(entry)
    togglePreview(true)
  }
 

  return (
    // <Grow in={true}>
      <Card
       onClick={setModal }
        draggable
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        sx={{
          margin: "3px",
          backgroundColor: "transparent",
          marginBottom: "10px",
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography
              sx={{ wordWrap: "break-word",overflow: "hidden",
              whiteSpace: "nowrap",
               }}
              variant="subtitle1"
             
              
            >
              <pre style={{ fontFamily: "inherit",textOverflow: "ellipsis" }}>{description}
              </pre>
            </Typography>
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "end", fontStyle: "italic" }}
          >
            <></>
            <Typography
              sx={{ fontSize: 14 }}
              variant="h6"
              color="text.secondary"
              gutterBottom
            >
              {`hace ${getFormatDistanceToNow(create)}`}
            </Typography>
          </CardActions>
        </CardActionArea>
        {loadingEntry === _id ? <LinearProgress /> : null}
      </Card>
    // </Grow>
  );
};

export default EntriesItem;
