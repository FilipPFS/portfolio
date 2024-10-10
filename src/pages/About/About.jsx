import React from 'react'
import skills from './skills'
import styles from "./About.module.css";
import { useSelector } from 'react-redux';
import Timeline from '../../components/Education/Education';
import AboutDesc from '../../components/AboutDesc/AboutDesc';
import AboutSkills from '../../components/AboutSkills/AboutSkills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const About = () => {

  return (
    <main className={styles.main}>
      <div className={styles.mainHead}>
        <h1 className={styles.title}>
          <FontAwesomeIcon icon={faRocket} />
          About Me</h1>
      </div>
      <div className={styles.mainContent}>
        <AboutDesc />
        <AboutSkills />
        <Timeline />
      </div>
    </main>
  )
}

export default About