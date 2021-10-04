import "../style/App.css";
import Looper from "../Looper";
import { Button, Container, Row, Col } from "react-bootstrap";
import LoopButton from "./LoopButton";
const songsNames = ["_1", "_2", "_3", "_4", "_5", "_6", "_7", "_8", "_9"];

function App() {
  const MainLoop = new Looper();

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Container>
        <Row lg={3} md={3}>
          {songsNames.map((name, i) => {
            return (
              <Col key={i}>
                <LoopButton mainLoop={MainLoop} songName={name}></LoopButton>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Button
        className="start-stop-button"
        variant="secondary"
        onClick={() => {
          MainLoop.start();
        }}
      >
        <i className="bi bi-play"></i>
      </Button>
      <Button
        className="start-stop-button"
        variant="secondary"
        onClick={() => {
          MainLoop.stop();
        }}
      >
        <i className="bi bi-stop"></i>
      </Button>
    </div>
  );
}

export default App;
