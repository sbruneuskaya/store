import React from "react";
import styles from './styles.module.scss'
import ContactsHeader from "./contacts-header";
import Header from "../../header";
import ContactsInfo from "./contacts-info";

const Contacts = () => {
    return (
        <div className={styles.container}>
            <Header style="none"/>
            <div className={styles.wrapper}>
                <ContactsHeader/>
            </div>
            <ContactsInfo/>
        </div>
    )
}
export default Contacts