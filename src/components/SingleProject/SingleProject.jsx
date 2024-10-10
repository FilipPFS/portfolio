import { Link } from "react-router-dom"
import styles from './SingleProject.module.css';
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

const SingleProject = ({ project, description }) => {

    const lightMode = useSelector((state) => state.theme.isLightMode);

    return (
        <div
            key={project.id}
            className={`${styles.singleProject} ${lightMode ? styles.lightSingleProject : styles.darkSingleProject
                }`}
        >
            <span className={`${styles.tag} ${lightMode ? styles.lightTag : styles.darkTag}`}>{project.tech.slice(0, 1)}</span>
            <Link className={styles.imgLink} to={`/projects/${project.id}`}>
                <img
                    src={project.img[0]}
                    alt={project.title}
                    className={lightMode ? styles.lightImage : styles.darkImage}
                />
            </Link>
            <div className={styles.infos}>
                <Link to={`/projects/${project.id}`}>
                    <h2
                        className={lightMode ? styles.lightTitle : styles.darkTitle}
                    >
                        {project.title}
                    </h2>
                </Link>
                <div className={styles.buttons}>
                    <Link to={`/projects/${project.id}`} className={`${styles.detailButton} ${lightMode ? styles.lightDetailButton : styles.darkDetailButton}`} >Voir tous les détails</Link>
                    <a href={project.frontend} target="_blank" className={`${styles.detailButton} ${lightMode ? styles.lightDetailButton : styles.darkDetailButton}`}>
                        Lien Github
                    </a>
                </div>
                {project.link &&
                    <a className={`${styles.liveLink} ${lightMode ? styles.lightLiveLink : styles.darkLiveLink}`} href={project.link} target="_blank">
                        <FontAwesomeIcon icon={faArrowTrendUp} /> Voir en direct</a>}
            </div>
        </div>
    )
}

export default SingleProject