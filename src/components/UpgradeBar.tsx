import React from 'react';
import { Stack } from '@fluentui/react'

import AutoClick from './upgrades/AutoClick';

const UpgradeBar = () => {
  return (
    <Stack>
    <AutoClick />
    <>Item 2</>
    <>Item 3</>
  </Stack>
  );
}

export default UpgradeBar;
