"use client";
import React from "react";
import { createContext, useState } from "react";
import darkLogo from "../images/darkLogo.svg";
import lightLogo from "../images/lightLogo.svg";
import "../Dark.css";

export const GlobalThemeContext = createContext(null);

export const AppThemeContext = (props)=> {
  const [currentLogo, setCurrentLogo] = useState(darkLogo.src);
  const [textTheme, setTextTheme] = useState("dark_theme-text");
  const [backgroundTheme, setBackgroundTheme] = useState(
    "dark_theme-background"
  );
  const [isDarkMode, setDarkMode] = useState(true);

  const [move, setmove] = useState(true);
  const [show, setshow] = useState(true);
  const [value, setvalue] = useState(50);

  const toggleTheme = () => {
    if (show) {
      if (value === -800) {
        setvalue(50);
      } else {
        setvalue(-800);
      }
    } else {
      setshow(true);
    }
    setTimeout(changeTheme, 1300);
  };

  const changeTheme = () => {
    if (!isDarkMode) {
      setTextTheme("dark_theme-text");
      setBackgroundTheme("dark_theme-background");
      setCurrentLogo(darkLogo.src);
      setDarkMode(true);
    } else {
      setTextTheme("light_theme-text");
      setBackgroundTheme("light_theme-background");
      setCurrentLogo(lightLogo.src);
      setDarkMode(false);
    }
  };

  return (
    <GlobalThemeContext.Provider value={{toggleTheme,backgroundTheme,textTheme,currentLogo,isDarkMode,move,value,show}}>
        {props.children}
    </GlobalThemeContext.Provider>
  );
}
