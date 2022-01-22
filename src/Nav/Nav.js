import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {

  const [theme, setTheme] = useState()

  useEffect(() => {
    // TODO:
    // Detect browser theme and use if nothing has been previously selected
    const previouslySelectedTheme = localStorage.getItem('theme');
    setTheme(previouslySelectedTheme);
    
    // default theme is defined in the index.html via a "dark" class on the body tag
    // if the theme was last changed to "light", then update body's class accordingly
    if (previouslySelectedTheme === 'dark') {
      document.body.classList.replace('light', 'dark');
    }
  }, [])

  const toggleTheme = (selectedTheme) => {
    if (selectedTheme === "light") {
      localStorage.setItem("theme", "light");
      document.body.classList.replace('dark', 'light');
      setTheme("light");
    } else if (selectedTheme === "dark") {
      localStorage.setItem("theme", "dark");
      document.body.classList.replace('light', 'dark');
      setTheme("dark");
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar-items">
      <li className="navbar-item">
          <a href="#">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#">Contact</a>
        </li>
        <li className="navbar-item has-dropdown">
          <a href="#">Theme</a>
          <ul className="dropdown">

            {/* TODO: clean up, make into separate component to reduce duplicated text  */}
            <li className={`dropdown-item ${theme === 'dark' ? " selected" : ""}`} onClick={() => toggleTheme('dark')}>
              <a id="dark" href="#" >
                dark
              </a>
            </li>
            <li className={`dropdown-item ${theme === 'light' ? " selected" : ""}`} onClick={() => toggleTheme('light')}>
              <a id="light" href="#">
                light
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
