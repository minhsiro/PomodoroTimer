import * as React from "react";
import { useContext } from "react";
//let darkMode = localStorage.getItem('darkMode');
import { UserContext } from "../App.js";
export default function Features(props) {

  const [switchTheme,isDark] = useContext(UserContext);



  return (
    <div className="feature-buttons">
      <button className="moon-sun" onClick={() => switchTheme()}>
        {isDark ? <span>&#9790;</span> : <span>&#9788;</span>}</button>
      <button>How to use</button>
      <button onClick={() => props.showForm()}>Set Time</button>

    </div>
  )
}





// React.useEffect(() => {
//   if(darkMode === "enabled") {
//     setDark((isDark) => true);
//     console.log("in");
//   } else {
//     setDark((isDark) => false);
//     console.log("out");

//   }
// },[isDark]);
// // switch Between dark and light theme
// const enableDarkMode = () => {
//   document.body.classList.add("dark");
//   localStorage.setItem("darkMode","enabled");
// }

// const disableDarkMode = () => {
//   document.body.classList.remove("dark");
//   localStorage.setItem("darkMode",null);
//   console.log("in");
// }

// if(darkMode === "enabled") {
//   enableDarkMode();

// } else {
//   disableDarkMode();
// }

// const darkModeToggle = () => {
//   // /setDark(!isDark);
//   darkMode = localStorage.getItem('darkMode');
//   console.log(darkMode);
//   if(darkMode !== "enabled") {
//     enableDarkMode();
//     //console.log("dark");
//   } else  {
//     disableDarkMode();
//     //console.log("light");
//   }
// }