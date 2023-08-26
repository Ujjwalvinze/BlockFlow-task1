"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./Dark.css";
import { Typography } from "@mui/material";
import { Navbar } from "./components/navbar";
import { GlobalThemeContext } from "./context/themeContext";

export default function Home() {
  const val = useContext(GlobalThemeContext);
  const {backgroundTheme,textTheme,move,setmove,value,show} = val;

  return (
    <div style={{ height: "100vh" }} class={`${backgroundTheme}`}>
      <header>
        <Navbar/>
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
      <Typography variant="h1" mt={18} ml={15} className={textTheme}>
        {" "}
        Elevate your development with blockflow
      </Typography>
    </div>
  );
}
