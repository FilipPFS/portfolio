import React, { useState } from "react";
import logoFp from "../../images/logo.webp";
import darkLogo from "../../images/darkLogo.png";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../feautures/themeSlice";
import Switch from "../Switch/Switch";

const Header = () => {
  const lightMode = useSelector((state) => state.theme.isLightMode);
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleMode());
  };

  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className={`${styles.header} ${lightMode ? styles.lightHeader : styles.darkHeader}`}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={lightMode ? darkLogo : logoFp} alt="logo" />
        </Link>
      </div>
      <nav
        className={`${styles.navDesktop} ${lightMode ? styles.lightNavDesktop : ""
          }`}
      >
        <Link
          to="/"
          className={
            location.pathname === "/" ? styles.active : styles.notActive
          }
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={
            location.pathname === "/projects" ? styles.active : styles.notActive
          }
        >
          Projets
        </Link>
        <Link
          to="/about"
          className={
            location.pathname === "/about" ? styles.active : styles.notActive
          }
        >
          A Propos
        </Link>
      </nav>
      <div className={styles.switchDesk}>
        <Switch />
      </div>
      <button
        className={styles.navBars}
        onClick={() => setOpen((prevOpen) => !prevOpen)}
      >
        <FontAwesomeIcon icon={faBars} className={`${styles.barsIcon} ${lightMode ? styles.lightBarsIcon : styles.darkBarsIcon}`} />
      </button>

      <nav className={`${styles.navMobile} ${lightMode ? styles.navLightMob : styles.navDarkMob}`}>
        {open && (
          <div className={styles.mobLinks}>
            <Link className={lightMode ? styles.lightLink : styles.darkLink} to="/" onClick={() => setOpen((prevOpen) => !prevOpen)}>
              Home
            </Link>
            <Link className={lightMode ? styles.lightLink : styles.darkLink}
              to="/projects"
              onClick={() => setOpen((prevOpen) => !prevOpen)}
            >
              Projets
            </Link>
            <Link className={lightMode ? styles.lightLink : styles.darkLink} to="/about" onClick={() => setOpen((prevOpen) => !prevOpen)}>
              A Propos
            </Link>
            <div className={styles.switchMob}>
              <Switch />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
