import React from 'react';
import { Grid } from '@material-ui/core';

import AutoClick from './upgrades/AutoClick';

const UpgradeBar = () => {
  return (
    <div>
      <Grid direction="row" spacing={2}>
        <AutoClick />
        <>Item 2</>
        <>Item 3</>
      </Grid>
    </div>
  );
}

export default UpgradeBar;
