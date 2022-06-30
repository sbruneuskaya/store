import React, {useState} from "react";
import styles from './styles.module.scss';
import {FaShoppingCart} from "react-icons/fa";
import classNames from "classnames";
import Order from "../order";

const showOrders = (props) => {
    let result=0;
    props.orders.forEach(el=> result += Number.parseFloat(el.price))
    return (
        <>
            {props.orders.map(el => <Order onDelete={props.onDelete} key={el.id} item={el}/>
            )}
            <p className={styles.sum}> Сумма: {new Intl.NumberFormat().format(result)}$</p>
        </>
    )
}

const showText = () => {
    return (
        <>
            <h2>Корзина пуста</h2>
        </>
    )
}

const Header = (props) => {
    let [open, setOpen] = useState(false);

    return (
        <header>
            <div>
                <span className={styles.logo}>house staff</span>
                <ul className={styles.nav}>
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <FaShoppingCart onClick={() => setOpen(open = !open)}
                                className={classNames(styles.shopCardButton, open ? styles.active : '')}/>
                {open && (
                    <div className={styles.shopCard}>
                        {props.orders.length > 0 ? showOrders(props) : showText()}
                    </div>
                )}
            </div>
            <div className={styles.presentation}/>
        </header>
    )
}

export default Header;