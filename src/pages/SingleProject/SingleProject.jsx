import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../data";
import styles from "./SingleProject.module.css";
import { useSelector } from "react-redux";

const SingleProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lightMode = useSelector((state) => state.theme.isLightMode);

  const params = useParams();
  const projectId = parseInt(params.id);
  const singleItem = data.find((item) => item.id === projectId);
  console.log(singleItem);

  return (
    <main className={styles.main}>
      <div className={styles.mainImg}>
        <img src={singleItem.img} alt={singleItem.title} />
      </div>
      <div className={styles.projectInfo}>
        <h1>{singleItem.title}</h1>
        <p>{singleItem.description}</p>
        <div className={styles.tech}>
          Technologies utilisés
          <section className={styles.items}>
            {singleItem.tech.map((item, index) => (
              <span key={index} className={`${styles.item} ${lightMode ? styles.lightItem : styles.darkItem}`}>
                {item}
              </span>
            ))}
          </section>
        </div>
        <a className={lightMode ? styles.lightGit : styles.darkGit} href={singleItem.git} target="_blank" rel="noopener noreferrer">
          GitHub Link
        </a>
      </div>
    </main>
  );
};

export default SingleProject;
