import * as React from "react";
export default function ProgressBar(props) {
  // => 25 minutes in seconds

  React.useEffect(() => {
    let x;
    if (props.state.isSessionActive){
      console.log("ok");
      x = setInterval(() => {
        props.handleCount();
      },1000);
    }
    return () => clearInterval(x);
  },[props.state.isSessionActive]);


  return (
    <div className="progress-bar">
      <div className="clock">{ props.state.displayMinute}:{props.state.displaySecond < 10 ? "0" + props.state.displaySecond : props.state.displaySecond}</div>
      <div className="goal-count">{props.state.count} of {props.state.goal}</div>

      <div id="my-progress">
        <div id="bar"></div>
      </div>


      <div className="play-stop-buttons">
      <button onClick={() => props.handlePlay()}><span>&#x23F5;/&#x23F8;</span></button>
      <button onClick={() => {}}><span>&#8634;</span></button>
      <button onClick={() => {}}><span>&#x23ED;</span></button>

    </div>
    </div>
  )
}