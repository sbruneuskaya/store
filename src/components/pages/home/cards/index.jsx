import React, {Component} from "react";
import styles from "./styles.module.scss";
import Card from "./card";


export class Cards extends Component {


    render() {
        return (
            <main className={styles.main}>
                {this.props.items.map(el =>
                    <Card key={el.id} item={el} addOrder={this.props.addOrder} onModalItem={this.props.onModalItem}/>
                )}
            </main>
        );
    }
}

export default Cards;