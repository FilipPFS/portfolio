import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./HomeProjects.module.css";

export const HomeProjects = ({ id, title, tech, img }) => {
    return (
        <div className={styles.container}>
            <Link to={`/projects/${id}`}>
                <img src={img} alt={title} />
            </Link>
            <h1>{title}</h1>
            <div className={styles.tags}>
                {tech.map((tag, index) => {
                    return (
                        <p key={index} className={styles.tag}>{tag}</p>
                    )
                })}
            </div>
        </div>
    )
}
