import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./Contact.module.css";
import { useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import FormContact from '../FormContact/FormContact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';

export const ContactUs = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const lightMode = useSelector
    ((state) => state.theme.isLightMode);

  return (
    <div className={`${styles.container} ${lightMode ? styles.lightContainer : styles.darkContainer}`} data-aos="zoom-in">
      <div className={styles.firstChild}>
        <h1 className={styles.title}>Mes informations</h1>
        <p>
          Vous trouverez ici mes informations de contact ainsi que mon adresse. Vous pouvez également utiliser directement le formulaire à côté.
        </p>
        <section className={styles.contactInfos}>
          <div className={styles.infoContainer}>
            <span className={`${styles.iconContainer} ${lightMode ? styles.lightIconContainer : styles.darkIconContainer}`}>
              <FontAwesomeIcon icon={faLocation} className={`${styles.icon} ${lightMode ? styles.lightIcon : styles.darkIcon}`} />
            </span>
            <span className={styles.info}>Montmagny 95360</span>
          </div>
          <div className={styles.infoContainer}>
            <span className={`${styles.iconContainer} ${lightMode ? styles.lightIconContainer : styles.darkIconContainer}`}>
              <FontAwesomeIcon icon={faEnvelope} className={`${styles.icon} ${lightMode ? styles.lightIcon : styles.darkIcon}`} />
            </span>
            <span className={styles.info}>filippetrovicfr04@gmail.com</span>
          </div>
          <div className={styles.infoContainer}>
            <span className={`${styles.iconContainer} ${lightMode ? styles.lightIconContainer : styles.darkIconContainer}`}>
              <FontAwesomeIcon icon={faPhone} className={`${styles.icon} ${lightMode ? styles.lightIcon : styles.darkIcon}`} />
            </span>
            <span className={styles.info}>07 68 45 00 84</span>
          </div>
        </section>
      </div>
      <div className={styles.secondChild}>
        <h1>Contactez-moi</h1>
        <FormContact />
      </div>
    </div>

  );
};
