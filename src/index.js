import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

var date = new Date();
var hour = date.getHours();
var greeting;
var cssStyle = {};
if (hour >= 1 && hour < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (hour >= 12 && hour < 20) {
  greeting = "Good Afternoon";
  cssStyle.color = "red";
} else {
  greeting = "Good Night";
  cssStyle.color = "black";
}
ReactDOM.render(
  <>
    <div className="label">
      <h1>
        {" "}
        Hey Sir, <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
