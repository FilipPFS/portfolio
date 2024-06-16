import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data';
import styles from "./SingleProject.module.css";

const SingleProject = () => {

    const params = useParams();
    const projectId = parseInt(params.id)
    const singleItem = data.find(item => item.id === projectId);
    console.log(singleItem);

    return (
        <main className={styles.main}>
            <img src={singleItem.img} alt={singleItem.title} />
            <div className={styles.projectInfo}>
                <h1>{singleItem.title}</h1>
                <p>{singleItem.description}</p>
                <div className={styles.tech}>Technologies utilisés
                    <section className={styles.items}>
                        {singleItem.tech.map((item, index) => <span key={index} className={styles.item}>{item}</span>)}
                    </section>
                </div>
                <a href={singleItem.git}>GitHub Link</a>
            </div>
        </main>
    )
}

export default SingleProject