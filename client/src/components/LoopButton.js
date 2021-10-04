import React, { useState } from "react";
import { Button } from "react-bootstrap";

function LoopButton({ mainLoop, songName, icon }) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Button
      className="loop-button"
      variant={isPressed ? "danger" : "success"}
      onClick={() => {
        mainLoop.addLoop(songName);
        setIsPressed((prevState) => !prevState);
      }}
    >
      <img src={icon} alt="musical instrument"></img>
    </Button>
  );
}

export default LoopButton;
