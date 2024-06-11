import React from 'react'
import logoFp from "../../images/logo.webp"
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logoFp} />
            </div>
            <nav className={styles.navigation}>
                <Link>Home</Link>
                <Link>Projets</Link>
                <Link>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header