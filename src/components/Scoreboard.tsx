import React from "react";
import { useAppDispatch, useAppSelector } from "../store/rootStore";
import { Text } from '@fluentui/react';

const Scoreboard = () => {
  const dispatch = useAppDispatch();
  const total = useAppSelector((state) => state.baseClick.totalClicks);


  const scoreDisplayElement = (
    <Text variant="xxLarge">{total}</Text>
  )

  return scoreDisplayElement;
}

export default Scoreboard;
