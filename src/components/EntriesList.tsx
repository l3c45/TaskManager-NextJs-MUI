"use client";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";
import { Status } from "@/types";
import { Box, List, ListItem, Paper } from "@mui/material";
import React, { DragEvent, FC, useContext, useMemo } from "react";
import EntriesItem from "./EntriesItem";

type Props = {
  type: Status;
};

const styles={
  border:"1px dashed white",
  opacity:0.4
}

const EntriesList: FC<Props> = ({ type }) => {
  const { entries,updateEntrie } = useContext(EntriesContext);
  const {isDragging,endDragging} = useContext(UIContext)

  const pendingEntries =useMemo(() => entries.filter((entrie) => entrie.status === type) , [entries]) 

  const onDrop=(e:DragEvent)=>{
    
const id=e.dataTransfer.getData("id")

const entrie =entries.find(entrie=>entrie._id===id)!
//console.log(id,"LIST")
entrie.status=type
//console.log(id,"LIST",entrie)
updateEntrie(entrie)
endDragging()
  }
  const allow =(e:DragEvent)=>{
e.preventDefault()
  }

  return (
    <div 
    onDrop={onDrop}
    onDragOver={allow}>
      <Paper
        elevation={2}
        sx={[{ height: "calc(100vh - 220px)", overflowY: "auto",  },isDragging && styles]}
      >
        {pendingEntries.map((entrie,i) => (
          <EntriesItem key={i} {...entrie}></EntriesItem>
        ))}
      </Paper>
    </div>
  );
};

export default EntriesList;
