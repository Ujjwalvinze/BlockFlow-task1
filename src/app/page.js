"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { createContext, useState } from "react";
import { Switch } from "antd";
import darkLogo from "./images/darkLogo.svg";
import lightLogo from "./images/lightLogo.svg";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { motion } from "framer-motion";
import "./Dark.css";
import { Typography } from "@mui/material";

export const ThemeContext = createContext(null);

export default function Home() {
  const [currentLogo, setCurrentLogo] = useState(darkLogo.src);
  const [textTheme, setTextTheme] = useState("dark_theme-text");
  const [backgroundTheme, setBackgroundTheme] = useState(
    "dark_theme-background"
  );
  const [isDarkMode, setDarkMode] = useState(true);

  const [move, setmove] = useState(true);
  const [show, setshow] = useState(false);
  const [value, setvalue] = useState(-800);

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
    <div style={{ height: "100vh" }} class={`${backgroundTheme}`}>
      <header>
        <nav class={`${backgroundTheme} px-4 lg:px-6 py-2.5`}>
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" class="flex items-center">
              <img
                src={currentLogo}
                class="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span
                class={`self-center text-xl font-semibold whitespace-nowrap ${textTheme}`}
              >
                BlockFlow
              </span>
            </a>
            <div
              class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <button class={`${textTheme} block py-4 pr-1 pl-1`}>
                    DOCS
                  </button>
                </li>
                <li>
                  <button class={`${textTheme} block py-4 pr-1 pl-1`}>
                    BLOG
                  </button>
                </li>
                <li>
                  <button class={`${textTheme} block py-4 pr-1 pl-1`}>
                    PRICING
                  </button>
                </li>
                <li>
                  <button class={`${textTheme} block py-4 pr-1 pl-1`}>
                    CONTACT US
                  </button>
                </li>
                <li>
                  {/* <button onClick={toggleTheme} class={`${textTheme} block p py-4 pr-1 pl-1`} >Theme</button> */}
                  <DarkModeSwitch
                    class={`${textTheme} block p py-4 pr-1 pl-1`}
                    checked={isDarkMode}
                    onChange={toggleTheme}
                    size={60}
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="example">
        {show ? (
          <motion.div
            animate={{ y: move ? value : value }}
            transition={{ type: "tween", duration: 1.5 }}
            onClick={() => setmove(!move)}
          ></motion.div>
        ) : null}
      </div>
      <Typography variant="h1" mt={18} className={textTheme}>
        {" "}
        Elevate your development with blockflow
      </Typography>
    </div>
  );
}
