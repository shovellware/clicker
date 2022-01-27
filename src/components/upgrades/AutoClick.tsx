import React from "react";
import AddIcon from '@material-ui/icons/Add';
import { Button, Fab } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { useAppDispatch, useAppSelector } from '../../store/rootStore';

const AutoClick = () => {
  const buttonStyles = {
    width: "30vh", height: "20vh"
  }

  const handleClick = () => {
    console.log('FAB button!!')
  };

  const purchaseAutoClick = (
    <Fab
      variant="extended"
      color="primary"
      size="small"
      onClick={() => handleClick() }
    >
      <AddIcon />
      Auto-Click
    </Fab>
  );

  return purchaseAutoClick;
};

export default AutoClick;
