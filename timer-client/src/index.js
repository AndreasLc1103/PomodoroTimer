import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import TimeSelector from "./Components/TimerComponents/ControlComponents/TimeSelector";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.css";

ReactDOM.render(
  <React.StrictMode>
    <TimeSelector typeSelect="workTime" />
    <TimeSelector typeSelect="breakTime" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
