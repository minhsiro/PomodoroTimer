

export const initialState = {
  ClockInfo: {
    title: "Pomodoro",
    session: 25,
    break: 5,
    goal: 4,
    count: 0,
    isSessionActive: false,
    isBreakActive: false,
    displayMinute: 25,
    displaySecond: 0,
    counter: 0
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
      newState.ClockInfo.isSessionActive = !state.ClockInfo.isSessionActive;
      return newState;
    }
    case "COUNT":{
      const newState = JSON.parse(JSON.stringify(state));
      newState.ClockInfo.counter = newState.ClockInfo.displayMinute * 60 + newState.ClockInfo.displaySecond -1;
      newState.ClockInfo.displayMinute = Math.floor(newState.ClockInfo.counter /60 % 60);
      newState.ClockInfo.displaySecond = Math.floor(newState.ClockInfo.counter  % 60);
      console.log(newState.ClockInfo.counter);

      console.log(newState.ClockInfo.displayMinute, newState.ClockInfo.displaySecond);

      return newState;
    }
    case "SET_TIME":{
      const newState = JSON.parse(JSON.stringify(state));
      newState.ClockInfo.displayMinute = newState.ClockInfo.session;
      newState.ClockInfo.displaySecond = 0;
      return newState;
    }
    default:
      return state;
  }

}