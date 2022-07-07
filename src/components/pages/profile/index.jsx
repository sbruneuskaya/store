import React from "react";
import styles from './styles.module.scss'
import Header from "../../header";
import Animation from "./animation";
import Info from "./info";

const Profile = () => {
    return (
        <div className={styles.wrapper}>
            <Header style="none"/>
            <div className={styles.container}>
                <Animation/>
                <Info/>
            </div>
        </div>
    )
}
export default Profile