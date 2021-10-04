import guitar from "./sounds/electric guitar coutry slide 120bpm - B.mp3";
import stutter from "./sounds/120_stutter_breakbeats_16.mp3";
import bass from "./sounds/Bass Warwick heavy funk groove on E 120 BPM.mp3";
import funk from "./sounds/120_future_funk_beats_25.mp3";
import fud from "./sounds/FUD_120_StompySlosh.mp3";
import groove from "./sounds/GrooveB_120bpm_Tanggu.mp3";
import maze from "./sounds/MazePolitics_120_Perc.mp3";
import groove1 from "./sounds/PAS3GROOVE1.03B.mp3";
import synth from "./sounds/SilentStar_120_Em_OrganSynth.mp3";

const _1 = new Audio(guitar);
const _2 = new Audio(stutter);
const _3 = new Audio(bass);
const _4 = new Audio(funk);
const _5 = new Audio(fud);
const _6 = new Audio(groove);
const _7 = new Audio(maze);
const _8 = new Audio(groove1);
const _9 = new Audio(synth);

export default class Looper {
  constructor() {
    this.playlist = {
      _1,
      _2,
      _3,
      _4,
      _5,
      _6,
      _7,
      _8,
      _9,
    };
    this.active = [];
    this.first = true;
  }
  stop() {
    for (let current of this.active) {
      current.pause();
      current.currentTime = 0;
    }
  }

  start() {
    for (let current of this.active) {
      current.play();
    }
  }

  addLoop(song) {
    if (!this.active.length) {
      this.playlist[song].addEventListener("ended", () => {
        this.stop();
        this.start();
      });
    }

    if (this.active.indexOf(this.playlist[song]) === -1) {
      this.active.push(this.playlist[song]);
    } else if (
      this.active.indexOf(this.playlist[song]) === 0 &&
      this.active.length > 1
    ) {
      this.removeLoop(song);
      this.active[0].addEventListener("ended", () => {
        this.stop();
        this.start();
      });
    } else if (
      this.active.indexOf(this.playlist[song]) === 0 &&
      this.active.length === 1
    ) {
      this.removeLoop(song);
      this.first = true;
    } else this.removeLoop(song);
    if (this.active.length === 1 && this.first) {
      this.start();
      this.first = false;
    }
  }

  removeLoop(song) {
    const index = this.active.indexOf(this.playlist[song]);
    this.active[index].pause();
    this.active[index].currentTime = 0;
    if (index > -1) {
      this.active.splice(index, 1);
    }
    if (!this.active.length) {
      this.first = true;
    }
  }
}
