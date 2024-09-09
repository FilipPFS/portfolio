import React from 'react'
import styles from "./HomeValues.module.css";
import { useSelector } from 'react-redux';
import values from './values';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const HomeValues = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const lightMode = useSelector((state) => state.theme.isLightMode);
    console.log(values);

    return (
        <div className={styles.valueContainer} data-aos="fade-left">
            <div className={styles.titleCtn}>
                <p>QUE FAIS JE</p>
                <h1 className={styles.title}>Mes services</h1>
            </div>
            <div className={styles.values}>
                {values.map((item) => {
                    return (
                        <section className={`${styles.value} ${lightMode ? styles.ligthValue : styles.darkValue}`}>
                            <div className={styles.imageContainer}>
                                <img src={lightMode ? item.img : item.darkImg} alt={item.title} className={styles.image} />
                            </div>
                            <h3 className={lightMode ? styles.valueTitleLight : styles.valueTitleDark}>
                                {item.title}
                            </h3>
                            <p>
                                {item.description}
                            </p>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

export default HomeValues