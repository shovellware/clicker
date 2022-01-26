import { Grid } from '@material-ui/core';
import React from 'react';
import MainButton from './MainButton';
import Scoreboard from './Scoreboard';

const App = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      spacing={1}
      style={{ minHeight: "65vh"}}
    >
      <Grid item>
        <Scoreboard />
      </Grid>
      <Grid item>
        <MainButton />
      </Grid>
    </Grid>
  )
}

export default App;
