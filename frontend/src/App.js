import React from "react";
import logo from "./logo.svg";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>We're under construction!</p>
        <Contact />
      </header>
    </div>
  );
}

export default App;
