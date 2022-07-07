import React from "react";
import styles from './styles.module.scss';
import Footer from "./footer";
import data from './data';
import Cards from "./cards";
import Categories from "./categories/categories";
import ModalItem from "./modal-item";
import ButtonRedirect from "../../button";
import HomeTitle from "./home-title";
import Header from "../../header";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [...data],
            modalItem: false,
            fullCard: {},
        }
        this.state.currentItems = this.state.items
        this.chooseCategory = this.chooseCategory.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.addToOrder = this.addToOrder.bind(this)
        this.onModalItem = this.onModalItem.bind(this)
    }


    componentDidMount = () => {
        this._getOrdersFromStorage();
        // this._getCurrentItemsFromStorage();
    }

    componentDidUpdate() {
        this._setOrdersToStorage();
        // this._setCurrentItemsToStorage()
    }

    _getOrdersFromStorage() {
        if (typeof localStorage.orders === 'undefined') {
            localStorage.orders = '[]';
        }

        this.setState({
            orders: JSON.parse(localStorage.orders)
        });
    }

    _setOrdersToStorage() {
        localStorage.orders = JSON.stringify(this.state.orders);
    }

    // _getCurrentItemsFromStorage() {
    //     if (typeof localStorage.currentItems === 'undefined') {
    //         localStorage.currentItems = '[]';
    //     }
    //
    //     this.setState({
    //         currentItems: JSON.parse(localStorage.currentItems)
    //     });
    // }
    //
    // _setCurrentItemsToStorage() {
    //     localStorage.currentItems = JSON.stringify(this.state.currentItems);
    // }

    render() {
        return (
            <div className={styles.wrapper}>
                <Header orders={this.state.orders} onDelete={this.deleteOrder} style="block"/>
                <div className={styles.container}>
                    <HomeTitle orders={this.state.orders} onDelete={this.deleteOrder}/>
                    <Categories getCategory={this.chooseCategory}/>
                    <Cards onModalItem={this.onModalItem} items={this.state.currentItems} addOrder={this.addToOrder}/>
                    {this.state.modalItem &&
                    <ModalItem item={this.state.fullCard} onModalItem={this.onModalItem} addOrder={this.addToOrder}/>}
                    <ButtonRedirect title="Смотреть вcё"/>
                    <Footer/>
                </div>
            </div>
        );
    }

    onModalItem(item) {
        this.setState({fullCard: item})
        this.setState({modalItem: !this.state.modalItem})
    }

    chooseCategory(category) {
        if (category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder(item) {
        let isArr = false
        this.state.orders.forEach(el => {
            if (el.id === item.id) {
                isArr = true;
            }
        })
        if (!isArr) {

            this.setState({
                    orders: [...this.state.orders, item]
                }
            )
        }
    }
}

export default Home;
