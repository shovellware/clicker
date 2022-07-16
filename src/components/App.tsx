import React from 'react';
import MainButton from './MainButton';
import Scoreboard from './Scoreboard';
import AutoClick from './upgrades/AutoClick';
import UpgradeBar from './UpgradeBar';
import { timer } from '../utilities/timer';
import { IStackStyles, IStackTokens, Stack } from '@fluentui/react';

const App = () => {
  console.log(timer(6))

  const tokens: IStackTokens = {
    childrenGap: 10,
   
  }

  const myStyles: IStackStyles = {
      root: 
        {
          display: "flex",
          justifyContent: "center",
          marginTop: "30vh"
        }
  }

  return (
    <Stack styles={myStyles} horizontal tokens={tokens}>
      <Scoreboard />
      <UpgradeBar />
      <MainButton />
    </Stack>
  );
}

export default App;
