import React, { ReactNode } from "react";
import logo from "./logo.svg";
import "./App.css";

export default function App(): ReactNode {
  const dest = "https://ja.react.dev/";
  const attrs = {
    href: "https://wings.msn.to",
    download: false,
    target: "_blank",
    rel: "help",
  };
  const props = {
    color: "White",
    backgroundColor: "Blue",
    padding: 3,
  };

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
        <p>Tom & Jerry</p>
        <p>Tom &amp; Jerry</p>
        <p>{"ダメな例: Tom &amp; Jerry"}</p>
        <p>{"良い例1: Tom & Jerry"}</p>
        <p>{"良い例2: Tom \u0026 Jerry"}</p>
        <p>{`良い例3: Tom ${String.fromCodePoint(38)} Jerry`}</p>
        <ul>
          <li>{null}</li>
          <li>{true}</li>
          <li>{0}</li>
          <li>{1}</li>
          <li>{String(0)}</li>
        </ul>
      </header>

      {/* double quoteは不要 */}
      <a href={dest + "/docs"}>React本家サイト</a>
      <a {...attrs}>サポートページ</a>

      {/* CSS指定は文字列は不可 */}
      {/* 普通はこの記法は使わずにcssファイルに書く */}
      <p style={props}>プロジェクト</p>
    </div>
  );
}
