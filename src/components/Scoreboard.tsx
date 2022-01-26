import React from "react";
import { Card, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { useAppDispatch, useAppSelector } from "../store/rootStore";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  }
});

const Scoreboard = () => {
  const dispatch = useAppDispatch();
  const total = useAppSelector((state) => state.baseClick.totalClicks);

  const classes = useStyles();

  const scoreDisplayElement = (
      <Card className={classes.root} variant="outlined">
        <Typography align="center" variant="h4">
          {total}
        </Typography>
      </Card>
  )

  return scoreDisplayElement;
}

export default Scoreboard;
