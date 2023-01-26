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

const EntriesItem: FC<Entry> = ({ _id,  description, create }) => {
  const router = useRouter();

  const { startDragging, endDragging, loadingToEntry, loadingEntry } =
    useContext(UIContext);

  const onDragStart = (e: DragEvent) => {
    startDragging();

    e.dataTransfer.setData("id", _id);
  };

  const onDragEnd = () => {
    endDragging();
  };
  const navigate = () => {
    loadingToEntry(_id);
    router.push(`entry/${_id}`);
  };

  return (
    // <Grow in={true}>
      <Card
        onClick={navigate}
        draggable
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        sx={{
          margin: "5px",
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
