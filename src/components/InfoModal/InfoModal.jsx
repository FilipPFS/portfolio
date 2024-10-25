import React, { useState } from 'react'
import styles from './InfoModal.module.css';

const InfoModal = () => {

    const [open, setOpen] = useState(true);

    return (
        <>
            {open && <div className={styles.overlay} onClick={() => setOpen(false)}></div>}
            {open && (
                <div className={styles.modal}>
                    <section className={styles.content}>
                        <h2>Info Importante</h2>
                        <p>Un nouveau portfolio a été réalisé, celui-là est l'ancienne version.</p>
                        <a className={styles.link} href='https://www.filip-petrovic.org/'>Voir le nouveau portfolio</a>
                    </section>
                </div>
            )}
        </>
    )
}

export default InfoModal