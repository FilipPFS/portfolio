import React, { useEffect } from "react";
import data from "../../data";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";
import { ContactUs } from "../../components/Contact/Contact";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.head}>
        <h1>Projets</h1>
      </section>

      <section className={styles.projects}>
        {data.map((project) => {
          return (
            <div key={project.id} className={styles.singleProject}>
              <Link className={styles.imgLink} to={`/projects/${project.id}`}>
                <img src={project.img} alt={project.title} />
              </Link>
              <div className={styles.infos}>
                <Link to={`/projects/${project.id}`}>
                  <h2>{project.title.toUpperCase()}</h2>
                </Link>
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buttonGit}
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
