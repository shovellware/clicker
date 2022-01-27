import { Grid, Box } from '@material-ui/core';
import React from 'react';
import MainButton from './MainButton';
import Scoreboard from './Scoreboard';
import AutoClick from './upgrades/AutoClick';
import UpgradeBar from './UpgradeBar';

const App = () => {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: '30px', minHeight: '100vh', minWidth: '95vw' }}>
      <Grid
        container
        spacing={8}
        justifyContent="space-between"
        alignItems="center"
        direction="column"
      >

        <Grid item>
          <Scoreboard />
        </Grid>
        <Grid item>
          <UpgradeBar />
        </Grid>
        <Grid item>
          <MainButton />
        </Grid>

      </Grid>
    </Box>
  )
}

export default App;
