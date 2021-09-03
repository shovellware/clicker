import { Button, TextField } from "@material-ui/core";
import React from "react";

const MainButton = (props) => {
  const {
    total,
    mainClick
  } = props;
  
  const handleClick = () => {
    mainClick()
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