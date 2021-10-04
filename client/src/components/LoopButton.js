import React, { useState } from "react";
import { Button } from "react-bootstrap";

function LoopButton({ mainLoop, songName }) {
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
      {songName}
    </Button>
  );
}

export default LoopButton;
