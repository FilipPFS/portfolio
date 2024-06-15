import React from 'react'
import photo from "../../images/photo.webp";
import styles from "./Home.module.css";
import { faTwitter, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { HomeProjects } from '../../components/HomeProjects/HomeProjects';
import data from '../../data';
import { ContactUs } from '../../components/Contact/Contact';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.infoContainer}>
          <span>Salut,</span>
          <h1>Je suis Filip</h1>
          <h1 className={styles.yellow}>Développeur Web</h1>
          <p>Développeur junior passionné avec une solide formation en programmation, j'ai un énorme potentiel pour apprendre rapidement et innover. Je suis déterminé à contribuer efficacement et à devenir un atout précieux pour toute équipe de développement.</p>
          <section className={styles.icons}>
            <a href='https://github.com/FilipPFS' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
            <a href='https://www.linkedin.com/in/filip-petrovic-business/' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
            <a href='https://x.com/fp__business' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
            </a>
          </section>
        </div>
        <div className={styles.imgContainer}>
          <img src={photo} alt='Filip portfolio' />
        </div>
      </div>
      <div className={styles.valueContainer}>
        <h1>Mes engagements</h1>
        <div className={styles.values}>
          <section className={styles.value}>
            <div>
              <h2>Apprendre en cotinu</h2>
              <p>Apprendre et développer constamment mes compétences et à rester informé sur les dernières avancées technologiques et des meilleures pratiques de l'industrie.</p>
            </div>
          </section>
          <section className={styles.value}>
            <div>
              <h2>Collaborer efficacement</h2>
              <p>Travailler en équipe de manière proactive et communicative pour garantir la réussite des projets et l'atteinte des objectifs communs.</p>
            </div>
          </section>
          <section className={styles.value}>
            <div>
              <h2>Fournir des solutions de qualité</h2>
              <p>Assurer que chaque ligne de code est propre, optimisée et bien testée pour garantir la fiabilité et la maintenabilité des projets.</p>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.projects}>
        <section className={styles.projectsHead}>
          <h1>Projets récents</h1>
          <Link to='/projects'><button>Voir tous</button></Link>
        </section>
        <section className={styles.projectsList}>
          {data.map((item) => {
            return (
              <HomeProjects 
              id = {item.id}
              title = {item.title}
              tech = {item.tech}
              img = {item.img}
              />
            )
          })}
        </section>
      </div>
      <ContactUs />
    </main>
  )
}

export default Home