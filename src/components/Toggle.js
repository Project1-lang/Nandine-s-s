import "./App.css";
import { Button, Container, InputGroup } from "reactstrap";
import { ThemeContext, themes } from "./contexts/ThemeContext";
import React from "react";
import { useState } from "react";
import ToggleDark from "./components/toggleDark";

function Toggle() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-warning">Dark/Light mode</h1>
        <InputGroup>
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <Button
                color="link"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? '.light' : '.dark');
                }}
              >
                <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
                <span className="d-lg-none d-md-block">Switch mode</span>
              </Button>
            )}
          </ThemeContext.Consumer>
        </InputGroup>{" "}
        
      </header>
    </div>
  );
}

export default Toggle;
