import "./styles/Main.css";
import Features from "./components/features.js";
import ProgressBar from "./components/ProgressBar.js";
import { reducer, initialState } from "./components/State.js";
import AddNewPomo from "./components/AddNewPomo.js";
import Slides from "./components/Slides.js";
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
      <Slides/>
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