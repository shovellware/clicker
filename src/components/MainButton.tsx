import React from "react";

const MainButton = () => {
  const printToConsole = () => (
    console.log("this is how you invoke a method")
  );

  printToConsole();

  const clickable = (
    <h2>Button Here</h2>
  );

  return clickable;
}

export default MainButton;