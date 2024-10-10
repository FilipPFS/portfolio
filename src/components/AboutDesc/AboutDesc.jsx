import React from 'react'
import styles from './AboutDesc.module.css';
import { useSelector } from 'react-redux';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBullseye, faEye, faRocket } from '@fortawesome/free-solid-svg-icons';

const AboutDesc = () => {

    const lightMode = useSelector
        ((state) => state.theme.isLightMode);

    return (
        <div className={`${styles.container} ${lightMode ? (styles.lightContainer) : (styles.darkContainer)}`}>
            <h1>Mon parcours</h1>
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    contentStyle={lightMode ? (
                        { background: 'white', color: 'black' }
                    ) : (
                        { background: 'rgb(15, 28, 61)', color: 'white' }
                    )}
                    className={`vertical-timeline-element--education ${styles.blockOne}`}
                    iconStyle={{ background: "rgb(2, 10, 30)", color: "#fff" }}
                    icon={<FontAwesomeIcon icon={faRocket} />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Mes débuts dans le développement
                    </h3>
                    <p className={styles.paragraph}>
                        J'ai débuté le développement il y a un an en me formant individuellement
                        grâce aux ressources disponibles sur Internet. J'ai rapidement concentré mes efforts sur le langage JavaScript. En mars de cette année,
                        j'ai décidé de suivre une formation de Développeur Web chez OpenClassrooms pour consolider mes compétences.
                        J'ai validé cette formation en trois mois et obtenu mon diplôme de Développeur Web de niveau 5.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={lightMode ? (
                        { background: 'white', color: 'black' }
                    ) : (
                        { background: 'rgb(15, 28, 61)', color: 'white' }
                    )}
                    iconStyle={{ background: "rgb(2, 10, 30)", color: "#fff" }}
                    icon={<FontAwesomeIcon icon={faBullseye} />}
                >
                    <h3 className="vertical-timeline-element-title">
                        La motivation pour progresser
                    </h3>

                    <p className={styles.paragraph}>
                        Tout au long de l'été, j'ai voulu renforcer mes compétences en travaillant sur des projets réels.
                        J'ai ainsi réalisé un site d'e-commerce, un réseau social et une application de location.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={lightMode ? (
                        { background: 'white', color: 'black' }
                    ) : (
                        { background: 'rgb(15, 28, 61)', color: 'white' }
                    )}
                    iconStyle={{ background: "rgb(2, 10, 30)", color: "#fff" }}
                    icon={<FontAwesomeIcon icon={faEye} />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Recherche de nouvelle expériences professionnelles
                    </h3>

                    <p className={styles.paragraph}>
                        Aujourd'hui, je cherche à enrichir encore mon expérience professionnelle. Je suis à la recherche d'une alternance en développement web ou d'un contrat CDI,
                        ce qui me permettra de gagner en expérience, d'approfondir mes compétences et mes connaissances, et d'explorer de nouvelles technologies.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div >
    )
}

export default AboutDesc