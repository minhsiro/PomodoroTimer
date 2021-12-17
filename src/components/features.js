let darkMode = localStorage.getItem('darkMode');

export default function Features(props) {


  return (
    <div className="feature-buttons">
      <button onClick={() => darkModeToggle()}>Dark Mode</button>
      <button>How to use</button>
    </div>
  )
}



  // switch Between dark and light theme
const enableDarkMode = () => {
  document.body.classList.add("dark");
  localStorage.setItem("darkMode","enabled");
}

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("darkMode",null);
}

if(darkMode === "enabled") {
  enableDarkMode();
} else {
  disableDarkMode();
}

const darkModeToggle = () => {
  darkMode = localStorage.getItem('darkMode');

  if(darkMode !== "enabled") {
    enableDarkMode();
    console.log("dark");

  } else  {
    disableDarkMode();
    console.log("light");

  }
}


