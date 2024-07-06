import React from 'react'
import styles from "./HomeValues.module.css";
import { useSelector } from 'react-redux';
import values from './values';

const HomeValues = () => {

    const lightMode = useSelector((state) => state.theme.isLightMode);
    console.log(values);

    return (
        <div className={styles.valueContainer}>
            <h1>Mes engagements</h1>
            <div className={styles.values}>
                {values.map((item) => {
                    return (
                        <section className={`${styles.value} ${lightMode ? styles.ligthValue : styles.darkValue}`}>
                            <div>
                                <h2 className={styles.valueTitle}>
                                    {item.title}
                                </h2>
                                <p>
                                    {item.description}
                                </p>
                            </div>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

export default HomeValues