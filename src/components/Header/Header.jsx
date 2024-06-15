import React, { useState } from 'react'
import logoFp from "../../images/logo.webp"
import styles from "./Header.module.css";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logoFp}  alt='logo'/>
            </div>
            <nav className={styles.navDesktop}>
                <Link to="/" className={location.pathname === "/" ? styles.active : styles.notActive}>Home</Link>
                <Link to="/projects" className={location.pathname === "/projects" ? styles.active : styles.notActive}>Projets</Link>
                <Link to="/about" className={location.pathname === "/about" ? styles.active : styles.notActive}>A Propos</Link>
            </nav>
            <nav className={styles.navMobile}>
                <button onClick={() => setOpen(prevOpen => !prevOpen)}>Open</button>
                {open &&
                    <div><Link>Home</Link>
                        <Link>Projets</Link>
                        <Link>A Propos</Link></div>
                }
            </nav>
        </header>
    )
}

export default Header