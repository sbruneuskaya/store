import React from "react";
import styles from './styles.module.scss'

const Animation = () => {
    return (
        <section className={styles.section}>
            <video autoPlay muted loop className={styles.video}>
                <source src={require('./../../../../assets/video/smoke.mp4')} type="video/mp4"/>
            </video>
            <h1 className={styles.title}>
                <span className={styles.chart}>F</span>
                <span className={styles.chart}>U</span>
                <span className={styles.chart}>R</span>
                <span className={styles.chart}>N</span>
                <span className={styles.chart}>I</span>
                <span className={styles.chart}>T</span>
                <span className={styles.chart}>U</span>
                <span className={styles.chart}>R</span>
                <span className={styles.chart}>E</span>
            </h1>
        </section>

    )
}
export default Animation