import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Keyboard from "react-piano-keyboard";

function App() {
  const audioContext = new Audio();

  const soundObject = {
    A: audioContext,
    B: audioContext,
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Keyboard
          keyboardWidth={400}
          classKeyboard={"classKeyboard"}
          classWhiteKeys={"classWhiteKeys"}
          classWhiteKey={"classWhiteKey"}
          classBlackKeys={"classBlackKeys"}
          classBlackKey={"classBlackKey"}
          noteSounds={soundObject}
        />
      </header>
    </div>
  );
}

export default App;
