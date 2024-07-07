import React from 'react'
import skills from './skills'
import styles from "./About.module.css";
import { useSelector } from 'react-redux';

const About = () => {

  const lightMode = useSelector((state) => state.theme.isLightMode);

  return (
    <main className={styles.main}>
      <div className={styles.mainHead}>
        <h1>À propos</h1>
        <p className={lightMode ? styles.lightText : styles.darkText}>Une description de mon parcours professionnel et de mes compétences.</p>
      </div>
      <div className={styles.mainContent}>
        <section className={`${styles.mainSection} ${styles.mainSectionOne}`}>
          <h2>Parcours</h2>
          <p className={lightMode ? styles.lightText : styles.darkText}>J'ai débuté le développement par une formation OpenClassroom de développeur web qui m'a fait découvrir le développement avec plusieurs projets concrets. C'est aussi grâce à cette formation que j'ai pu développé beaucoup de comptétences et consolider celles que je possedais déjà. Maintenant, je souhaite encrichir mes comptétences en travaillant sur les nouvelles technologies comme TypeScript par exemple. De plus, je souhaite enrichir mon expérience professionnelle et décrocher un premier emploi dans le développement web. Cela me permettra de développer de nouvelles compétences tout en consolidant celles que je possède déjà.</p>
        </section>
        <section className={`${styles.mainSection} ${styles.mainSectionTwo}`}>
          <h2>Formation</h2>
          <p className={lightMode ? styles.lightText : styles.darkText}>Diplôme RNCP (BAC +2)</p>
        </section>
        <section className={styles.mainSection}>
          <h2>Comptétences</h2>
          <div className={styles.mainSkills}>
            {skills.map((skill, index) => {
              return (
                <div key={index} className={styles.singleSkill}>
                  <span className={`${styles.skillTitle} ${lightMode ? styles.lightText : styles.darkText}`}>{skill.title}</span>
                  <div className={styles.allSkills}>{skill.tags.map((tag, index) => <span key={index} className={`${styles.skill} ${lightMode ? styles.lightSkill : styles.darkSkill}`}>{tag}</span>)}</div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}

export default About