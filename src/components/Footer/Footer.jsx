import React from "react";
import styles from "./Footer.module.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const lightMode = useSelector((state) => state.theme.isLightMode);

    return (
        <footer
            className={`${styles.footer} ${lightMode ? styles.lightFooter : styles.darkFooter
                }`}
        >
            <section className={styles.icons}>
                <a
                    href="https://github.com/FilipPFS"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        className={`${styles.icon} ${lightMode ? styles.lightIcon : styles.darkIcon
                            }`}
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/filip-petrovic-business/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Linkedin"
                >
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className={`${styles.icon} ${lightMode ? styles.lightIcon : styles.darkIcon
                            }`}
                    />
                </a>
                <a
                    href="https://x.com/fp__business"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                >
                    <FontAwesomeIcon
                        icon={faTwitter}
                        className={`${styles.icon} ${lightMode ? styles.lightIcon : styles.darkIcon
                            }`}
                    />
                </a>
            </section>
            <span
                className={`${styles.info} ${lightMode ? styles.lightInfo : styles.darkInfo
                    }`}
            >
                © {currentYear} Filip Petrovic
            </span>
        </footer>
    );
};

export default Footer;
