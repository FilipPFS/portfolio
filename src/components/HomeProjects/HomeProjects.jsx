import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./HomeProjects.module.css";
import { useSelector } from 'react-redux';

export const HomeProjects = ({ id, title, tech, img }) => {

    const lightMode = useSelector((state) => state.theme.isLightMode);

    const techTags = tech.slice(0, 3);

    return (
        <div className={`${styles.container} ${lightMode ? styles.lightContainer : styles.darkContainer}`}>
            <Link to={`/projects/${id}`}>
                <img src={img[0]} alt={title} className={`${lightMode ? styles.lightImg : ""}`} />
            </Link>
            <div className={`${styles.containerInfo} ${lightMode ? styles.lightContainerInfo : styles.darkContainerInfo}`}>
                <h1>{title}</h1>
                <div className={styles.tags}>
                    {techTags.map((tag, index) => {
                        return (
                            <p key={index} className={`${styles.tag} ${lightMode ? styles.lightTag : styles.darkTag}`}>{tag}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

