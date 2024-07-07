import React, { useEffect } from "react";
import data from "../../data";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";
import { ContactUs } from "../../components/Contact/Contact";
import { useSelector } from "react-redux";

const Projects = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lightMode = useSelector((state) => state.theme.isLightMode);

  return (
    <main className={styles.main}>
      <section className={styles.head}>
        <h1>Projets</h1>
      </section>

      <section className={styles.projects}>
        {data.map((project) => {
          return (
            <div key={project.id} className={`${styles.singleProject} ${lightMode ? styles.lightSingleProject : styles.darkSingleProject}`}>
              <Link className={styles.imgLink} to={`/projects/${project.id}`}>
                <img src={project.img} alt={project.title} className={lightMode ? styles.lightImage : styles.darkImage} />
              </Link>
              <div className={styles.infos}>
                <Link to={`/projects/${project.id}`}>
                  <h2 className={lightMode ? styles.lightTitle : styles.darkTitle}>{project.title.toUpperCase()}</h2>
                </Link>
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.buttonGit} ${lightMode ? styles.lightButtonGit : styles.darkButtonGit}`}
                >
                  GitHub Link
                </a>
              </div>
            </div>
          );
        })}
      </section>
      <ContactUs />
    </main>
  );
};

export default Projects;
