import { Grid } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import MainButton from './MainButton';

function App() {
  const [total, setTotal] = useState(0)
  console.log(total);

  const mainClick = () => {
    setTotal(total + 1)
  }


    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={1}
        style={{ minHeight: "65vh"}}
      >
        <Grid item>
          <MainButton total={total} mainClick={mainClick} />
        </Grid>
      </Grid>
    )
}

export default App;
