import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../data";
import styles from "./SingleProject.module.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SingleProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lightMode = useSelector((state) => state.theme.isLightMode);
  const [selected, setSelected] = useState(false);
  const [index, setIndex] = useState(0);

  const params = useParams();
  const projectId = parseInt(params.id);
  const singleItem = data.find((item) => item.id === projectId);
  console.log(singleItem);

  const handleImg = (index) => {
    document.body.style.overflow = 'hidden';
    setSelected(prevSelected => !prevSelected);
    setIndex(index);
  }

  const addIndex = () => {
    if (index < singleItem.img.length - 1) {
      setIndex(prevIndex => prevIndex + 1);
    } else {
      setIndex(0)
    }
  };

  const removeIndex = () => {
    if (index > 0) {
      setIndex(prevIndex => prevIndex - 1);
    } else {
      setIndex(singleItem.img.length - 1);
    }
  };

  const setOverlay = () => {
    document.body.style.overflow = '';
    setSelected(false);
  }


  return (
    <main className={styles.main}>
      {selected && <div className={styles.overlay} onClick={setOverlay}></div>}
      <div className={styles.goBack}>
        <Link to={'/projects'} className={`${styles.goBackLink} ${lightMode ? styles.goBackLinkLight : styles.goBackLinkDark}`}><FontAwesomeIcon icon={faArrowLeft} /> <span>Go Back</span></Link>
      </div>
      {!selected ? <div className={styles.mainImg}>
        {singleItem.img.map((image, index) => {
          return (<img src={image} onClick={() => handleImg(index)} alt={singleItem.title} />)
        })}
      </div> :
        <div className={styles.singleImg}>
          <button onClick={removeIndex} className={styles.leftBtn}><FontAwesomeIcon icon={faArrowLeft} /></button>
          <img src={singleItem.img[index]} alt="..." />
          <button onClick={addIndex} className={styles.rightBtn}><FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      }
      <div className={`${styles.projectInfo} ${lightMode ? styles.lightProjectInfo : styles.darkProjectInfo}`}>
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
        <div className={styles.gitBtns}>
          {singleItem.frontend &&
            <a
              href={singleItem.frontend}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className={styles.gitLink}
            >
              <button className={`${styles.gitButton} ${lightMode ? styles.gitButtonLight : styles.gitButtonRight}`}>
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`${styles.icon} ${lightMode ? styles.lightIcon : styles.darkIcon
                    }`}
                />
                Frontend
              </button>
            </a>}
          {singleItem.backend &&
            <a
              href={singleItem.backend}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className={styles.gitLink}
            >
              <button className={`${styles.gitButton} ${lightMode ? styles.gitButtonLight : styles.gitButtonRight}`}>
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`${styles.icon} ${lightMode ? styles.lightIcon : styles.darkIcon
                    }`}
                />
                Backend
              </button>
            </a>}
        </div>
      </div>

    </main>
  );
};

export default SingleProject;
