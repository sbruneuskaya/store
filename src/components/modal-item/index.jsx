import React, {Component} from "react";
import styles from "./styles.module.scss";



export class ModalItem extends Component {

    render() {
        return (
            <div className={styles.fullCard}>
                <div className={styles.wrapper}>
                    <img src={"./img/" + this.props.item.img} alt="img" onClick={()=> this.props.onModalItem(this.props.item)}/>
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.description}</p>
                    <b>{this.props.item.price}$</b>
                    <div className={styles.addToCart} onClick={()=> this.props.addOrder(this.props.item)}>+</div>
                </div>
            </div>
        );
    }
}

export default ModalItem;