import React from "react";

function Recording(props) {
  return (
    <>
      <Button
        onClick={() => {
          if (isRecording) {
            setIsRecording(false);
            // MainRecorder.stopTimer(intervalNumber);
          } else {
            setIsRecording(true);
            // setIntervalNumber(MainRecorder.startTimer());
          }
        }}
      >
        {isRecording ? "Stop" : "Record"}
      </Button>
      <Button
        onClick={() => {
          if (isPlayingRecording) {
            MainLoop.stop();
            setIsPlayingRecording(false);
          } else {
            MainRecorder.playRecording(MainLoop);
            setIsPlayingRecording(true);
          }
        }}
      >
        {isPlayingRecording ? "Stop Recording" : "Play Recording"}
      </Button>
    </>
  );
}

export default Recording;
