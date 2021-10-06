# Dance <img alt="monkey in the shape of M" src=.\client\src\style\images\monkey.png/>onkey

## The Idea

- This looper is designed to bring the opportunity to create music to everyone.
- The Idea for the design came from my sister.
  I saw her playing with such apps but the UI was always complex and not easy to understand.
- I tried to keep the design intuitive and friendly, without text or a complex options because
  I assumed that the users would be in the age 4-10.

## The Code

The app is built with React, the main page consists of 9 instruments pads and a play/stop buttons.
behind the React there is a Looper class that handles all the logic and functionality about the looper,
it has a method for each operation needed to play/stop a specific sound or all of them together.

### The Flow

When a pad is pressed it is added to the "active" sounds list. The first sound added gets an event listener
that restarts all the active sounds from the beginning when it is over, and thats how we get the "loop".
When a pad is pressed the second time it is removed from the active sounds and paused immediately. If the removed sound is the first one that was added the looper will add an events listener to the new first sound in the active sounds for the loop to go on.
The start/stop button control all the active sounds together and if pressed it is starting/stopping all of them.

### The Recorder

There is also the Recorder class which I didn't manage to fully making it work in this time.
When the "Record" button is clicked this is what happens:

- Every move is pushed to an array of objects with the sound name pressed and a time gap between each press
- Since the Looper has 1 main method that checks whether to add or remove the sound it is not needed to save the move too.
- The recording array is saved to the user's local storage and is able to be played.
- To play the recording the Recorder is supplied the looper object and runs the moves or wait in the time gaps, in oreder to mimic the user's actions.
