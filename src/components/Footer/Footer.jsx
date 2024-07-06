import React from 'react'
import styles from "./Footer.module.css";
import { useSelector } from 'react-redux';

const Footer = () => {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const lightMode = useSelector((state) => state.theme.isLightMode);

    return (
        <footer className={`${styles.footer} ${lightMode ? styles.lightFooter : styles.darkFooter}`}>
            <span className={`${styles.info} ${lightMode ? styles.lightInfo : styles.darkInfo}`}>© {currentYear} Filip Petrovic</span>
            <div className={styles.links}>
                <a className={lightMode ? styles.lightLink : styles.darkLink} href='https://github.com/FilipPFS' target="_blank" rel="noopener noreferrer">Github</a>
                <a className={lightMode ? styles.lightLink : styles.darkLink} href='https://www.linkedin.com/in/filip-petrovic-business/' target="_blank" rel="noopener noreferrer">Linkedin</a>
                <a className={lightMode ? styles.lightLink : styles.darkLink} href='https://x.com/fp__business' target="_blank" rel="noopener noreferrer">Twitter (X)</a>
            </div>
        </footer>
    )
}

export default Footer