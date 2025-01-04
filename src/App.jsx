import { useState } from 'react';
import './App.css'
import CommonNavbar from './CommonComponents/Navbar'
import LandingPage from './Pages/LandingPage'
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  
  return (
    <>
      <div
        style={{
          background: theme === "dark"
            ? "linear-gradient(64deg, rgb(1 10 20) 40%, rgb(10 37 75))"
            : "linear-gradient(135deg, #e0f7ff, #f0fbff)",
        }}
      >
        <CommonNavbar theme={theme} toggleTheme={toggleTheme} />
        <LandingPage theme={theme} />
        <AboutMe theme={theme} />
        <Projects theme={theme} />
        {/* <Skills theme={theme} /> */}
        <Contact theme={theme} />
      </div>
    </>
  )
}

export default App
