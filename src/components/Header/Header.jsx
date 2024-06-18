import React, { useState } from 'react'
import logoFp from "../../images/logo.webp"
import styles from "./Header.module.css";
import { Link, useLocation } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logoFp} alt='logo' />
            </div>
            <nav className={styles.navDesktop}>
                <Link to="/" className={location.pathname === "/" ? styles.active : styles.notActive}>Home</Link>
                <Link to="/projects" className={location.pathname === "/projects" ? styles.active : styles.notActive}>Projets</Link>
                <Link to="/about" className={location.pathname === "/about" ? styles.active : styles.notActive}>A Propos</Link>
            </nav>
            <button className={styles.navBars} onClick={() => setOpen(prevOpen => !prevOpen)}>
                <FontAwesomeIcon icon={faBars} className={styles.barsIcon} />
            </button>
            <nav className={styles.navMobile}>
                {open &&
                    <div className={styles.mobLinks}>
                        <Link to="/" onClick={() => setOpen(prevOpen => !prevOpen)}>Home</Link>
                        <Link to="/projects" onClick={() => setOpen(prevOpen => !prevOpen)}>Projets</Link>
                        <Link to="/about" onClick={() => setOpen(prevOpen => !prevOpen)}>A Propos</Link></div>
                }
            </nav>
        </header>
    )
}

export default Header