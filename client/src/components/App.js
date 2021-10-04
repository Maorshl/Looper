import "../style/App.css";
import Looper from "../Looper";
import { Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";

function App() {
  const MainLoop = new Looper();
  const [button1, setButton1] = useState(false);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Button
        variant={button1 ? "secondary" : "primary"}
        onClick={() => {
          MainLoop.addLoop("_1");
        }}
      >
        Funk
      </Button>
      <Button
        onClick={() => {
          MainLoop.addLoop("_2");
        }}
      >
        Bass
      </Button>
      <Button
        onClick={() => {
          MainLoop.addLoop("_3");
        }}
      >
        Strutter
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          MainLoop.start();
        }}
      >
        start
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          MainLoop.stop();
        }}
      >
        stop
      </Button>
    </div>
  );
}

export default App;
