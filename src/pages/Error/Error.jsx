import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Error.module.css";

const Error = () => {
  return (
    <main className={styles.main}>
      <h1>Erreur 404</h1>
      <p>La page que vous demandez n'existe pas.</p>
      <Link to="/">Revenir sur la page d'accueil</Link>
    </main>
  )
}

export default Error