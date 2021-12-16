import "./styles/Main.css";
import List from "./List.js";
import Features from "./features.js";
import * as React from "react";


export default function Main() {
  // localStorage.setItem("state",)

  return (
    <div className="main">
      <div className="session-title">TITLE</div>
      <div className="circular-timer">CIRCULAR</div>
      <div className="progress-bar">
        <div>time ticking</div>
        <div>PROGRESS BAR</div>
      </div>
      <div className="function-container">BUTTONS: play, pause-resume, reset, skip</div>
      <Features/>

      <List/>
    </div>
  )
}




// if(typeof(Storage) !== undefined) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// let user = {'name':'John'};
// sessionStorage.setItem('user', JSON.stringify(user));
// console.log(sessionStorage.getItem('user'));
// let obj = JSON.parse(sessionStorage.user);
// console.log(obj);


// const [state,setState] = React.useState(Number(sessionStorage.clickcount));
// const increment = () => {
//   sessionStorage.clickcount = Number(state) + 1;
//   setState(() => sessionStorage.clickcount);
// }
// const decrement = () => {
//   sessionStorage.clickcount = Number(state) - 1;
//   setState(() => sessionStorage.clickcount);
// }