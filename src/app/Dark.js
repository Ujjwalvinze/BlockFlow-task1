import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./../styles/Dark.css";
function Dark() {
  const [move, setmove] = useState(true);
  const [show, setshow] = useState(false);
  const [value, setvalue] = useState(-700);
  const [theme, settheme] = useState("light-theme");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const toggle = () => {
    if (theme === "light-theme") {
      settheme("dark-theme");
    } else {
      settheme("light-theme");
    }
    if (show) {
      if (value === -700) {
        setvalue(700);
      } else {
        setvalue(-700);
      }
    } else {
      setshow(true);
    }
  };
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="example">
            {show ? (
              <motion.div
                animate={{ y: move ? value : value }}
                transition={{ type: "tween", duration: 5 }}
                onClick={() => setmove(!move)}
              ></motion.div>
            ) : null}
          </div>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link to={"/"} className="navbar-brand">
                {" "}
                🛒 Samarth Jain
              </Link>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to={"/"} className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/category"} className="nav-link">
                    Category
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div className="container grid grid-two-column">
            <div className="hero-section-data">
              <h1>Dark Mode</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                id ea ut doloribus voluptatem quis sint cum veniam unde
                adipisci!
              </p>
              <NavLink className="btn" onClick={() => toggle()}>
                Toggle
              </NavLink>
            </div>
          </div>
        </section>
      </main>
      <div className="footer" style={{ padding: "15px", margintop: "50px" }}>
        <h1 className="text-center">Made by Samarth Jain &copy; </h1>
        <p className="text-center mt-3">
          <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
          <Link to="/policy">Privacy Policy</Link>
        </p>
      </div>
    </>
  );
}

export default Dark;
