import React, { ReactNode } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class AppClass extends React.Component {
  render(): ReactNode {
    const content = '<img src="https://wings.msn.to/image/wings.jpg" />';

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
            Hello Class Base React Component
          </a>
          {/* エスケープされないので危険 */}
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </header>
      </div>
    );
  }
}
