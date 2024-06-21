import React, { ReactNode } from "react";
import logo from "./logo.svg";
import "./App.css";

export default function App(): ReactNode {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello React
        </a>
      </header>
    </div>
  );
}
