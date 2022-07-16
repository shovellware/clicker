import { useAppDispatch, useAppSelector } from "../store/rootStore";
import { increment } from "../store/upgrades/baseClick";
import { PrimaryButton } from "@fluentui/react";
import React from "react";

interface MainButtonProps {
  
}

const MainButton = (props: MainButtonProps) => {
  const dispatch = useAppDispatch();
  
  const handleClick = () => {
    dispatch(increment());
  }

  const buttonStyles = {
    width: "30vh", height: "20vh"
  }

  const buttonElement = (
    <PrimaryButton
      text="+1"
      onClick={handleClick}
      styles={{ root: { ...buttonStyles } }}

      // Arrow function over reference like above is preference
      // The below can be used to implement the handler within JSX
      // without the need for a function declaration elsewhere
      // onClick={() => handleClick()}
    />
  )

  return buttonElement;
}

export default MainButton;