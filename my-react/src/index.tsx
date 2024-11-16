import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import MyHello from "./MyHello";
// import EventBasic from "./EventBasic";
import StateBasic from "./StateBasic";
import StyledPanel from "./StyledPanel";
import TitledPanel from "./TitledPanel";
import ListTemplate from "./ListTemplate";
import StateParent from "./StateParent";
import EventMouse from "./EventMouse";
import EventPoint from "./EventPoint";
import StateForm from "./StateForm";

const books = [
  { isbn: "a", title: "aaa" },
  { isbn: "b", title: "bbb" },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyHello myName="aaa" myNum={1} /> */}
    {/* <EventBasic type="time" /> */}
    {/* <StateBasic init={0} /> */}
    {/* <StyledPanel>
      <p>メンバー募集中</p>
      <p>ようこそ</p>
    </StyledPanel> */}
    {/* <TitledPanel
      title={<p>メンバー募集中</p>}
      body={<p>ようこそ</p>}
    ></TitledPanel> */}
    {/* <ListTemplate src={books}>
      {(elem) => (
        <>
          <dt>
            <a
              href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}
            >
              {elem.title}
            </a>
          </dt>
        </>
      )}
    </ListTemplate> */}
    {/* <StateParent /> */}
    {/* <EventMouse
      alt="ロゴ"
      beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
      afterSrc="https://www.web-deli.com/image/home_chara.gif"
      errorSrc="..."
    /> */}
    {/* <EventPoint /> */}
    <StateForm />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

// setInterval(() => {
//   root.render(<p>現在時刻: {new Date().toLocaleString()}</p>);
// }, 1000);
