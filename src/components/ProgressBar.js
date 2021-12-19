import * as React from "react";
export default function ProgressBar(props) {
  // => 25 minutes in seconds
  const [isMouseDown,setMouse] = React.useState(false);
  const [isSkip,setSkip] = React.useState(false);

  const handleMouse = () => {
    setMouse((isMouseDown) => !isMouseDown);
    console.log(isMouseDown);
  }


  React.useEffect(() => {
    let x;
    if (props.state.isSessionActive || props.state.isBreakActive){
      x = setInterval(() => {
        props.handleCount();

      },1000);
    }

    return () => clearInterval(x);
  },[props.state.isSessionActive, props.state.isBreakActive]);


  return (
    <div className="progress-bar">
      <div className="clock">
      { props.state.displayMinute < 10 ? "0" + props.state.displayMinute : props.state.displayMinute}:
      {props.state.displaySecond < 10 ? "0" + props.state.displaySecond : props.state.displaySecond}
      </div>
      <div className="session-break">{(props.state.countSession > props.state.countBreak) ?
      "Break" : "Session"}</div>
      <div className="goal-count">{props.state.countSession} of {props.state.goal}</div>

      <div id="my-progress">
        <div id="bar" style={{width:`${(props.state.progressCount/((props.state.isSessionActive ?props.state.session : props.state.break)*60) * 100)}%`}}></div>
      </div>


      <div className="play-stop-buttons">
      <button
        title="Play/Stop"
        id="play-stop"
        className={`${isMouseDown ? "on-mouse-down" : "on-mouse-up"}`}
        onMouseUp={handleMouse}
        onMouseDown={handleMouse}
        onClick={() => props.handlePlay()}>
        <span>&#x23F5;/&#x23F8;</span>
      </button>
      <button
        title="Reset"
        id="reset"
        onClick={() => props.handleReset()}><span>&#8634;</span></button>
      <button
        title="Skip a Break"
        id="skip"
        onClick={() => {
          props.handleSkip();
          if (props.state.countSession !== 0) {
            setSkip((isSkip) => !isSkip);
            setTimeout(() => setSkip((isSkip) => !isSkip),2900);
          }
          }}>
          <span>&#x23ED;</span></button>
    </div>
    <div className={`${isSkip ? "snackbar-show" : "snackbar-hidden"}`} >You just skip a break.</div>
    </div>
  )
}