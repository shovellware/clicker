import React from "react";
import { useAppDispatch, useAppSelector } from '../../store/rootStore';
import { PrimaryButton, Stack } from "@fluentui/react";

const AutoClick = () => {
  const buttonStyles = {
    width: "30vh", height: "20vh"
  }

  const handleClick = () => {
    console.log('FAB button!!')
  };

  const autoCLickUpgradeButton = (
    <PrimaryButton
      text="Auto-Click"
      onClick={handleClick}
    />
  );

  return autoCLickUpgradeButton
};

export default AutoClick;
