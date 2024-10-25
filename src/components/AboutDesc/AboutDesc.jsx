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
        <div>
            <h1>Mon parcours</h1>
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    contentStyle={{ background: "rgb(15, 28, 61)", color: "white" }}
                    className={`vertical-timeline-element--education`}
                    iconStyle={{ background: "rgb(2, 10, 30)", color: "#fff" }}
                    icon={<FontAwesomeIcon icon={faRocket} />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Mes débuts dans le développement
                    </h3>
                    <p>
                        J'ai débuté le développement il y a un an en me formant
                        individuellement grâce aux ressources disponibles sur Internet. J'ai
                        rapidement concentré mes efforts sur le langage JavaScript. En mars
                        de cette année, j'ai décidé de suivre une formation de Développeur
                        Web chez OpenClassrooms pour consolider mes compétences. J'ai validé
                        cette formation en trois mois et obtenu mon diplôme de Développeur
                        Web de niveau 5.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: "rgb(15, 28, 61)", color: "white" }}
                    className={`vertical-timeline-element--education`}
                    iconStyle={{ background: "rgb(2, 10, 30)", color: "#fff" }}
                    icon={<FontAwesomeIcon icon={faRocket} />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Mes débuts dans le développement
                    </h3>
                    <p>
                        J'ai débuté le développement il y a un an en me formant
                        individuellement grâce aux ressources disponibles sur Internet. J'ai
                        rapidement concentré mes efforts sur le langage JavaScript. En mars
                        de cette année, j'ai décidé de suivre une formation de Développeur
                        Web chez OpenClassrooms pour consolider mes compétences. J'ai validé
                        cette formation en trois mois et obtenu mon diplôme de Développeur
                        Web de niveau 5.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default AboutDesc