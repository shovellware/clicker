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

  const clickable = (
    <Button
      variant="contained"
      color="primary"
      onClick={() => { handleClick() }}
    >
      +1
    </Button>
  );

  return clickable;
}

export default MainButton;