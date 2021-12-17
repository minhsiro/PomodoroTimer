import "./styles/Main.css";
import List from "./components/List.js";
import Features from "./components/features.js";
import * as React from "react";


export default function Main() {
  const [distance,setDistance] = React.useState(30);
  const [state,setState] = React.useState(false);
    React.useEffect(()=>{
      console.log("ok1");
      let x;
      if(state === true){
        x = setInterval(()=>{
        setDistance((distance) => distance+1);

        },1000);
        if(distance  === 35){
          setState((state) => !state);
          console.log(state);
        }
      }


      return () => clearInterval(x);
    },[state,distance]);

  const toggle = () => {
    setState((state) => !state);
  }



  const ShowForm = () => {
    document.getElementsByClassName("form-div")[0].style.display = "block";
  }

  const hideForm = () => {
    document.getElementsByClassName("form-div")[0].style.display = "none";
  }

  return (
    <div className="main">
      <div className="session-title">TITLE</div>
      <div className="circular-timer">CIRCULAR</div>
      <div className="progress-bar">
        <div id="demo">{distance}</div>
        <div>PROGRESS BAR</div>
      </div>
      <div className="play-btn">BUTTONS: play, pause-resume, reset, skip
        <button onClick={() => toggle()}>play</button>
      </div>

      <button className="add-btn" onClick={() => ShowForm()}>Add</button>
      <AddNewClockForm hideForm={hideForm}/>
      <Features/>
      <List/>
    </div>
  )
}

function AddNewClockForm(props) {
  const [title,setTitle] = React.useState("Pomodoro");
  const [session,setSession] = React.useState(25);
  const [Break,setBreak] = React.useState(5);
  const [goal,setGoal] = React.useState(4);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("prevented");
  }

  const addSessionTime = () => {
    if(session < 90){
      setTimeout(setSession(session+5),200);
    }
  }
  const subtractSessionTime = () => {
    if(session > 25){
      setTimeout(setSession(session-5),200);
    }
  }

  const addBreakTime = () => {
    if(Break < 30){
      setBreak(Break+5);
    }
  }
  const subtractBreakTime = () => {
    if(Break > 5){
      setBreak(Break-5);
    }
  }

  const addGoal = () => {
    if(goal < 10){
      setGoal(goal+1);
    }
  }
  const subtractGoal = () => {
    if(goal > 1){
      setGoal(goal-1);
    }
  }


  return (
    <div className="form-div">
    <button className="close-form" onClick={() => props.hideForm()}>X</button>
    <form onSubmit={handleSubmit}>

      <div className="set-title">
      <label> Session Title:</label>
      <input type="text" className="" pattern="[a-zA-Z0-9]{6,20}" defaultValue={"Pomodoro"} required
          size={15} maxLength={20} onChange={(e) => setTitle(e.target.value)}/>
      <br/>
      </div>
      <div className="set-time-break-goal">
      <div className="time">
      <p>Session</p>
      <div>
          <button onClick={addSessionTime}>▲</button>
          {session}
          <button onClick={subtractSessionTime}>▼</button>
        </div>
      </div>

      <div className="break">
      <p>Break</p>
      <div>
          <button onClick={addBreakTime}>▲</button>
          {Break < 10 ? "0" + Break : Break}
          <button onClick={subtractBreakTime}>▼</button>
        </div>
      </div>

      <div className="goal">
      <p>Goal</p>
      <div>
          <button onClick={addGoal}>▲</button>
          {goal < 10 ? "0" + goal : goal}
          <button onClick={subtractGoal}>▼</button>
        </div>
      </div>
      </div>
      <input type="submit" className="submit-btn" pattern=""/>
    </form>
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