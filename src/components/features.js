import * as React from "react";
import { useContext } from "react";
import { UserContext } from "../App.js";
export default function Features(props) {

  // handle darkMode
  const [switchTheme,isDark] = useContext(UserContext);

  return (
    <div className="feature-buttons">
      <button
        title="Change Theme"
        className="moon-sun"
        onClick={() => switchTheme()}>
        {isDark ? <span>&#9790;</span> : <span>&#9788;</span>}</button>
      <button
        title="How to use"
        onClick={() => props.toggleInstruction()}
        >How to use</button>
      <button
        title="Set new Pomodoro"
        onClick={() => props.showForm()}>Set Time</button>
    </div>
  )
}
