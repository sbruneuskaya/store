import React, {Component} from "react";
import styles from "./styles.module.scss";


export class Card extends Component {


    render() {
        return (
            <div className={styles.item}>
                <img src={this.props.item.img} alt="img" onClick={()=> this.props.onModalItem(this.props.item)}/>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.description}</p>
                <b>{this.props.item.price}$</b>
                <div className={styles.addToCart} onClick={()=> this.props.addOrder(this.props.item)}>+</div>
            </div>
        );
    }
}

export default Card;