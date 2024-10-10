import React, { useEffect } from "react";
import data from "../../data";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";
import { ContactUs } from "../../components/Contact/Contact";
import { useSelector } from "react-redux";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SingleProject from "../../components/SingleProject/SingleProject";


const Projects = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000 });
  }, []);

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

      <section className={styles.projects} data-aos="fade-right">
        {data.map((project) => {
          const description = truncateText(project.description, 92);

          return (
            <SingleProject project={project} description={description} />
          );
        })}
      </section>
      <ContactUs />
    </main>
  );
};

export default Projects;
