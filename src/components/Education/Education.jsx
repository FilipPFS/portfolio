import { faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from './Education.module.css';
import { useSelector } from "react-redux";

function Timeline() {

    const lightMode = useSelector((state) => state.theme.isLightMode);

    return (
        <div className={`${styles.container} ${lightMode ? (styles.lightContainer) : (styles.darkContainer)}`}>
            <h1>Formation</h1>
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    contentStyle={lightMode ? (
                        { background: 'white', color: 'black' }
                    ) : (
                        { background: 'rgb(15, 28, 61)', color: 'white' }
                    )}
                    className={`vertical-timeline-element--education ${styles.blockOne}`}
                    date="2024"
                    iconStyle={{ background: "rgb(2, 10, 30)", color: "#fff" }}
                    icon={<FontAwesomeIcon icon={faAward} />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Formation Développeur Web (NIVEAU 5)
                    </h3>
                    <span>OpenClassrooms</span>
                    <p className={styles.paragraph}>Développement des applications web et travail sur de projets conrects.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={lightMode ? (
                        { background: 'white', color: 'black' }
                    ) : (
                        { background: 'rgb(15, 28, 61)', color: 'white' }
                    )}
                    date="2019 - 2022"
                    iconStyle={{ background: "rgb(2, 10, 30)", color: "#fff" }}
                    icon={<FontAwesomeIcon icon={faAward} />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Baccaléuréat Technologique specialité Gestion-Finance
                    </h3>
                    <span>Lycée Camille Saint-Saens</span>

                    <p className={styles.paragraph}>Gestion, comptabilité et analyse financière des entreprises</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Timeline;