import React from 'react'
import styles from "./Footer.module.css";

const Footer = () => {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <footer className={styles.footer}>
            <span className={styles.info}>© {currentYear} Filip Petrovic</span>
            <div className={styles.links}>
                <a href='https://github.com/FilipPFS' target='_blank'>Github</a>
                <a href='https://www.linkedin.com/in/filip-petrovic-business/' target='_blank'>Linkedin</a>
                <a href='https://x.com/fp__business' target='_blank'>Twitter (X)</a>
            </div>
        </footer>
    )
}

export default Footer