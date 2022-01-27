import { Button, TextField } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "../store/rootStore";
import { increment } from "../store/unlocks/baseClick";
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
    <Button
      variant="contained"
      color="primary"
      size="large"
      style={buttonStyles}
      onClick={() => handleClick() }
    >
      +1
    </Button>
  );

  return buttonElement;
}

export default MainButton;