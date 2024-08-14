import React from "react";
import photo from "../../images/photo.webp";
import lightPhoto from "../../images/photoLight.webp";
import image from "../../images/image.webp";
import styles from "./Home.module.css";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { HomeProjects } from "../../components/HomeProjects/HomeProjects";
import data from "../../data";
import { ContactUs } from "../../components/Contact/Contact";
import { useSelector } from "react-redux";
import HomeValues from "../../components/HomeValues/HomeValues";

const Home = () => {
  const recentProjects = data.slice(0, 3);
  const lightMode = useSelector((state) => state.theme.isLightMode);

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.infoContainer}>
          <span>Salut,</span>
          <h1 className={styles.infoTitle}>Je suis Filip</h1>
          <h1 className={`${lightMode ? styles.light : styles.dark} ${styles.infoTitle}`}>
            Développeur Web
          </h1>
          <h1 className={`${lightMode ? styles.light : styles.dark} ${styles.infoJs}`}>Java Script</h1>
          <p>
            Développeur junior JavaScript passionné avec une solide formation en
            programmation, j'ai un énorme potentiel pour apprendre rapidement et
            innover. Je suis déterminé à contribuer efficacement et à devenir un
            atout précieux pour toute équipe de développement.
          </p>
          <section className={styles.icons}>
            <a
              href="https://github.com/FilipPFS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FontAwesomeIcon icon={faGithub} className={`${styles.icon} ${lightMode ? styles.lightIcon : styles.darkIcon}`} />
            </a>
            <a
              href="https://www.linkedin.com/in/filip-petrovic-business/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} className={`${styles.icon} ${lightMode ? styles.lightIcon : styles.darkIcon}`} />
            </a>
            <a
              href="https://x.com/fp__business"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} className={`${styles.icon} ${lightMode ? styles.lightIcon : styles.darkIcon}`} />
            </a>
          </section>
        </div>
        <div className={styles.imgContainer}>
          <img src={lightMode ? lightPhoto : photo} alt="Filip portfolio" />
        </div>
      </div>
      <HomeValues />
      <div className={styles.projects}>
        <section className={styles.projectsHead}>
          <h1>Projets récents</h1>
          <Link to="/projects">
            <button className={lightMode ? styles.lightButton : styles.darkButton}>Voir tous</button>
          </Link>
        </section>
        <section className={styles.projectsList}>
          {recentProjects.map((item) => {
            return (
              <HomeProjects
                key={item.id}
                id={item.id}
                title={item.title}
                tech={item.tech}
                img={item.img}
              />
            );
          })}
        </section>
      </div>
      <ContactUs />
    </main>
  );
};

export default Home;
