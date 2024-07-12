import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./Contact.module.css";
import { useSelector } from 'react-redux';

export const ContactUs = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const lightMode = useSelector((state) => state.theme.isLightMode);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1td9lo8', 'template_s0r4rjr', form.current, {
        publicKey: 'qIWAUkvjjGOLl2GBF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setMessage("Votre message a été correctement envoyé.")
          setTimeout(() => {
            setMessage("");
          }, 5000)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className={styles.container}>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <h1>Contactez-moi</h1>
        <label htmlFor="user_username">Votre nom</label>
        <input
          type="text"
          id="user_username"
          name="user_username"
          required
          className={lightMode ? styles.lightInput : styles.darkInput}
        />
        <label htmlFor="user_email">Email</label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          required
          className={lightMode ? styles.lightInput : styles.darkInput}
        />
        <label htmlFor="message">Votre message</label>
        <textarea
          id="message"
          name="message"
          required
          className={lightMode ? styles.lightInput : styles.darkInput}
        />
        <input
          type="submit"
          value="Envoyer"
          className={`${styles.button} ${lightMode ? styles.lightButton : styles.darkButton}`}
        />
      </form>
      {message && <p>{message}</p>}
    </div>

  );
};
