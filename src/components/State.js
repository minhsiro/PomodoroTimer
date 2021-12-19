

export const initialState = {
  ClockInfo: {
    title: "Pomodoro",
    session: 1,
    break: 1,
    goal: 2,
    countSession: 0,
    countBreak:0,
    isSessionActive: false,
    isBreakActive: false,
    displayMinute: 1,
    displaySecond: 0,
    counter: 0,
    progressCount: 1
  },

}

export const reducer = (state, action) => {
  switch(action.type) {
    case "TITLE": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.ClockInfo.title = action.value;
      return newState;
    }
    case "SESSION_INCRE": {
      const newState = JSON.parse(JSON.stringify(state));
      if(newState.ClockInfo.session < 90){
        newState.ClockInfo.session +=5;
      }
      return newState;
    }
    case "SESSION_DECRE": {
      const newState = JSON.parse(JSON.stringify(state));
      if(newState.ClockInfo.session > 1){
        newState.ClockInfo.session -=1;
      }
      return newState;
    }
    case "BREAK_INCRE": {
      const newState = JSON.parse(JSON.stringify(state));
      if(newState.ClockInfo.break < 30){
        newState.ClockInfo.break +=5;
      }
      return newState;
    }
    case "BREAK_DECRE": {
      const newState = JSON.parse(JSON.stringify(state));
      if(newState.ClockInfo.break > 5){
        newState.ClockInfo.break -=5;
      }
      return newState;
    }
    case "GOAL_INCRE": {
      const newState = JSON.parse(JSON.stringify(state));
      if(newState.ClockInfo.goal < 10){
        newState.ClockInfo.goal +=1;
      }
      return newState;
    }
    case "GOAL_DECRE": {
      const newState = JSON.parse(JSON.stringify(state));
      if(newState.ClockInfo.goal > 1){
        newState.ClockInfo.goal -=1;
      }
      return newState;
    }
    case "PLAY":{
      const newState = JSON.parse(JSON.stringify(state));
      if (newState.ClockInfo.countSession === newState.ClockInfo.countBreak) {
        newState.ClockInfo.isSessionActive = !state.ClockInfo.isSessionActive;
      } else if (newState.ClockInfo.countSession > newState.ClockInfo.countBreak) {
        newState.ClockInfo.isBreakActive = !state.ClockInfo.isBreakActive;
      }
      return newState;
    }
    case "COUNT":{
      const newState = JSON.parse(JSON.stringify(state));
      if (state.ClockInfo.isSessionActive) {
        newState.ClockInfo.counter = newState.ClockInfo.displayMinute * 60 +
                                    newState.ClockInfo.displaySecond -1;
        newState.ClockInfo.displayMinute = Math.floor(newState.ClockInfo.counter /60 % 60);
        newState.ClockInfo.displaySecond = Math.floor(newState.ClockInfo.counter  % 60);
        newState.ClockInfo.progressCount +=1;
        // if session time === 0, switch to break
        if (newState.ClockInfo.counter === 0) {
          newState.ClockInfo.isSessionActive = false;
          newState.ClockInfo.countSession += 1;
          newState.ClockInfo.displayMinute = newState.ClockInfo.break;
          newState.ClockInfo.displaySecond = 0;
          newState.ClockInfo.progressCount = 1;
          // reset clock when count === goal
          if (newState.ClockInfo.countSession === newState.ClockInfo.goal){
            newState.ClockInfo.isSessionActive = false;
            newState.ClockInfo.isBreakActive = false;
            newState.ClockInfo.countSession = 0;
            newState.ClockInfo.countBreak = 0;
            newState.ClockInfo.displayMinute = newState.ClockInfo.session;
            newState.ClockInfo.displaySecond = 0;
            newState.ClockInfo.counter = 0;
            newState.ClockInfo.progressCount = 1;
            alert("You have completed all pomodoro sessions!");
          }
        }
      }
      else if (state.ClockInfo.isBreakActive) {
        newState.ClockInfo.counter = newState.ClockInfo.displayMinute * 60 +
                                    newState.ClockInfo.displaySecond - 1;
        newState.ClockInfo.displayMinute = Math.floor(newState.ClockInfo.counter /60 % 60);
        newState.ClockInfo.displaySecond = Math.floor(newState.ClockInfo.counter  % 60);
        newState.ClockInfo.progressCount +=1;
        // if break time === 0, switch to next session
        if (newState.ClockInfo.counter === 0) {
          newState.ClockInfo.isBreakActive = false;
          newState.ClockInfo.countBreak += 1;
          newState.ClockInfo.displayMinute = newState.ClockInfo.session;
          newState.ClockInfo.displaySecond = 0;
          newState.ClockInfo.progressCount = 1;
        }
      }

      return newState;
    }
    case "RESET": {
      const newState = JSON.parse(JSON.stringify(state));
      if (state.ClockInfo.isBreakActive || state.ClockInfo.isSessionActive) {
        console.log("can't reset right now");
      } else {
        const check = window.confirm("Are you sure you want to reset the progress?");
        if (check) {
          newState.ClockInfo.isSessionActive = false;
          newState.ClockInfo.isBreakActive = false;
          newState.ClockInfo.countSession = 0;
          newState.ClockInfo.countBreak = 0;
          newState.ClockInfo.displayMinute = newState.ClockInfo.session;
          newState.ClockInfo.displaySecond = 0;
          newState.ClockInfo.counter = 0;
          newState.ClockInfo.progressCount = 1;
        }

      }
      return newState;
    }
    case "SKIP":{
      const newState = JSON.parse(JSON.stringify(state));
      if(newState.ClockInfo.countSession > newState.ClockInfo.countBreak){
        newState.ClockInfo.isBreakActive = false;
        newState.ClockInfo.countBreak += 1;
        newState.ClockInfo.displayMinute = newState.ClockInfo.session;
        newState.ClockInfo.displaySecond = 0;
        newState.ClockInfo.counter = 0;
        newState.ClockInfo.progressCount = 1;
      }

      return newState;
    }
    case "SET_TIME":{
      const newState = JSON.parse(JSON.stringify(state));
      newState.ClockInfo.isSessionActive = false;
      newState.ClockInfo.isBreakActive = false;
      newState.ClockInfo.countSession = 0;
      newState.ClockInfo.countBreak = 0;
      newState.ClockInfo.displayMinute = newState.ClockInfo.session;
      newState.ClockInfo.displaySecond = 0;
      newState.ClockInfo.counter = 0;
      newState.ClockInfo.progressCount = 1;
      return newState;
    }
    default:
      return state;
  }

}