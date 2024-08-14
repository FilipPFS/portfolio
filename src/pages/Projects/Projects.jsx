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

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  return (
    <main className={styles.main}>
      <section className={styles.head}>
        <h1>Projets</h1>
      </section>

      <section className={styles.projects}>
        {data.map((project) => {
          const description = truncateText(project.description, 92);

          return (
            <div
              key={project.id}
              className={`${styles.singleProject} ${lightMode ? styles.lightSingleProject : styles.darkSingleProject
                }`}
            >
              <span className={`${styles.tag} ${lightMode ? styles.lightTag : styles.darkTag}`}>{project.tech.slice(0, 1)}</span>
              <Link className={styles.imgLink} to={`/projects/${project.id}`}>
                <img
                  src={project.img[0]}
                  alt={project.title}
                  className={lightMode ? styles.lightImage : styles.darkImage}
                />
              </Link>
              <div className={styles.infos}>
                <Link to={`/projects/${project.id}`}>
                  <h2
                    className={lightMode ? styles.lightTitle : styles.darkTitle}
                  >
                    {project.title}
                  </h2>
                </Link>
                <div className={styles.descBlock}>
                  <p>{description}</p>
                  <Link
                    className={lightMode ? styles.lightLink : styles.darkLink}
                    to={`/projects/${project.id}`}
                  >
                    Lire la suite
                  </Link>
                </div>
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
