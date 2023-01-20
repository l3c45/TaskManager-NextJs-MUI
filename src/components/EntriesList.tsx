"use client";
import { EntriesContext } from "@/context/entries";
import { Status } from "@/types";
import { Box, List, ListItem, Paper } from "@mui/material";
import React, { FC, useContext, useMemo } from "react";
import EntriesItem from "./EntriesItem";

type Props = {
  type: Status;
};

const EntriesList: FC<Props> = ({ type }) => {
  const { entries } = useContext(EntriesContext);

  const pendingEntries =useMemo(() => entries.filter((entrie) => entrie.status === type) , [entries]) 


  return (
    <div>
      <Paper
        elevation={2}
        sx={{ height: "calc(100vh - 220px)", overflowY: "auto" }}
      >
        {pendingEntries.map((entrie) => (
          <EntriesItem key={entrie.id} {...entrie}></EntriesItem>
        ))}
      </Paper>
    </div>
  );
};

export default EntriesList;
