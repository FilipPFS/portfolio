import React, { useEffect } from 'react'
import styles from './AboutSkills.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faGithub, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';
import { SiCloudinary, SiJsonwebtokens, SiMongodb, SiNextdotjs, SiStripe, SiTailwindcss, SiTypescript } from 'react-icons/si';

const AboutSkills = () => {

    const lightMode = useSelector((state) => state.theme.isLightMode);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className={`${styles.container} ${lightMode ? (styles.lightContainer) : (styles.darkContainer)}`}>
            <h1>Mes comptétences</h1>
            <section className={styles.section}>
                <h2>Front-End</h2>
                <div className={styles.iconContainer} data-aos='zoom-in'>
                    <FontAwesomeIcon className={`${styles.icon} ${lightMode ? (styles.lightIcon) : (styles.darkIcon)}`} icon={faHtml5} />
                    <FontAwesomeIcon className={`${styles.icon} ${lightMode ? (styles.lightIcon) : (styles.darkIcon)}`} icon={faCss3} />
                    <SiTailwindcss className={`${styles.icon} ${lightMode ? (styles.lightIcon) : (styles.darkIcon)}`} />
                    <FontAwesomeIcon className={`${styles.icon} ${lightMode ? (styles.lightIcon) : (styles.darkIcon)}`} icon={faJs} />
                    <SiTypescript className={`${styles.tsIcon} ${lightMode ? (styles.lightTsIcon) : (styles.darkTsIcon)}`} />
                    <FontAwesomeIcon className={`${styles.icon} ${lightMode ? (styles.lightIcon) : (styles.darkIcon)}`} icon={faReact} />
                    <SiNextdotjs className={`${styles.icon} ${lightMode ? (styles.lightIcon) : (styles.darkIcon)}`} />
                </div>
            </section>
            <section className={styles.section}>
                <h2>Back-End</h2>
                <div className={styles.iconContainer} data-aos='zoom-in'>
                    <FontAwesomeIcon className={`${styles.icon} ${lightMode ? (styles.lightIcon) : (styles.darkIcon)}`} icon={faNodeJs} />
                    <SiMongodb className={`${styles.icon} ${lightMode ? (styles.lightIcon) : (styles.darkIcon)}`} />
                    <SiNextdotjs className={`${styles.icon} ${lightMode ? (styles.lightIcon) : (styles.darkIcon)}`} />
                    <SiCloudinary className={`${styles.icon} ${lightMode ? (styles.lightIcon) : (styles.darkIcon)}`} />
                    <SiStripe className={`${styles.tsIcon} ${lightMode ? (styles.lightTsIcon) : (styles.darkTsIcon)}`} />
                </div>
            </section>
            <section className={styles.section}>
                <h2>Meta Projets</h2>
                <div className={styles.iconContainer} data-aos='zoom-in'>
                    <FontAwesomeIcon className={`${styles.icon} ${lightMode ? (styles.lightIcon) : (styles.darkIcon)}`} icon={faGit} />
                    <FontAwesomeIcon className={`${styles.icon} ${lightMode ? (styles.lightIcon) : (styles.darkIcon)}`} icon={faGithub} />
                </div>
            </section>
        </div>
    )
}

export default AboutSkills