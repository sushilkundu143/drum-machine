# Drum Machine
This is a Drum Machine application built with React and Vite. The project fulfills the user stories required by the FreeCodeCamp Drum Machine Project and is fully functional, allowing users to play different drum sounds by either clicking on the drum pads or pressing specific keys on the keyboard.

## Table of Contents
- Project Overview
- Features
- Technologies Used
- Installation
- Usage
- License
- Project Overview

The Drum Machine is designed to be user-friendly and responsive, offering a virtual drum pad that can be controlled through both mouse clicks and keyboard presses. The app contains 9 drum pads, each associated with a specific sound and key on the keyboard. When a drum pad is triggered, the associated sound is played, and the name of the sound is displayed on the screen.

## User Stories
- I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.
Within #drum-machine I can see an element with a corresponding id="display".
- Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip, and inner text that corresponds to one of the following keys: Q, W, E, A, S, D, Z, X, C.
- Each .drum-pad contains an HTML5 audio element with a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad.
- When I click on a .drum-pad, the audio clip contained in its child audio element is triggered.
- When I press the trigger key associated with each .drum-pad, the corresponding audio clip is triggered.
- When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element.

## Features
- Responsive Design: Works seamlessly on all devices.
- Interactive: Users can trigger sounds by either clicking the drum pads or pressing specific keys.
- Real-time Display: Displays the name of the sound being played.
- Customizable: Easily add or modify sounds by updating the data.json file.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- Vite: A fast and modern build tool for web projects.
- Tailwind CSS: A utility-first CSS framework for styling.
- HTML5 Audio: For embedding and controlling audio playback.
- JavaScript: For logic and interactivity.

## Installation
### Prerequisites
- Node.js and npm installed on your machine.

### Steps
1. Clone the Repository
```git clone https://github.com/yourusername/drum-machine.git
cd drum-machine```

2. Install Dependencies
```npm install```

3. Run the Development Server
```npm run dev```

4. Build for Production
```npm run build```


## Usage
- Playing Sounds: Click on any drum pad or press the associated key (Q, W, E, A, S, D, Z, X, C) on your keyboard.
- Display: The name of the sound will be shown on the screen when a sound is played.