import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./Contact.module.css";

export const ContactUs = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

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
        <label>Votre nom</label>
        <input type="text" name="user_username" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Votre message</label>
        <textarea name="message" required />
        <input type="submit" value="Envoyer" className={styles.button} />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
