// import { useState } from "react";
import "../style/App.css";
import Looper from "../classes/Looper";
// import Recorder from "../classes/Recorder";
import { Container, Row, Col } from "react-bootstrap";
import LoopButton from "./LoopButton";
import acoustic from "../style/images/1-acoustic guitar.svg";
import violoncello from "../style/images/5-violoncello.svg";
import amp from "../style/images/7-amp.svg";
import conga from "../style/images/13-conga.svg";
import dj from "../style/images/29-dj mixer.svg";
import drumSet from "../style/images/42-drum set.svg";
import bagpipes from "../style/images/46- bagpipes.svg";
import synthesizer from "../style/images/30-synthesizer.svg";
import drum from "../style/images/22-drum.svg";
import StartStop from "./StartStop";
import Title from "./Title";

const songsNames = [
  { name: "_1", icon: acoustic },
  { name: "_2", icon: amp },
  { name: "_3", icon: violoncello },
  { name: "_4", icon: dj },
  { name: "_5", icon: drumSet },
  { name: "_6", icon: conga },
  { name: "_7", icon: synthesizer },
  { name: "_8", icon: drum },
  { name: "_9", icon: bagpipes },
];

function App() {
  const MainLoop = new Looper();
  // const MainRecorder = new Recorder();
  // const [isRecording, setIsRecording] = useState(false);
  // const [isPlayingRecording, setIsPlayingRecording] = useState(false);

  return (
    <div className="App">
      <Title />
      <Container>
        <Row lg={3} md={3}>
          {songsNames.map((sound, i) => {
            return (
              <Col key={i}>
                <LoopButton
                  // recorder={MainRecorder}
                  // isRecording={isRecording}
                  mainLoop={MainLoop}
                  songName={sound.name}
                  icon={sound.icon}
                ></LoopButton>
              </Col>
            );
          })}
        </Row>
      </Container>
      <StartStop mainLoop={MainLoop} />
    </div>
  );
}

export default App;
