import "../style/App.css";
import Looper from "../Looper";
import { Button } from "react-bootstrap";
import LoopButton from "./LoopButton";

const songsNames = ["_1", "_2", "_3", "_4", "_5", "_6", "_7", "_8", "_9"];

function App() {
  const MainLoop = new Looper();

  return (
    <div className="App">
      <h1>Hello World</h1>
      {songsNames.map((name, i) => {
        return (
          <LoopButton key={i} mainLoop={MainLoop} songName={name}></LoopButton>
        );
      })}
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
