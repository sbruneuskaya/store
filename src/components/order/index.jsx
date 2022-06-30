import React, {Component} from "react";
import styles from "./styles.module.scss";
import {FaTrash} from 'react-icons/fa'


export class Order extends Component {

    render() {
        return (
            <div className={styles.item}>
                <img src={"./img/" + this.props.item.img} alt="img"/>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.price}$</p>
                <FaTrash className={styles.deleteIcon} onClick={()=> this.props.onDelete(this.props.item.id)}/>
            </div>
        );
    }
}

export default Order;