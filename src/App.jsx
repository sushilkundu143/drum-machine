import "./App.css";
import sounds from "./sounds/data.json";
import { useState, useEffect } from "react";

function App() {
  const [sound, setSound] = useState(null);

  // Handle click on drum pad
  const handleClick = (e, item) => {
    playSound(item);
    setSound(item);
  };

  // Handle key press
  const handleKeyPress = (e) => {
    const pressedKey = e.key.toUpperCase();
    const item = sounds.find((sound) => sound.key === pressedKey);
    if (item) {
      playSound(item);
      setSound(item);
    }
  };

  // Play sound
  const playSound = (item) => {
    const audioElement = document.getElementById(item.key);
    if (audioElement) {
      audioElement.currentTime = 0; // Rewind to the start
      audioElement.play();
    }
  };

  // Add event listener for key presses
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="h-screen w-full bg-gray-200 flex items-center justify-center">
      <div className="w-1/3 flex bg-gray-300 p-10 items-center justify-center gap-4">
        <div id="drum-machine" className="w-2/3">
          <div className="grid grid-cols-3 gap-4">
            {sounds.map((item) => (
              <div
                className="drum-pad p-6 bg-gray-400 cursor-pointer bg-gray-500 text-white font-semibold rounded shadow-sm hover:bg-gray-600 hover:shadow-md active:bg-gray-700 active:shadow-inner focus:outline-none"
                id={item.item_name}
                key={item.id}
                onClick={(e) => handleClick(e, item)}
              >
                <audio
                  className="h-full w-full clip"
                  id={item.key}
                  src={item.file_path}
                />
                {item.key}
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3">
          <div id="display" className="bg-gray-400 p-4">
            {sound ? sound.name : "Press a key or click a pad"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
