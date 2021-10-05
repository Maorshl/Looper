export default class Recorder {
  constructor() {
    this.moves = [];
    this.timer = 0;
    this.interval = null;
  }

  startTimer() {
    return setInterval(() => {
      this.timer++;
      console.log(this.timer);
    }, 1000);
  }

  stopTimer(interval) {
    clearInterval(interval);
    this.moves.push(this.timer);
    this.timer = 0;
    console.log(this.moves);
    console.log(this.timer);
    this.addMove();
    console.log(this);
  }

  addMove(move, songName) {
    if (this.moves.length) {
      const delay = new Date() - this.moves[this.moves.length - 1].time;
      const payload = {
        songName,
        move,
        time: delay,
      };
      this.moves.push(payload);
    } else {
      const payload = {
        first: true,
        songName,
        move,
        time: new Date(),
      };
      this.moves.push(payload);
    }
    localStorage.setItem("recording", JSON.stringify(this.moves));
    console.log(this.moves);
  }

  async playRecording(looper) {
    let recording = localStorage.getItem("recording");
    recording = JSON.parse(recording);
    for (let move of recording) {
      console.log("Playing");
      if (!move.first) {
        await new Promise((resolve) =>
          setTimeout(() => {
            looper.addLoop(move.songName);
            resolve();
          }, move.time)
        );
      } else {
        looper.addLoop(move.songName);
      }
    }
  }
}
