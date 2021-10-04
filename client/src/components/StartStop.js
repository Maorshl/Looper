import React from "react";
import { Button } from "react-bootstrap";
function StartStop({ mainLoop }) {
  return (
    <>
      <Button
        className="start-stop-button"
        variant="primary"
        onClick={() => {
          mainLoop.start();
        }}
      >
        <i className="bi bi-play"></i>
      </Button>
      <Button
        className="start-stop-button"
        variant="dark"
        onClick={() => {
          mainLoop.stop();
        }}
      >
        <i className="bi bi-stop"></i>
      </Button>
    </>
  );
}

export default StartStop;
