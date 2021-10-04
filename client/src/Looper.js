import funk from "./sounds/electric guitar coutry slide 120bpm - B.mp3";
import stutter from "./sounds/120_stutter_breakbeats_16.mp3";
import bass from "./sounds/Bass Warwick heavy funk groove on E 120 BPM.mp3";

const _1 = new Audio(funk);
// _1.loop = true;
const _2 = new Audio(stutter);
// _2.loop = true;
const _3 = new Audio(bass);
// _3.loop = true;

export default class Looper {
  constructor() {
    this.playlist = {
      _1,
      _2,
      _3,
    };
    this.active = [];
  }
  stop() {
    for (let current of this.active) {
      current.pause();
      current.currentTime = 0;
    }
  }
  start() {
    console.log(this.active);
    for (let current of this.active) {
      current.play();
    }
  }
}
