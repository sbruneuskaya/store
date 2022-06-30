import React, {Component} from "react";
import styles from "./styles.module.scss";


export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state={
            category:[
                {
                    key:'all',
                    name: 'Смотреть всё'
                },
                {
                    key:'armchair',
                    name: '#Кресло'
                },
                {
                    key:'chair',
                    name: '#Стул'
                },
                {
                    key:'dresser',
                    name: '#Комод'
                },
                {
                    key:'lamp',
                    name: '#Лампа'
                },
                {
                    key:'sofa',
                    name: '#Диван'
                },
            ]
        }
    }

    render() {
        return (
            <div className={styles.categories}>
                {this.state.category.map(el=>(
                    <div key={el.key} className={styles.categoriesItem} onClick={()=>this.props.getCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        );
    }
}

export default Categories;