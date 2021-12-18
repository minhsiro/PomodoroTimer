import './styles/Main.css';
import Main from "./Main.js";
import useLocalStorage from 'use-local-storage';
import { createContext } from 'react';
import { useState } from 'react';
export const UserContext = createContext();

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [isDark,setDark] = useState(true);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if(newTheme === "dark") {
      setDark((isDark) => true);
    } else {
      setDark((isDark) => false);
    }
  }
  return (
    // export switchTheme & UserContext to features.js
    <UserContext.Provider value={[switchTheme,isDark]}>
      <div data-theme={theme}>
        <Main/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
