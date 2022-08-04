import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React TypeScript App</h1>
        <p>
          <a
            className="App-link"
            href="https://www.typescriptlang.org/docs/handbook/react.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React TypeScript
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
