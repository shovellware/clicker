import { Grid } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import MainButton from './MainButton';
import Scoreboard from './Scoreboard';

const App = () => {
  const [total, setTotal] = useState(0)

  const mainClick = () => {
    setTotal(total + 1)
  }

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
        <Scoreboard total={total} />
      </Grid>
      <Grid item>
        <MainButton total={total} mainClick={mainClick} />
      </Grid>
    </Grid>
  )
}

export default App;
