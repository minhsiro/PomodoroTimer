import "./styles/Main.css";
import Features from "./components/features.js";
import ProgressBar from "./components/ProgressBar.js";
import { reducer, initialState } from "./components/State.js";

import * as React from "react";


export default function Main() {
  const [state,dispatch] = React.useReducer(reducer,initialState);
  const [isFormShow,setForm] = React.useState(false);


  const ShowForm = () => {
    if (state.ClockInfo.isSessionActive || state.ClockInfo.isBreakActive) {
      alert("cant change while clock is running");
    } else {
      setForm((isFormShow) => !isFormShow);
    }
  }

  const hideForm = () => {
    setForm((isFormShow) => !isFormShow);
  }


  const handle = {
    handleTitleChange: function(event) {
      dispatch({type:"TITLE",value:event.target.value});
      console.log("title changed");
    },
    handleSessionIncre: function() {
      dispatch({type:"SESSION_INCRE"});
    },
    handleSessionDecre: function() {
      dispatch({type:"SESSION_DECRE"});
    },
    handleBreakIncre: function() {
      dispatch({type:"BREAK_INCRE"});
    },
    handleBreakDecre: function() {
      dispatch({type:"BREAK_DECRE"});
    },
    handleGoalIncre: function() {
      dispatch({type:"GOAL_INCRE"});
    },
    handleGoalDecre: function() {
      dispatch({type:"GOAL_DECRE"});
    },
    handleSetTime: function() {
      console.log("changed");
      hideForm();
      if (state.isSessionActive) {
        console.log("cant do it right now");
      } else {
        dispatch({type:"SET_TIME"});
      }
    },
    handleSubmit: function(event) {
      event.preventDefault();
      console.log("prevented");
    }
  }

  const handlePlay = () => {
      dispatch({type:"PLAY"});

  }
  const handleCount = () => {
    dispatch({type:"COUNT"});
  }

  const handleReset = () => {
    dispatch({type:"RESET"});
  }

  const handleSkip = () => {
    dispatch({type:"SKIP"});
  }

  return (
    <div className="main">
      <div className="session-title">{state.ClockInfo.title}</div>
      <ProgressBar state={state.ClockInfo} handlePlay={handlePlay} handleCount={handleCount}
        handleReset={handleReset} handleSkip={handleSkip}
      />
      <AddNewPomo hideForm={hideForm} isFormShow={isFormShow} ClockInfo={state.ClockInfo}
      handle={handle}/>
      <Features showForm={ShowForm}/>
    </div>
  )
}

function AddNewPomo(props) {

  return (
    <div className={`form-div ${props.isFormShow ? 'display' : 'hidden'}`}>
    <button className="close-form" onClick={() => props.hideForm()}>X</button>
    <form onSubmit={props.handle.handleSubmit}>

      <div className="set-title">
      <label> Session Title:</label>
      <input type="text" className="" pattern="[a-zA-Z0-9]{6,20}" defaultValue={"Pomodoro"} required
          size={15} maxLength={20} onChange={(event) => props.handle.handleTitleChange(event)}/>
      <br/>
      </div>
      <div className="set-time-break-goal">
      <div className="time">
      <p>Session</p>
      <div>
          <button type="button" id="add-sesstion-length"
            onClick={() => props.handle.handleSessionIncre()}>▲</button>
          {props.ClockInfo.session < 10 ? "0" + props.ClockInfo.session : props.ClockInfo.session}
          <button type="button" id="reduce-sesstion-length"
            onClick={() =>props.handle.handleSessionDecre() }>▼</button>
        </div>
      </div>

      <div className="break">
      <p>Break</p>
      <div>
          <button type="button" onClick={() => props.handle.handleBreakIncre()}>▲</button>
          {props.ClockInfo.break < 10 ? "0" + props.ClockInfo.break : props.ClockInfo.break}
          <button type="button" onClick={() => props.handle.handleBreakDecre()}>▼</button>
        </div>
      </div>

      <div className="goal">
      <p>Goal</p>
      <div>
          <button type="button" onClick={() => props.handle.handleGoalIncre()}>▲</button>
          {props.ClockInfo.goal < 10 ? "0" + props.ClockInfo.goal : props.ClockInfo.goal}
          <button type="button" onClick={() => props.handle.handleGoalDecre()}>▼</button>
        </div>
      </div>
      </div>
      <button type="button" className="submit-btn" onClick={() => props.handle.handleSetTime()}>submit</button>
    </form>
  </div>
  )
}




// timer logic
// const [distance,setDistance] = React.useState(30);
// const [state,setState] = React.useState(false);
//   React.useEffect(()=>{
//     console.log("ok1");
//     let x;
//     if(state === true){
//       x = setInterval(()=>{
//       setDistance((distance) => distance+1);

//       },1000);
//       if(distance  === 35){
//         setState((state) => !state);
//         console.log(state);
//       }
//     }
//     return () => clearInterval(x);
//   },[state,distance]);

// const toggle = () => {
//   setState((state) => !state);


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