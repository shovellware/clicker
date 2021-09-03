import React from "react";
import { Paper, TextField, Card, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  }
});

function Scoreboard(props) {
  const {
    total
  } = props;

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
