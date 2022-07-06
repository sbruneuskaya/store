import React from "react";
import styles from './styles.module.scss';
import {useNavigate} from "react-router";
import {FaCheck} from 'react-icons/fa';

const ButtonRedirect = (props) => {
    const navigate = useNavigate()
    return (
        <div className={styles.wrapper} onClick={() => navigate("/search")}>
            <div>
                {props.title}
            </div>
            <FaCheck className={styles.button}/>
        </div>

    )
}

export default ButtonRedirect;