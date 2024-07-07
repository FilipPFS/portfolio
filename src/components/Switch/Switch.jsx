import React, { useState } from 'react'
import styles from "./Switch.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../../feautures/themeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Switch = () => {

    const [dark, setDark] = useState(false);

    const lightMode = useSelector((state) => state.theme.isLightMode);
    const dispatch = useDispatch();

    console.log(lightMode)

    const handleTheme = () => {
        dispatch(toggleMode());
    };

    return (
        <label className={styles.switch}>
            <input type="checkbox" checked={!lightMode} onChange={handleTheme} />
            <span className={styles.slider}>
                {lightMode ? <FontAwesomeIcon icon={faSun} className={styles.sun} /> : <FontAwesomeIcon icon={faMoon} className={styles.moon} />}
            </span>
        </label>
    )
}

export default Switch