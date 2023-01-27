"use client";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";
import { Status } from "@/types";
import { Box, CircularProgress, Paper, useTheme } from "@mui/material";
import React, { DragEvent, FC, useContext, useMemo } from "react";
import EntriesItem from "./EntriesItem";

type Props = {
  type: Status;
};

const styles = {
  border: "1px dashed white",
  opacity: 0.4,
};

const EntriesList: FC<Props> = ({ type }) => {
  const { palette: theme } = useTheme();
  const { loading, entries, updateEntrie } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const pendingEntries = useMemo(
    () => entries.filter((entrie) => entrie.status === type),
    [entries, type]
  );

  const onDrop = (e: DragEvent) => {
    const id = e.dataTransfer.getData("id");

    const entrie = entries.find((entrie) => entrie._id === id)!;
    entrie.status = type;
    updateEntrie(entrie);
    endDragging();
  };
  const allow = (e: DragEvent) => {
    e.preventDefault();
  };

  return (
    <div onDrop={onDrop} onDragOver={allow}>
      <Paper
        elevation={2}
        sx={[
          {
            height: "calc(100vh - 220px)",
            overflowY: "auto",
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              width: "0.4em",
            },
            "&::-webkit-scrollbar-track": {
              background: "#f1f1f1",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#555",
            },
          },
          isDragging && styles,
        ]}
      >
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          pendingEntries.map((entrie, i) => (
            <EntriesItem key={i} {...entrie}></EntriesItem>
          ))
        )}
      </Paper>
    </div>
  );
};

export default EntriesList;
