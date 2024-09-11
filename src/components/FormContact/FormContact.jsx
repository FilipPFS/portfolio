import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import styles from "./FormContact.module.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const FormContact = () => {

    const form = useRef();

    const lightMode = useSelector
        ((state) => state.theme.isLightMode);

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
                    toast.success("Le message a été envoyé.")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <div className={styles.inputFields}>
                <input
                    type="text"
                    placeholder="Prénom"
                    id="user_username"
                    name="user_username"
                    required
                    className={lightMode ? styles.lightInput : styles.darkInput}
                />
                <input
                    type="email"
                    placeholder="Email"
                    id="user_email"
                    name="user_email"
                    required
                    className={lightMode ? styles.lightInput : styles.darkInput}
                /></div>
            <textarea
                placeholder="Message"
                id="message"
                name="message"
                required
                className={lightMode ? styles.lightInput : styles.darkInput}
            />
            <button
                type="submit"
                className={`${styles.button} ${lightMode ? styles.lightButton : styles.darkButton}`}
            >
                Envoyer
            </button>

        </form>
    )
}

export default FormContact