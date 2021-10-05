import guitar from "../sounds/electric guitar coutry slide 120bpm - B.mp3";
import stutter from "../sounds/120_stutter_breakbeats_16.mp3";
import bass from "../sounds/Bass Warwick heavy funk groove on E 120 BPM.mp3";
import funk from "../sounds/120_future_funk_beats_25.mp3";
import fud from "../sounds/FUD_120_StompySlosh.mp3";
import groove from "../sounds/GrooveB_120bpm_Tanggu.mp3";
import maze from "../sounds/MazePolitics_120_Perc.mp3";
import groove1 from "../sounds/PAS3GROOVE1.03B.mp3";
import synth from "../sounds/SilentStar_120_Em_OrganSynth.mp3";

// Turning the audio files to audio objects.
const _1 = new Audio(guitar);
const _2 = new Audio(stutter);
const _3 = new Audio(bass);
const _4 = new Audio(funk);
const _5 = new Audio(fud);
const _6 = new Audio(groove);
const _7 = new Audio(maze);
const _8 = new Audio(groove1);
const _9 = new Audio(synth);

// The looper class should control all the looping actions and logic about the sounds.
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
    this.active = []; // the active songs to played in the next cycle.
    this.first = true;
  }

  // stop method to stop all active sounds immediately, and rewind to the start.
  stop() {
    for (let current of this.active) {
      current.pause();
      current.currentTime = 0;
    }
  }

  // start method to start playing all of the active sounds.
  start() {
    for (let current of this.active) {
      current.play();
    }
  }

  // the add loop method to add a sound to next loop or if it is already in the loop remove it.
  addLoop(song) {
    // If its the first sound adding an event listener, when the cycle ends to start over.
    if (!this.active.length) {
      this.playlist[song].addEventListener("ended", () => {
        this.stop();
        this.start();
      });
    }
    // If the sound is not active, push to active.
    if (this.active.indexOf(this.playlist[song]) === -1) {
      this.active.push(this.playlist[song]);
    } else if (
      // else if the sound is the first but not the only one
      this.active.indexOf(this.playlist[song]) === 0 &&
      this.active.length > 1
    ) {
      this.removeLoop(song); // remove the sound from active
      this.active[0].addEventListener("ended", () => {
        // adds a new event listener to the new first (for the loop to go on)
        this.stop();
        this.start();
      });
    } else if (
      // else if its the first and only one
      this.active.indexOf(this.playlist[song]) === 0 &&
      this.active.length === 1
    ) {
      this.removeLoop(song); // remove from active.
      // this.first = true; // sets first to true. to know in the next time to immediately start to play.
    } else this.removeLoop(song);
    if (this.active.length === 1 && this.first) {
      // if it is the first one added start playing.
      this.start();
      this.first = false; // sets first to false to know next time not to play immediately.
    }
  }

  // Remove loop method to remove a sound from active and stop and rewind it.
  removeLoop(song) {
    const index = this.active.indexOf(this.playlist[song]); // index in the active to remove
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
